import React from "react";
import { NavLink } from "react-router-dom";

const MealsItem = ({
  strCategory,
  strCategoryDescription,
  strCategoryThumb,
}) => {
  return (
    <NavLink to={`/meals/${strCategory}`} className="block">
      <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden h-full flex flex-col">
        <img
          src={strCategoryThumb}
          alt={strCategory}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-lg font-bold text-green-700 mb-2">
            {strCategory}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-4 flex-grow">
            {strCategoryDescription}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default MealsItem;
