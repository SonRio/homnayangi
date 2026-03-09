import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { MAIN, MORNING } from "./constant";

function Home() {
  const navigate = useNavigate();
  const handleChooseMeal = (event, listMeal, type) => {
    event.preventDefault();
    const indexOfMeal = Math.floor(Math.random() * listMeal.length);
    navigate({
      pathname: "/result",
      search: createSearchParams({
        index: indexOfMeal,
        meal: type,
      }).toString(),
    });
  };

  return (
    <div className="App px-2">
      <h1 className="mint text-4xl">Hôm nay ăn gì ngon ta?</h1>
      <div className="container">
        <a
          href="#"
          className="button button--piyo"
          onClick={(e) => handleChooseMeal(e, MORNING, "mor")}
        >
          <div className="button__wrapper">
            <span className="button__text">Buổi Sáng</span>
          </div>
          <div className="characterBox">
            <div className="character wakeup">
              <div className="character__face"></div>
            </div>
            <div className="character wakeup">
              <div className="character__face"></div>
            </div>
            <div className="character">
              <div className="character__face"></div>
            </div>
          </div>
        </a>

        <a
          href="#"
          className="button button--hoo"
          onClick={(e) => handleChooseMeal(e, MAIN, "main")}
        >
          <div className="button__wrapper">
            <span className="button__text">Buổi Trưa</span>
          </div>
          <div className="characterBox">
            <div className="character wakeup">
              <div className="character__face"></div>
              <div className="charactor__face2"></div>
              <div className="charactor__body"></div>
            </div>
            <div className="character wakeup">
              <div className="character__face"></div>
              <div className="charactor__face2"></div>
              <div className="charactor__body"></div>
            </div>
            <div className="character">
              <div className="character__face"></div>
              <div className="charactor__face2"></div>
              <div className="charactor__body"></div>
            </div>
          </div>
        </a>

        <a
          href="#"
          className="button button--pen"
          onClick={(e) => handleChooseMeal(e, MAIN, "main")}
        >
          <div className="button__wrapper">
            <span className="button__text">Buổi tối</span>
          </div>
          <div className="characterBox">
            <div className="character wakeup">
              <div className="character__face"></div>
              <div className="charactor__face2"></div>
            </div>
            <div className="character wakeup">
              <div className="character__face"></div>
              <div className="charactor__face2"></div>
            </div>
            <div className="character">
              <div className="character__face"></div>
              <div className="charactor__face2"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Home;
