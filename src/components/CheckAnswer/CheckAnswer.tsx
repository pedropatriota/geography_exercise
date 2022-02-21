import { Check } from "@styled-icons/bootstrap";
import { BackInTime } from "@styled-icons/entypo";
import { Close } from "@styled-icons/evaicons-solid";

import * as S from "./CheckAnswer.styles";

export interface CheckAnswerProps {
  disabled: boolean;
  validationMode?: boolean;
  handleTryAgain?: () => void;
  handleValidate?: () => void;
}

export const CheckAnswer = ({
  disabled = true,
  validationMode,
  handleTryAgain,
  handleValidate,
}: CheckAnswerProps): JSX.Element => {
  return (
    <S.RoundContainer
      disabled={disabled}
      type={validationMode ? "button" : "submit"}
      onClick={validationMode ? handleTryAgain : handleValidate}
    >
      {validationMode ? (
        <BackInTime fill="#fff" />
      ) : (
        <>
          <Check fill="#fff" />
          <Close fill="#fff" />
        </>
      )}
    </S.RoundContainer>
  );
};
