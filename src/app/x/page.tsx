import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="bg-red-500 sm:bg-blue-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-purple-500">
        Responsive Background Color
      </div>

      <header className="flex justify-between items-center w-full px-20 py-4 bg-transparent" id="home">
        {/* Logo on the Left */}
        <div className="logo text-xl text-teal-800" id="oswald">
          <i className="fa-solid fa-chair bg-teal-800 text-white p-2"></i> INWOOD
        </div>

        {/* Centered Navigation Buttons (Completely removed on small and medium screens) */}
        <nav className="hidden lg:flex flex-grow justify-center" id="playfair">
          <ul className="flex space-x-6 text-teal-800 text-lg">
            <a href="#home">
              <li className="hover:underline hover:font-semibold px-1 cursor-pointer">Home</li>
            </a>
            <a href="#product">
              <li className="hover:underline hover:font-semibold px-1 cursor-pointer">Products</li>
            </a>
            <a href="#category">
              <li className="hover:underline hover:font-semibold px-1 cursor-pointer">Categories</li>
            </a>
            <a href="#about">
              <li className="hover:underline hover:font-semibold px-1 cursor-pointer">About</li>
            </a>
            <a href="#contact">
              <li className="hover:underline hover:font-semibold px-1 cursor-pointer">Contact Us</li>
            </a>
          </ul>
        </nav>

        {/* Icons on the Right */}
        <div className="icons flex space-x-6 mr-10 sm:mr-1 sm:space-x-2">
          <i className="fa-solid fa-magnifying-glass text-teal-800 text-xl px-2 cursor-pointer hover:text-teal-900"></i>
          <i className="fas fa-cart-shopping text-teal-800 text-xl px-2 cursor-pointer hover:text-teal-900"></i>
          <i className="fa-solid fa-user text-teal-800 text-xl px-2 cursor-pointer hover:text-teal-900"></i>

          {/* Menu Icon (Visible only on small and medium screens) */}
          <div className="block lg:hidden">
            <i className="fa-solid fa-bars text-teal-800 text-xl px-2 cursor-pointer hover:text-teal-900"></i>
          </div>
        </div>
      </header>
    </div>
  );
}
