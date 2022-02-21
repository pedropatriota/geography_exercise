import * as S from "./Question.styles";

export interface QuestionProps {
  order: string | number;
  text: string;
  responseIdentifier: string;
}

export const Question = ({
  order,
  text,
  responseIdentifier,
}: QuestionProps): JSX.Element => (
  <S.Question id={responseIdentifier}>
    <span>{`${order}. `}</span> {text}
  </S.Question>
);
