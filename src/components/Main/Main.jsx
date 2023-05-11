import React from "react";
import "./Main.css";
import { Card } from "../Card/Card";
import { Link } from "react-router-dom";

export const Main = ({ arr, liked, setLiked, like, dislike }) => {
  return (
    <main className="main main__wrapper">
      <div className="container">
        <div className="cards">
          {arr.map((obj) => (
            <Card
              key={obj.name}
              obj={obj}
              liked={liked}
              setLiked={setLiked}
              like={like}
              dislike={dislike}
            />
          ))}
        </div>
        <Link to={`like`}>
          <button className="showButton">
            <svg
              width="24"
              height="23"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "10px" }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9997 1.97108C18.6567 -4.87192 35.3007 7.10258 11.9997 22.5001C-11.3013 7.10408 5.34267 -4.87192 11.9997 1.97108Z"
                fill="#DC3545"
              />
            </svg>
            Show Liked
          </button>
        </Link>
      </div>
    </main>
  );
};
