import React from "react";
import "./Card.css";

export const Card = ({ key, obj }) => {
  return (
    <article className="article" key={key}>
      <img className="article__img" src={obj.image} alt="imaage" />
      <div className="articleText__wrapper">
        <p className="article__name">{obj.name}</p>
        <p className="article__actor">Actor: {obj.actor}</p>
        <p className="article__gender">Gender: {obj.gender}</p>
        <p className="article__house">House: {obj.house}</p>
        <p className="article__wand">Wand core: {obj.wand.core}</p>
        <p className="article__alive">Alive: {obj.alive}</p>
      </div>
    </article>
  );
};
