import React from "react";
import MealsItem from "./MealsItem";

const MealList = ({ data }) => {
  return (
    <section className="pt-24 pb-12 min-h-[85vh] bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {data?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((meal, index) => (
              <MealsItem key={index} {...meal} />
            ))}
          </div>
        ) : (
          <div className="text-center text-xl font-semibold text-gray-500 py-20">
            Ma'lumot topilmadi
          </div>
        )}
      </div>
    </section>
  );
};

export default MealList;
