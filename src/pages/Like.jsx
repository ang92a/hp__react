import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { data } from "../data/hp";

export const Like = ({ liked, like, dislike, setLiked, title, subtitle }) => {
  const filteredData = data.filter((elem) => liked.includes(elem.name));
  console.log(filteredData);
  return (
    <>
      <Link
        to={`/`}
        style={{
          top: "50px",
          display: "block",
          fontSize: "24px",
          left: "50px",
          position: "fixed",
        }}
      >
        ← Back To All
      </Link>
      <Header title={title} subtitle={subtitle} style={{ display: "none" }} />
      <Main
        arr={filteredData}
        liked={liked}
        setLiked={setLiked}
        like={like}
        dislike={dislike}
      />
    </>
  );
};
