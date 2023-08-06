import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MAIN, MORNING, SOUP } from "./constant";

function Result() {
  const { search } = useLocation();
  const navigate = useNavigate();

  const [oldIndex, setOldIndex] = useState();
  const [soup, setSoup] = useState();
  const [mealOne, setMealOne] = useState();
  const [mealTwo, setMealTwo] = useState();

  const tryAgain = () => {
    const keyMeal = search.split("&")[1];
    const meal = keyMeal.split("=")[1];
    const indexOfMeal = Math.floor(
      Math.random() * (meal === "mor" ? MORNING.length : MAIN.length)
    );
    handleChooseMeal(indexOfMeal, meal);
  };

  const keyIndex = search.split("&")[0];
  const indexOfMeal = keyIndex.split("=")[1];
  const keyMeal = search.split("&")[1];
  const meal = keyMeal.split("=")[1];

  const handleChooseMeal = (index, type) => {
    setOldIndex(index);
    switch (type) {
      case "mor":
        setMealOne(MORNING[index]);
        break;
      case "main":
        setMealOne(MAIN[index]);
        let newIndex = Math.floor(Math.random() * MAIN.length);
        if (newIndex >= index) {
          newIndex += 1;
        }
        setMealTwo(MAIN[newIndex]);
        const indexOfSoup = Math.floor(Math.random() * SOUP.length);
        setSoup(SOUP[indexOfSoup]);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (search) {
      handleChooseMeal(indexOfMeal, meal);
    }
  }, [search]);
  return (
    <div className="flex justify-center items-center App max-sm px-2">
      <div>
        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <button
            style={{
              width: "140px",
            }}
            class="button-89"
            role="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            BACK
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div
            style={{
              maxWidth: "240px",
            }}
          >
            <img
              style={{
                borderRadius: "50%",
              }}
              src="https://m.media-amazon.com/images/I/51OOeiEHXXL._AC_UF1000,1000_QL80_.jpg"
            />
          </div>
        </div>

        <h1 class="mint text-4xl ">Ăn ngon cùng!!</h1>
        <ul
          className="text-left"
          style={{
            fontFamily: "fantasy",
          }}
        >
          {mealOne && <li className="text-2xl m1"> {mealOne.name} </li>}
          {mealTwo && <li className="text-2xl m2"> {mealTwo.name} </li>}
          {soup && <li className="text-2xl soup"> {soup.name} </li>}
        </ul>
        <div
          style={{
            marginTop: "100px",
          }}
          className="flex justify-center"
        >
          <a
            style={{
              width: "300px",
            }}
            href="#"
            class="button button--pen"
            onClick={(e) => tryAgain()}
          >
            <div class="button__wrapper">
              <span class="button__text">Món khác</span>
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
    </div>
  );
}

export default Result;
