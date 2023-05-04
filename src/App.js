import "./index.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { data } from "./data/hp";
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
      <Header
        inputValue={inputValue}
        inputHandler={inputHandler}
        selectHandler={selectHandler}
      />
      <Main arr={filteredData} />
    </>
  );
}

export default App;
