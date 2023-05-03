import "./index.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { data } from "./data/hp";
import { Select } from "./components/Select/Select";

function App() {





  
  return (
    <>
      <Header>
        <div className="search__left">
          <p className="search__text">Name</p>
          <input className="search__input" type="text" placeholder="Name" />
        </div>
        <div className="select__right">
          <p className="select__text">School</p>
          <select id="select">
            <option value="">Choose one</option>
            <Select array={data} />
          </select>
        </div>
      </Header>
      <Main arr={data} />
    </>
  );
}

export default App;
