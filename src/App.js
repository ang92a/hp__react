import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Like } from "./pages/Like";
import { Error } from "./pages/Error";
import { useState } from "react";

const savedLikes = JSON.parse(localStorage.getItem("likedCards")) ?? []; // если в локалсторедж есть данные в виде строки,
// то они достаются и формируются в массив из обьектов, если ничего не введено, то возвращяется пустой массив
let likeList = savedLikes; // присваиваем получившийся массив

function App() {
  const [liked, setLiked] = useState(likeList); // состояние на кнопке лайк МАССИВ!!!
  localStorage.setItem("likedNames", JSON.stringify(liked)); // добавляем лайки в локалсторидж МАССИВ


  // функции при нажатии на кнопку лайк
  const like = (name) => setLiked([...liked, name]);
  const dislike = (name) => setLiked(liked.filter((elem) => elem !== name));

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home liked={liked} setLiked={setLiked} like={like} dislike={dislike} />
      ),
    },
    {
      path: "*",
      element: <Error />,
    },
    {
      path: "like",
      element: <Like liked={liked} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
