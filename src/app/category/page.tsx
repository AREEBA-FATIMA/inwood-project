import React from "react";

const categories = [
  { name: "Bedroom", image: "/images/c-1.png" },
  { name: "Dining Room", image: "/images/c-2.png" },
  { name: "Meeting Room", image: "/images/c-3.png" },
  { name: "Workspace", image: "/images/c-4.png" },
  { name: "Living Room", image: "/images/c-5.png" },
  { name: "Kitchen", image: "/images/c-6.png" },
  { name: "Outdoor" },
  { name: "Bathroom" },
  { name: "Hallway" },
  { name: "Home Office" },
  { name: "Garage" },
  { name: "Library" },
  { name: "Basement" },
];

const CategoryPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <h1 className="text-5xl font-bold text-[#406349] text-center mt-20 mb-10" id="playfair">
        Explore by Category
      </h1>
      <div className="flex flex-col lg:flex-row sm:p-6 lg:space-x-20 mx-4 lg:mx-20 sm:mr-0 justify-center">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/4 p-4 rounded-lg flex flex-col lg:h-screen sm:ml-4">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-3 sm:p-2 border border-gray-300 rounded-lg outline-none bg-gray-200"
            />
          </div>

          {/* Scrollable Categories List */}
          <div className="flex-grow overflow-y-auto h-[300px] sm:h-[400px]" id="roboto">
            <ul className="space-y-4 lg:space-y-10 pl-0 text-lg">
              {categories.map((category) => (
                <li
                  key={category.name}
                  className="text-teal-900 cursor-pointer hover:text-teal-600 transition duration-300 pl-2"
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>

          {/* All Categories Button at the bottom */}
          <button className="mt-4 py-4 sm:py-3 text-sm bg-[#8caba3] text-white rounded hover:bg-[#305f46] transition-colors duration-300">
            All Categories <i className="fas fa-arrow-right pl-2"></i>
          </button>
        </div>

        {/* Main Content Area */}
        <div className="w-full lg:w-3/4 p-4 flex flex-col items-center">
          {/* Slider Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full justify-center">
            {categories.slice(0, 6).map((category) => (
              <div
                key={category.name}
                className="relative overflow-hidden rounded-lg h-[150px] sm:h-[220px] md:h-[200px] lg:h-[200px] shadow-md transition-transform duration-300 hover:scale-105"
              >
                {category.image ? (
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium" id="playfair">
                    {category.name}
                  </h2>
                  <button className="mt-2 px-4 py-1 text-black bg-blue-100 rounded hover:bg-teal-800 hover:text-white transition-colors duration-300">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
