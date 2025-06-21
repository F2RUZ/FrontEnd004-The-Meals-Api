import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealCategoryItem from "./MealCategoryItem";

const MealsCategroryList = () => {
  const [mealsCategroryList, setMealsCategroryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const categoryName = useParams()?.name;

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${categoryName}`
      )
      .then((res) => {
        if (res.data.meals) {
          setMealsCategroryList(res.data.meals);
          setNotFound(false);
        } else {
          setMealsCategroryList([]);
          setNotFound(true);
        }
      })
      .finally(() => setLoading(false));
  }, [categoryName]);

  return (
    <section className="pt-24 pb-12 min-h-[100vh] bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {loading ? (
          <div className="text-center py-20 text-green-700 font-semibold text-lg">
            Yuklanmoqda...
          </div>
        ) : notFound ? (
          <div className="text-center py-20 text-red-600 font-semibold text-lg">
            Ma'lumot topilmadi
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mealsCategroryList.map((meal, index) => (
              <MealCategoryItem key={index} {...meal} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MealsCategroryList;
