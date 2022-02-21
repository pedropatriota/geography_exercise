import { useCallback, useEffect, useState } from "react";

import { Container, Option, Question } from "@/components";
import { AlignmentProps } from "@/components/Container";

type ChoicesJsonProps = {
  identifier: string;
  text?: string;
  "#text"?: string;
};

type responseDeclarationProps = {
  identifier: string;
  correctResponse: {
    value: string;
  };
};

type Alignment = AlignmentProps | string;

interface ElementsJsonProps {
  question: string;
  responseIdentifier: string;
  choices: ChoicesJsonProps[];
}

export const useContent = () => {
  const [responses, setResponses] = useState({
    RESPONSE0: "",
    RESPONSE1: "",
    RESPONSE2: "",
  });

  const [disabled, setDisabled] = useState<boolean>(true);

  const [disableInput, setDisableInput] = useState<boolean>(false);

  const [validationMode, setValidationMode] = useState<boolean>(false);

  const [status, setStatus] = useState<
    ("default" | "error" | "success" | "selected")[][]
  >([
    ["default", "default", "default"],
    ["default", "default", "default"],
    ["default", "default", "default"],
  ]);

  const [dataToShuffle, setDataToShuffle] = useState<
    ChoicesJsonProps[] | undefined
  >([]);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [totalCorrections, setTotalCorrections] = useState<number | string>(0);

  useEffect(() => {
    if (Object.values(responses).some(res => res !== "")) {
      setDisabled(false);
    } else setDisabled(true);
  }, [responses]);

  const handleInputChange = useCallback(
    (name: string, value: string) => {
      setResponses({
        ...responses,
        [name]: value,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [responses]
  );

  useEffect(() => {
    const state = [...status];
    if (Object.values(responses)?.some(res => res !== "")) {
      Object.values(responses)?.map((res, i) => {
        if (res !== "") {
          const index = Number(res?.split("")?.splice(1)?.[2]);
          if (`C${i}_${index}` !== res) state[i][index] = "default";
          else {
            state[i] = ["default", "default", "default"];
            state[i][index] = "selected";
          }
          setStatus(state);
        }
      });
    } else {
      setStatus([
        ["default", "default", "default"],
        ["default", "default", "default"],
        ["default", "default", "default"],
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responses]);

  const alphabetic = ["a", "b", "c"];

  const disableRadioButton = () => setDisableInput(true);

  const shuffleArray = (array: ChoicesJsonProps[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const calculateCorrections = (data: responseDeclarationProps[]) => {
    let count = 0;
    const state = [...status];
    data.map((item, i) => {
      if (Object.values(responses).includes(item.correctResponse.value)) {
        state[i].map((n, index) => {
          if (state[i][index] === "selected") state[i][index] = "success";
        });
        setStatus(state);
        count++;
      } else {
        state[i].map((n, index) => {
          if (state[i][index] === "selected") state[i][index] = "error";
        });
        setStatus(state);
      }
    });
    setTotalCorrections(count);
  };

  const close = () => setOpenModal(prev => !prev);

  const handleValidate = (data: responseDeclarationProps[]) => {
    calculateCorrections(data);
    setOpenModal(prev => !prev);
    disableRadioButton();
    setValidationMode(true);
  };

  const handleTryAgain = useCallback(() => {
    setDisableInput(false);
    setValidationMode(false);
    setStatus([
      ["default", "default", "default"],
      ["default", "default", "default"],
      ["default", "default", "default"],
    ]);
  }, []);

  const renderQuestions = (
    data: ElementsJsonProps[],
    choiceAlignment: Alignment
  ) =>
    data.map(
      ({ question, responseIdentifier, choices }, index): JSX.Element => {
        return (
          <Container key={responseIdentifier} choiceAlignment={choiceAlignment}>
            <Question
              order={index + 1}
              text={question}
              responseIdentifier={responseIdentifier}
            />

            {choices?.map((choice, id) => (
              <Option
                key={choice.identifier}
                identifier={choice.identifier}
                responseIdentifier={responseIdentifier}
                order={alphabetic[id]}
                status={status[index][id]}
                handleInputChange={handleInputChange}
                option={choice["#text"] || choice["text"]}
                disabled={disableInput}
              />
            ))}
          </Container>
        );
      }
    );

  return {
    shuffleArray,
    renderQuestions,
    openModal,
    close,
    disabled,
    handleValidate,
    totalCorrections,
    handleTryAgain,
    validationMode,
  };
};
