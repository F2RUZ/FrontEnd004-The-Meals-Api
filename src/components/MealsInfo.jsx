import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MealsInfo = () => {
  const [mealInfo, setMealInfo] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setMealInfo(res?.data?.meals?.[0] || null);
      });
  }, [id]);

  if (!mealInfo) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg font-semibold text-green-700">
        ⏳ Yuklanmoqda...
      </div>
    );
  }

  const {
    strMeal,
    strCategory,
    strArea,
    strMealThumb,
    strInstructions,
    strYoutube,
    strSource,
  } = mealInfo;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = mealInfo[`strIngredient${i}`];
    const mes = mealInfo[`strMeasure${i}`];
    if (ing && ing.trim() !== "") {
      ingredients.push(`${mes} ${ing}`);
    }
  }

  return (
    <section className="pt-24 pb-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-full h-64 sm:h-80 object-cover"
        />
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
            <h1 className="text-3xl font-bold text-green-700">{strMeal}</h1>
            <button
              onClick={() => navigate(-1)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm"
            >
              ← Orqaga qaytish
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mb-6 text-sm">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
              Category: {strCategory}
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Area: {strArea}
            </span>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Ingredients:
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-6 grid sm:grid-cols-2 gap-x-4">
            {ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Instructions:
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {strInstructions}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            {strYoutube && (
              <a
                href={strYoutube}
                target="_blank"
                rel="noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
              >
                YouTube Video
              </a>
            )}
            {strSource && (
              <a
                href={strSource}
                target="_blank"
                rel="noreferrer"
                className="bg-gray-700 hover:bg-black text-white px-4 py-2 rounded-lg transition"
              >
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealsInfo;
