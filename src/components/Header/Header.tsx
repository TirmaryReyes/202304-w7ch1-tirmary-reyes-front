import HeaderStyled from "./HeaderStyled";

export interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps): JSX.Element => {
  return (
    <HeaderStyled className="header-container">
      <h1 className="header-container__title">{title}</h1>
    </HeaderStyled>
  );
};

export default Header;
