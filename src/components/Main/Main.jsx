import React from "react";
import "./Main.css";
import { Card } from "../Card/Card";

export const Main = ({ arr }) => {
  return (
    <main className="main main__wrapper">
      <div className="container">
        <div className="cards">
          {arr.map((obj) => (
            <Card key={obj.name} obj={obj} />
          ))}
        </div>
      </div>
    </main>
  );
};
