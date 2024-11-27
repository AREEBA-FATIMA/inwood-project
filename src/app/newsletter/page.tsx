import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center h-screen">
      {/* Image Section */}
      <div className="mt-0 md:mt-8"> {/* Remove margin top on small screens */}
        <img
          src="/images/n-1.png"
          alt="Eames Chair"
          className="w-full md:w-[1400px] h-auto md:h-[450px] object-cover" // Make image responsive
        />
      </div>

      {/* Newsletter Content Section */}
      <div className="flex flex-col pl-4 md:pl-20 bg-[#e3faea] mt-0 md:mt-8 justify-center w-full h-auto md:h-[450px] max-w-screen-xl px-4 text-left">
        <h1 className="text-4xl md:text-6xl text-left text-teal-900 mb-2 md:mb-4 pt-4 md:pt-0" id="playfair">Join Our</h1> {/* Add top padding on small screens */}
        <h1 className="text-4xl md:text-6xl font-bold text-left text-teal-900 mb-2 md:mb-4" id="playfair">Newsletter</h1>
        <p className="text-base md:text-lg text-left mb-4 md:mb-8 text-teal-900">
          Receive exclusive deals, discounts, and many offers.
        </p>

        {/* Form */}
        <form className="flex flex-col items-start">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-80 md:w-60 px-4 py-2 bg-transparent text-teal-900 rounded-md mb-4"
          />
          <button
            type="submit"
            className="bg-teal-900 text-white px-6 py-2 rounded-md hover:bg-teal-600 mb-4 pt-2"  // Add bottom padding for small screens
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
