import * as S from "./Header.styles";

interface HeaderProps {
  title: string;
  subtitle: string;
  cover?: string;
}

export const Header = ({
  title,
  subtitle,
  cover,
}: HeaderProps): JSX.Element => (
  <S.Header>
    <S.Title>{title}</S.Title>
    <S.Description>{subtitle}</S.Description>
    <S.CoverImage src={cover} alt={`${title} cover image`} />
  </S.Header>
);
