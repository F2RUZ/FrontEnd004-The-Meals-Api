import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import MealList from "./components/MealList";
import About from "./components/About";
import Contact from "./components/Contact";
import MealsCategroryList from "./components/MealsCategroryList";
import MealsInfo from "./components/MealsInfo";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch categories (main/home page data)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategories(data.categories);
      } catch (err) {
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow pt-20 pb-10 px-4 md:px-10">
        {loading ? (
          <div className="flex justify-center items-center h-40 text-green-700 font-semibold">
            Ma'lumotlar yuklanmoqda...
          </div>
        ) : error ? (
          <div className="text-center text-red-500 font-semibold">{error}</div>
        ) : (
          <Routes>
            <Route path="/" element={<MealList data={categories} />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Contact />} />
            <Route path="/meals/:name" element={<MealsCategroryList />} />
            <Route path="/meals/:name/:id" element={<MealsInfo />} />
          </Routes>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
