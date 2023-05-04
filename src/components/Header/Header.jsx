import "./Header.css";
import { data } from "../../data/hp";
import { Select } from "../Select/Select";

export const Header = ({ inputValue, inputHandler, selectHandler }) => {
  return (
    <header className="header header__wrapper">
      <div className="container">
        <div className="text">
          <p className="text__title">Harry Potter</p>
          <p className="text__subtitle">
            View all characters from the Harry Potter universe
          </p>
        </div>
        <div className="header__search">
          <div className="search__left">
            <p className="search__text">Name</p>
            <input
              className="search__input"
              type="text"
              placeholder="Name"
              value={inputValue}
              onChange={inputHandler}
            />
          </div>
          <div className="select__right">
            <p className="select__text">School</p>
            <select id="select" onChange={selectHandler}>
              <option value="">Choose one</option>
              <Select array={data} />
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};
