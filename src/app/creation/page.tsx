// components/OurOwnCreation.js
import React from 'react';

const OurOwnCreation = () => {
    return (
        <div className="flex flex-col md:flex-row p-6 bg-gray-100">
            {/* Left Panel */}
            <div className="w-full md:w-1/3 bg-[#6d877c] text-white p-6 md:p-20">
                <h1 className="text-4xl font-bold" id='playfair'>Our</h1>
                <h1 className="text-4xl font-bold" id='playfair'>Own Creation</h1>
                <p className="mt-2">Designed in our studio</p>
                <div className="flex items-center mt-4">
                    <p className="text-white rounded px-4 py-2">More</p>
                    <div className="relative flex-grow mx-4 h-1 bg-gray-600 rounded-full">
                        <div className="absolute left-0 h-full bg-white rounded-full w-1/4"></div> {/* Adjust width as needed */}
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <div className="flex-1 md:ml-4 overflow-hidden mt-4 md:mt-0">
                <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                    {/** Each Room Image Card with Overlay **/}
                    {['/images/cr-1.png', '/images/cr-2.png', '/images/cr-3.png', '/images/cr-4.png'].map((image, index) => (
                        <div className="relative min-w-[250px] bg-white rounded-lg shadow-md overflow-hidden group" key={index}>
                            <img src={image} alt={`Room ${index + 1}`} className="w-full h-80 object-cover" /> {/* Increased height */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="bg-blue-100 text-black px-4 py-2 mt-32 rounded-lg item-end">Explore All Rooms</button> {/* Button style */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurOwnCreation;
