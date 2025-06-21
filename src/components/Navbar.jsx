import { useState } from "react";
import { Menu, X } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Main page", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-2xl font-bold text-green-600 hover:text-green-700 transition"
        >
          MealZone 🍽️
        </NavLink>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `transition font-medium ${
                  isActive
                    ? "text-green-600 underline underline-offset-4"
                    : "text-gray-700 hover:text-green-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu icon */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen px-4 pb-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-2">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-base font-medium transition ${
                  isActive
                    ? "text-green-600 underline"
                    : "text-gray-700 hover:text-green-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
