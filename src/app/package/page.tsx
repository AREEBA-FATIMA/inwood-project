import Image from "next/image";

export default function ProductPage() {
  return (
    <div className="m-4 md:m-16">
      <h1
        className="text-4xl md:text-5xl text-teal-800 text-center font-bold my-6 bg-white"
        id="playfair"
      >
        Special Package
      </h1>
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* Product Details Section */}
          <div className="rounded-lg">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden mb-4">
              <Image
                src="/images/pk-1.png"
                alt="Larkin Wood Full Set"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
              Larkin Wood Full Set
            </h2>

            <div className="flex justify-between">
              {/* Star Rating and Price (Left-Aligned) */}
              <div className="mt-2 flex flex-col items-start space-y-1">
                <div className="flex">
                  <span className="text-yellow-500 text-2xl md:text-4xl">★★★★★</span>
                </div>
                <div>
                  <span className="text-lg font-bold text-green-600">
                    $729.99
                  </span>
                </div>
              </div>

              <button className="bg-[#97ad9c] text-white text-sm px-4 md:px-6 h-10 md:h-12 rounded-lg hover:bg-teal-900">
                Add to cart <i className="fas fa-shopping-cart pl-2 md:pl-4"></i>
              </button>
            </div>
          </div>

          {/* Product Description */}
          <div className="mx-4 md:mx-10">
            <h3 className="text-lg md:text-xl font-bold text-teal-800">Description</h3>
            <p className="text-teal-700 text-sm font-medium mt-2 md:mt-4">
              Cast Aluminum Outdoor Chaise Lounge As an elegant and classic
              touch to <br /> your outdoor space, this cast Aluminum Chaise Lounge
              combines the <br /> appearance, function and quality all together,
              offering you with the best <br /> experience.
            </p>
            <a href="#" className="text-teal-700 text-sm mt-2 block">
              See More <i className="fas fa-chevron-down"></i>
            </a>

            {/* Related Products Section */}
            <div className="mt-2 h-64 md:h-96 overflow-y-auto p-2 border border-gray-300 rounded-lg">
              <h4 className="text-lg font-bold text-teal-800 mb-2">Related Products</h4>
              <div className="flex flex-col space-y-2">
                {/* Related Item 1 */}
                <div className="flex items-center space-x-4 p-2 bg-white hover:bg-gray-100 rounded">
                  <div className="relative h-24 w-40 md:h-28 md:w-56 rounded-lg overflow-hidden">
                    <Image
                      src="/images/pk-2.png"
                      alt="Living Room Family Set"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between">
                      <h5 className="font-semibold text-gray-800">
                        Living Room Family Set
                      </h5>
                      <p className="text-green-600 font-bold">$229.99</p>
                    </div>
                    <div className="flex flex-col mt-2">
                      <span className="text-yellow-500 text-lg md:text-xl">★★★★★</span>
                      <a href="#" className="text-teal-700 text-sm mt-1">
                        See More <i className="fas fa-chevron-down"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Related Item 2 */}
                <div className="flex items-center space-x-4 p-2 bg-white hover:bg-gray-100 rounded">
                  <div className="relative h-24 w-40 md:h-28 md:w-56 rounded-lg overflow-hidden">
                    <Image
                      src="/images/pk-3.png"
                      alt="Living Room Special Set"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between">
                      <h5 className="font-semibold text-gray-800">
                        Living Room Special Set
                      </h5>
                      <p className="text-green-600 font-bold">$329.99</p>
                    </div>
                    <div className="flex flex-col mt-2">
                      <span className="text-yellow-500 text-lg md:text-xl">★★★★★</span>
                      <a href="#" className="text-teal-700 text-sm mt-1">
                        See More <i className="fas fa-chevron-down"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Related Item 3 */}
                <div className="flex items-center space-x-4 p-2 bg-white hover:bg-gray-100 rounded">
                  <div className="relative h-24 w-40 md:h-28 md:w-56 rounded-lg overflow-hidden">
                    <Image
                      src="/images/pk-4.png"
                      alt="Living Room Set"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between">
                      <h5 className="font-semibold text-gray-800">
                        Living Room Special Set
                      </h5>
                      <p className="text-green-600 font-bold">$587.99</p>
                    </div>
                    <div className="flex flex-col mt-2">
                      <span className="text-yellow-500 text-lg md:text-xl">★★★★★</span>
                      <a href="#" className="text-teal-700 text-sm mt-1">
                        See More <i className="fas fa-chevron-down"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
