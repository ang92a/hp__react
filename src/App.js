import "./index.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { data } from "./data/hp";
import { Select } from "./components/Select/Select";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const inputHandler = (evt) => setInputValue(evt.target.value);
  const inputCurrentValue = inputValue.trim().toLowerCase();

  const [selectValue, setSelectValue] = useState("");
  const selectHandler = (evt) => setSelectValue(evt.target.value);
  const selectCurrentValue = selectValue.trim().toLowerCase();

  const filteredData = data.filter(
    (el) =>
      el.name.trim().toLowerCase().includes(inputCurrentValue) &&
      el.house.toLowerCase().includes(selectCurrentValue)
  );

  return (
    <>
      <Header>
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
      </Header>
      <Main arr={filteredData} />
    </>
  );
}

export default App;
