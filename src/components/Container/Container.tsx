import * as S from "./Container.styles";

export type AlignmentProps = "vertical" | "horizontal" | string;

export interface ContainerProps {
  children: React.ReactNode;
  choiceAlignment: AlignmentProps;
}

export const Container = ({
  children,
  choiceAlignment = "vertical",
}: ContainerProps): JSX.Element => (
  <S.Container choiceAlignment={choiceAlignment}>{children}</S.Container>
);
