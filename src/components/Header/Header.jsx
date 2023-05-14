import "./Header.css";
import { Input } from "../Input/Input";

export const Header = ({
  inputValue,
  inputHandler,
  selectHandler,
  title,
  subtitle,
  style
}) => {
  return (
    <header className="header header__wrapper">
      <div className="container">
        <div className="text">
          <p className="text__title">{title}</p>
          <p className="text__subtitle">{subtitle}</p>
        </div>
        <Input
          style={style}
          inputValue={inputValue}
          inputHandler={inputHandler}
          selectHandler={selectHandler}
        />
      </div>
    </header>
  );
};
