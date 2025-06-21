import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-white py-24 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          Biz bilan bog‘laning
        </h1>
        <p className="text-gray-600 mt-4">
          Har qanday savol, taklif yoki fikr-mulohazalaringiz bo‘lsa, quyidagi
          formani to‘ldirib yuboring.
        </p>
      </div>

      <form className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md space-y-6">
        <div>
          <label className="block text-left mb-1 font-medium text-gray-700">
            Ismingiz
          </label>
          <input
            type="text"
            placeholder="Ismingizni kiriting"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-left mb-1 font-medium text-gray-700">
            Email manzilingiz
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-left mb-1 font-medium text-gray-700">
            Xabar
          </label>
          <textarea
            rows="5"
            placeholder="Xabaringizni yozing"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 outline-none resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 font-semibold"
        >
          Yuborish
        </button>
      </form>
    </section>
  );
};

export default Contact;
