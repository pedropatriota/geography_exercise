import * as S from "./Modal.styles";

export interface ModalProps {
  open: boolean;
  close: () => void;
  title?: string;
  info?: string;
  labelButton: string;
}

export const Modal = ({
  open,
  close,
  title,
  info,
  labelButton,
}: ModalProps): JSX.Element => {
  return (
    <S.Container open={open}>
      <S.Content>
        <h3>{title}</h3>
        <S.Info>
          <h1>{info}</h1>
        </S.Info>
        <S.Button onClick={close}>{labelButton}</S.Button>
      </S.Content>
    </S.Container>
  );
};
