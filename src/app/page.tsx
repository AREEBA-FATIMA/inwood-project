"use client";
import React, { useState, useEffect } from "react";
import CategoryPage from "./category/page";
import PopularProducts from "./product/page";
import ProductPage from "./package/page";
import OurOwnCreation from "./creation/page";
import Benefits from "./benefits/page";
import Testimonial from "./customer/page";
import Newsletter from "./newsletter/page";
import Footer from "./footer/page";
import Navbar from "./navbar/page";

const HomePage = () => {
  const [scrolling, setScrolling] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);  // Change state to true if scrolled
      } else {
        setScrolling(false);  // Revert back to false when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative flex flex-col min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/images/main.png")',
      }}
    >
      {/* Sticky Header with dynamic background */}
      <header
        className={`sticky top-0 z-40 flex justify-between items-center w-full px-20 py-4 transition-all duration-200 ${
          scrolling ? "bg-white" : "bg-transparent"
        }`}
        id="home"
      >
        {/* Logo on the Left */}
        <div className="logo text-xl text-teal-800" id="oswald">
          <i className="fa-solid fa-chair bg-teal-800 text-white p-2"></i>{" "}
          INWOOD
        </div>

        {/* Centered Navigation Buttons (Hidden for Hamburger View) */}
        <nav className="lg:flex-grow lg:flex justify-center hidden" id="playfair">
          <ul className="flex space-x-6 text-teal-800 text-lg">
            <a href="#home">
              <li className="hover:underline hover:font-semibold px-1 cursor-pointer">
                Home
              </li>
            </a>
            <a href="#product">
              <li className="hover:underline hover:font-semibold px-1 cursor-pointer">
                Products
              </li>
            </a>
            <a href="#category">
              <li className="hover:underline hover:font-semibold px-1 cursor-pointer">
                Categories
              </li>
            </a>
            <a href="#about">
              <li className="hover:underline hover:font-semibold px-1 cursor-pointer">
                About
              </li>
            </a>
            <a href="#contact">
              <li className="hover:underline hover:font-semibold px-1 cursor-pointer">
                Contact Us
              </li>
            </a>
          </ul>
        </nav>

        {/* Icons on the Right */}
        <div className="icons flex space-x-6 mr-10 sm:mr-1 sm:space-x-2">
          <i className="fa-solid fa-magnifying-glass text-teal-800 text-xl px-2 cursor-pointer hover:text-teal-900"></i>
          <i className="fas fa-cart-shopping text-teal-800 text-xl px-2 cursor-pointer hover:text-teal-900"></i>
          <i className="fa-solid fa-user text-teal-800 text-xl px-2 cursor-pointer hover:text-teal-900"></i>
          <div className="block lg:hidden">
            {/* Hamburger Menu */}
            <Navbar />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative flex flex-col items-start justify-start text-left mt-36 text-teal-800 px-20">
        <h1 className="text-5xl font-semibold max-w-2xl leading-snug" id="playfair">
          Exclusive Deals of <br /> Furniture Collection
        </h1>
        <p className="mt-8 mb-6 text-xl font-normal max-w-lg">
          Explore different categories and find the best deals.
        </p>
        <button className="mt-6 px-8 py-3 bg-teal-800 text-white font-medium text-lg rounded-md hover:bg-teal-700 transition-all duration-200">
          Shop Now
        </button>
      </div>

      {/* Sections */}
      <div id="category">
        <CategoryPage />
      </div>
      <div id="product">
        <PopularProducts />
      </div>
      <ProductPage />
      <div id="about">
        <OurOwnCreation />
      </div>
      <Benefits />
      <Testimonial />
      <div id="contact">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
