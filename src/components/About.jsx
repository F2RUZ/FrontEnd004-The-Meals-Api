import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6 animate-fade-in">
          Biz haqimizda
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Bizning vazifamiz foydalanuvchilarga eng mazali va sog‘lom taomlarni
          topish imkonini berishdir.
          <br />
          🍽️ Siz bu sayt orqali turli hududlardagi ovqatlarni o‘rganishingiz,
          tayyorlash ko‘rsatmalarini ko‘rishingiz va o‘zingiz uchun yangi
          retseptlarni kashf qilishingiz mumkin.
        </p>
        <p className="text-gray-600 mt-4">
          Ushbu loyiha TheMealDB API orqali ishlaydi va 100+ dan ortiq toifadagi
          taomlarni o‘z ichiga oladi.
        </p>
      </div>
    </section>
  );
};

export default About;
