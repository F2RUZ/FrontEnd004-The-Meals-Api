import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 mt-10 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-green-600">MealZone</span>. Barcha
          huquqlar himoyalangan.
        </p>
        <div className="mt-2 text-sm">
          <a
            href="https://ilmhub.uz"
            className="text-green-600 hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Feruz Gaffarov tomonidan yaratilgan
          </a>
        </div>
        <div className="mt-3 flex justify-center gap-4 text-gray-500 dark:text-gray-400">
          <a
            href="https://t.me/ilmhub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
          >
            Telegram
          </a>
          <a
            href="mailto:neyrocoder@gmail.com"
            className="hover:text-green-600 transition"
          >
            Email
          </a>
          <a
            href="tel:+998910050913"
            className="hover:text-green-600 transition"
          >
            Telefon
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
