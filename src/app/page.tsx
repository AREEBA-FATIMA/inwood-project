import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center w-full p-6">
        <div className="text-2xl font-bold">INWOOD</div>
        <nav>
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>
              <FontAwesomeIcon icon={faSearch} />
            </li>
            <li>
              <FontAwesomeIcon icon={faShoppingCart} />
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} />
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-semibold mt-10">
          Exclusive Deals of Furniture Collection
        </h1>
        <p className="mt-4 text-lg">Explore different categories. Find the best deals.</p>
        <button className="mt-6 px-4 py-2 bg-teal-500 text-white rounded">
          Shop Now
        </button>

        {/* Add Image */}
        <img
          src="https://example.com/path-to-your-image.jpg"
          alt="Furniture"
          className="mt-6 w-1/2"
        />
      </main>

    </div>
  );
};

export default HomePage;
