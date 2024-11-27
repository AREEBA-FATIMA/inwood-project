import React from 'react';
import Image from 'next/image'; // Import Image component from next/image

function PopularProducts() {
  // Define the products array inside the component
  const products = [
    { id: 1, name: 'Armchair', description: 'Light single chair', price: 145, img: '/images/p-1.png', bgColor: 'bg-green-100' },
    { id: 2, name: 'Premium Sofa', description: 'Comfortable premium sofa', price: 345, img: '/images/p-2.png', bgColor: 'bg-blue-100' },
    { id: 3, name: 'Modern Lamp', description: 'Stylish modern lamp', price: 75, img: '/images/p-3.png', bgColor: 'bg-purple-100' },
    { id: 4, name: 'Wooden Table', description: 'Elegant wooden table', price: 250, img: '/images/p-4.png', bgColor: 'bg-orange-100' },
    { id: 5, name: 'White Comfortable Sofa', description: 'Soft and cozy sofa', price: 400, img: '/images/p-5.png', bgColor: 'bg-pink-100' },
    { id: 6, name: 'Grey Luxury Sofa', description: 'Stylish luxury sofa', price: 500, img: '/images/p-6.png', bgColor: 'bg-gray-100' },
  ];

  return (
    <div className='min-h-screen bg-[url("/images/pro.png")] bg-cover bg-center flex items-center justify-center'>
      <div className='container mx-auto px-4 py-8 rounded-lg'>
        <h1 className='text-5xl font-bold text-teal-900 text-center mb-12' id="playfair">Popular Products</h1>

        {/* Horizontal scrollable container */}
        <div className='flex overflow-x-auto space-x-8'>
          {products.map((product) => (
            <div key={product.id} className={`card rounded-lg shadow-md p-6 ${product.bgColor} min-w-[300px] h-96`}>
              {/* Use next/image instead of img */}
              <div className='w-full h-40 relative mb-4'>
                <Image
                  src={product.img}
                  alt={product.name}
                  layout="fill" // Fills the container while maintaining aspect ratio
                  objectFit="contain" // Ensures the image is contained without stretching
                  className='rounded-lg'
                />
              </div>
              <h2 className='text-xl text-[#9eada6] font-medium mb-2'>{product.name}</h2>
              <p className='text-sm text-[#9eada6] mb-4'>{product.description}</p>
              <p className='text-[#9eada6] font-bold'>${product.price}</p>
            </div>
          ))}
        </div>

        <div className='text-center mt-8'>
          <button className='bg-[#8caba3] hover:bg-teal-900 text-white font-bold py-2 px-4 rounded'>
            Explore all items →
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;
