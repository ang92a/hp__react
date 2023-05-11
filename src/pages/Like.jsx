import React from "react";
import { Link } from "react-router-dom";

export const Like = ({ liked }) => {

    const filteredData = data.filter((elem) => liked.includes(elem.name));


  return (
    <>
      <div className="header header__wrapper">
        <div className="container">
          <Link
            to={`/`}
            style={{ marginBottom: "50px", display: "block", fontSize: "24px" }}
          >
            ← Back To All
          </Link>
          <p className="text__title">Liked ones</p>
          <p className="text__subtitle">
            Your favorite characters from the Harry Potter universe.
          </p>
        </div>
      </div>
    </>
  );
};
