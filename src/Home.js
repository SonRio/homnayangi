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
      <h1 class="mint text-4xl">Hôm nay ăn gì ta?</h1>
      <div class="container">
        <a
          href="#"
          class="button button--piyo"
          onClick={(e) => handleChooseMeal(e, MORNING, "mor")}
        >
          <div class="button__wrapper">
            <span class="button__text">Buổi Sáng</span>
          </div>
          <div class="characterBox">
            <div class="character wakeup">
              <div class="character__face"></div>
            </div>
            <div class="character wakeup">
              <div class="character__face"></div>
            </div>
            <div class="character">
              <div class="character__face"></div>
            </div>
          </div>
        </a>

        <a
          href="#"
          class="button button--hoo"
          onClick={(e) => handleChooseMeal(e, MAIN, "main")}
        >
          <div class="button__wrapper">
            <span class="button__text">Buổi Trưa</span>
          </div>
          <div class="characterBox">
            <div class="character wakeup">
              <div class="character__face"></div>
              <div class="charactor__face2"></div>
              <div class="charactor__body"></div>
            </div>
            <div class="character wakeup">
              <div class="character__face"></div>
              <div class="charactor__face2"></div>
              <div class="charactor__body"></div>
            </div>
            <div class="character">
              <div class="character__face"></div>
              <div class="charactor__face2"></div>
              <div class="charactor__body"></div>
            </div>
          </div>
        </a>

        <a
          href="#"
          class="button button--pen"
          onClick={(e) => handleChooseMeal(e, MAIN, "main")}
        >
          <div class="button__wrapper">
            <span class="button__text">Buổi tối</span>
          </div>
          <div class="characterBox">
            <div class="character wakeup">
              <div class="character__face"></div>
              <div class="charactor__face2"></div>
            </div>
            <div class="character wakeup">
              <div class="character__face"></div>
              <div class="charactor__face2"></div>
            </div>
            <div class="character">
              <div class="character__face"></div>
              <div class="charactor__face2"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Home;
