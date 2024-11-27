import Image from 'next/image';

function Testimonial() {
  return (
    <section className="bg-white p-4 rounded-lg relative">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mt-12 mb-4 text-center" id="playfair">
        Testimonials
      </h2>
      <p className="text-gray-500 text-center text-lg md:text-2xl">Over 15,000 happy customers</p>
      
      {/* Scrollable Content */}
      <div className="overflow-x-auto">
        <div className="flex space-x-4 px-4 md:px-8 w-[200%] mb-16 md:mb-32">
          
          {/* First Review */}
          <div className="flex flex-col md:flex-row space-x-0  px-4 md:px-8 min-w-[90%] md:min-w-[50%]">
            <div className="relative">
              <i className="fa-solid fa-quote-left text-[80px] md:text-[150px] text-blue-200 opacity-40"></i>
              <Image
                src="/images/cus-1.png"
                alt="Leona Paul, CEO of Floatcom"
                width={300}
                height={300}
                className="rounded-lg ml-0 md:ml-20 relative z-10"
              />
            </div>
            <div className="flex flex-col justify-evenly mt-10 md:mt-20">
              <p className="text-lg md:text-2xl pl-2 md:pl-4 text-gray-600">
                &quot;My experience with Mark has been a success,&lt;br /&gt; from customer service to quality products, clean store,&lt;br /&gt; and purchase process. I even signed up for their newsletter.&lt;br /&gt; Thank you!&quot;
              </p>
              <div className="ml-2 md:ml-4">
                <p className="text-base md:text-lg font-bold">Leona Paul</p>
                <p className="text-gray-600 font-semibold text-sm md:text-base">CEO of Floatcom</p>
              </div>
            </div>
          </div>

          {/* Second Review */}
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 px-4 md:px-8 min-w-[90%] md:min-w-[50%]">
            <div className="relative">
              <i className="fa-solid fa-quote-left text-[80px] md:text-[150px] text-blue-200 opacity-40"></i>
              <Image
                src="/images/cus-2.png"
                alt="Berk Atan, Manager at FintechCorp"
                width={300}
                height={300}
                className="rounded-lg ml-0 md:ml-20 relative z-10"
              />
            </div>
            <div className="flex flex-col justify-evenly mt-10 md:mt-20">
              <p className="text-lg md:text-2xl pl-2 md:pl-4 text-gray-600">
                &quot;Mark&apos;s service has always exceeded my expectations.&lt;br /&gt; The seamless shopping experience and helpful staff&lt;br /&gt; ensure that I always return. Highly recommended!&quot;
              </p>
              <div className="ml-2 md:ml-4">
                <p className="text-base md:text-lg font-bold">Berk Atan</p>
                <p className="text-gray-600 font-semibold text-sm md:text-base">Manager at FintechCorp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
