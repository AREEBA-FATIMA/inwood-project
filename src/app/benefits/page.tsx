// components/Benefits.js
import Image from 'next/image';

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
                          <Image
                              src="/images/payment-method.png" // Your image path here
                              alt="Payment Method"
                              width={40} // Set width
                              height={40} // Set height
                              className="text-[#B75F8D]" // Apply any additional styles
                          />
                      </div>
                      <h3 className="text-xl font-semibold">Payment Method</h3>
                      <p className="text-gray-600 text-center">We offer flexible payment <br /> options to make easier.</p>
                  </div>

                  {/* Benefit Item 2 */}
                  <div className="flex flex-col items-center max-w-xs">
                      <div className="bg-[#F8F2D8] rounded-full p-4 mb-2">
                          <Image
                              src="/images/return-policy.png" // Your image path here
                              alt="Return Policy"
                              width={40} // Set width
                              height={40} // Set height
                              className="text-[#B7A94B]" // Apply any additional styles
                          />
                      </div>
                      <h3 className="text-xl font-semibold">Return Policy</h3>
                      <p className="text-gray-600 text-center">You can return a product <br /> within 30 days.</p>
                  </div>

                  {/* Benefit Item 3 */}
                  <div className="flex flex-col items-center max-w-xs">
                      <div className="bg-green-100 rounded-full p-4 mb-2">
                          <Image
                              src="/images/customer-support.png" // Your image path here
                              alt="Customer Support"
                              width={40} // Set width
                              height={40} // Set height
                              className="text-[#5B8DB5]" // Apply any additional styles
                          />
                      </div>
                      <h3 className="text-xl font-semibold">Customer Support</h3>
                      <p className="text-gray-600 text-center">Our customer support <br /> is 24/7.</p>
                  </div>
              </div>
          </div>
      </section>
  );
}
