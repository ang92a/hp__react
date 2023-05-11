import React from "react";
import { Select } from "../Select/Select";
import { data } from "../../data/hp";

export const Input = ({ inputValue, inputHandler, selectHandler }) => {
  return (
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
  );
};
