import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Like } from "./pages/Like";
import { Error } from "./pages/Error";
import { useState } from "react";
import { data } from "./data/hp";

const savedLikes = JSON.parse(localStorage.getItem("Cards")) ?? []; // если в локалсторедж есть данные в виде строки,
// то они достаются и формируются в массив из обьектов, если ничего не введено, то возвращяется пустой массив

function App() {
  // для добавления статуса в массив
  const [allCards, setAllCards] = useState(savedLikes);
  // для состояния на кнопке лайк
  const [liked, setLiked] = useState();

  localStorage.setItem("Cards", JSON.stringify(allCards)); // добавляем лайки в локалсторидж МАССИВ

  const like = (name) => {
    setLiked(
      allCards.map((item) =>
        item.name === name ? { ...item, status: true } : item
      )
    );
  };

  const dislike = (name) => {
    setLiked(
      allCards.map((item) =>
        item.name === name ? { ...item, status: false } : item
      )
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          liked={liked}
          setLiked={setLiked}
          like={like}
          dislike={dislike}
          title={"Harry Potter"}
          subtitle={"View all characters from the Harry Potter universe."}
        />
      ),
    },
    {
      path: "*",
      element: <Error />,
    },
    {
      path: "like",
      element: (
        <Like
          liked={liked}
          like={like}
          dislike={dislike}
          setLiked={setLiked}
          title={"Liked ones"}
          subtitle={"Your favorite characters from the Harry Potter universe."}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
