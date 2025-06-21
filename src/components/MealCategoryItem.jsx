import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const MealCategoryItem = ({
  idMeal,
  strMeal,
  strCategory,
  strArea,
  strInstructions,
  strMealThumb,
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <NavLink
      to={`/meals/${strInstructions}/${idMeal}`}
      className="no-underline"
    >
      <div className="flex flex-col rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden max-w-sm mx-auto">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-green-700">{strMeal}</h2>
          <div className="text-sm text-gray-600 flex flex-wrap gap-2">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
              {strCategory}
            </span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {strArea}
            </span>
          </div>
          <p className="text-gray-700 text-sm mt-2 line-clamp-4">
            {strInstructions}
          </p>
          <a
            href={`https://www.themealdb.com/meal.php?c=${idMeal}`}
            target="_blank"
            className="mt-3 inline-block bg-green-600 text-white text-sm py-2 px-4 rounded-lg hover:bg-green-700 transition"
          >
            Batafsil ko‘rish
          </a>

          <button
            onClick={handleGoBack}
            className="text-green-600 hover:underline text-2xl"
          >
            ← Go back
          </button>
        </div>
      </div>
    </NavLink>
  );
};

export default MealCategoryItem;
