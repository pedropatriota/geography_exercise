import coverImg from "@/assets/globe.png";
import { CheckAnswer, Header, Modal } from "@/components";
import data from "@/config/config.json";

import { useContent } from "./useContent";

export const Content = () => {
  const {
    renderQuestions,
    disabled,
    openModal,
    close,
    totalCorrections,
    handleValidate,
    validationMode,
    handleTryAgain,
  } = useContent();

  const choiceAlignment = data.options[0].value;

  return (
    <>
      <Header title={data.title} subtitle={data.subtitle} cover={coverImg} />
      {renderQuestions(data.elements, choiceAlignment)}
      <CheckAnswer
        disabled={disabled}
        validationMode={validationMode}
        handleTryAgain={handleTryAgain}
        handleValidate={() => handleValidate(data.responseDeclaration)}
      />
      <Modal
        open={openModal}
        close={close}
        title="Your Score"
        info={`${totalCorrections} of ${data.elements.length}`}
        labelButton="close"
      />
    </>
  );
};
