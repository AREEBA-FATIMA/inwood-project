export default function Benefits() {
  return (
      <section className="bg-[#dcf2fc] py-12 mt-20">
          <div className="container mx-auto text-center">
              <h2 className="text-4xl text-teal-900 font-bold mb-16" id="playfair">Benefits for your expediency</h2>
              
              {/* Flexbox layout adjusted for responsiveness */}
              <div className="flex flex-col lg:flex-row justify-around items-center gap-12">
                  {/* Benefit Item 1 */}
                  <div className="flex flex-col items-center max-w-xs">
                      <div className="bg-[#F3E8F6] rounded-full p-4 mb-2">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-10 w-10 text-[#B75F8D]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 13l3 3L22 4M5 4h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
                              />
                          </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Payment Method</h3>
                      <p className="text-gray-600 text-center">We offer flexible payment <br /> options to make easier.</p>
                  </div>

                  {/* Benefit Item 2 */}
                  <div className="flex flex-col items-center max-w-xs">
                      <div className="bg-[#F8F2D8] rounded-full p-4 mb-2">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-10 w-10 text-[#B7A94B]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 13l3 3-3 3m0-3h-8a4 4 0 00-4 4v1a4 4 0 004 4h8a4 4 0 004-4v-1a4 4 0 00-4-4zm0-8h-8a4 4 0 00-4 4v1a4 4 0 004 4h8a4 4 0 004-4v-1a4 4 0 00-4-4z"
                              />
                          </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Return Policy</h3>
                      <p className="text-gray-600 text-center">You can return a product <br /> within 30 days.</p>
                  </div>

                  {/* Benefit Item 3 */}
                  <div className="flex flex-col items-center max-w-xs">
                      <div className="bg-green-100 rounded-full p-4 mb-2">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-10 w-10 text-[#5B8DB5]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                          >
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 11c0 1.5-.7 3-2 4.9-1.2 1.8-3 3.1-4.8 3.1-3.2 0-5.8-2.7-5.8-6s2.6-6 5.8-6c1.8 0 3.6 1.2 4.8 3.1C15.3 8 16 9.5 16 11zm2-2h2M5.1 12.09l-.12.09C4.45 12.7 4 13.3 4 14c0 1.7 1.3 3 3 3h5.75a6.99 6.99 0 005.7-3h-.75c-1.4 0-2.66-.55-3.6-1.5a3.947 3.947 0 01-.9-4.5c.4-1.2 1.4-2 2.5-2h1.25c.92 0 1.74.43 2.3 1.2a4.001 4.001 0 00-.4-4.7C17 2 16 1 15 1h-1.25C12.68 1 12 1.68 12 2.5V3a4 4 0 00-4 4v.08C7.6 7 6 8.5 6 10.5c0 1.9 1.3 3.5 3 4h2a5.985 5.985 0 003.8-1.4c.9-1 1.2-2.3 1.2-3.6z"
                              />
                          </svg>
                      </div>
                      <h3 className="text-xl font-semibold">Customer Support</h3>
                      <p className="text-gray-600 text-center">Our customer support <br /> is 24/7.</p>
                  </div>
              </div>
          </div>
      </section>
  );
}
