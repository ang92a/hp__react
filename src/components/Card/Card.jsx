import "./Card.css";
import empty from "./empty.svg";
import full from "./full.svg";

export const Card = ({ key, obj, liked, setLiked, like, dislike, allCards }) => {
  console.log(allCards);
  return (
    <article className="article" key={key}>
      <div className="like">
        <button
          //при нажатии на кнопку, если в массиве локалсториж есть имя на которое лайкнули, то удалить его, если нет то добавить
          onClick={() =>
            allCards.includes(obj.name) ? like(obj.name) : dislike(obj.name)
          }
        >
          <img
            className="like__img"
            // отрисовка лайка на карточке, если в массиве есть имя, то сердце полное, если нет то пустое
            src={allCards.includes(obj.status == true) ? full : empty}
            alt="like"
          />
        </button>
      </div>
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
