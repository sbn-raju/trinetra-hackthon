import React, { useState } from 'react';

const Lostitems = () => {
  const [images, setImages] = useState([
    {
      src: 'https://via.placeholder.com/300x200',
      title: 'Lost Wallet',
      description: 'Black leather wallet found near the library.',
    },
    {
      src: 'https://via.placeholder.com/300x200',
      title: 'Water Bottle',
      description: 'Stainless steel bottle left in the classroom.',
    },
    {
      src: 'https://via.placeholder.com/300x200',
      title: 'Earbuds',
      description: 'White wireless earbuds dropped in the hallway.',
    },
  ]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {images.map((item, index) => (
        <div
          key={index}
          className="flex flex-col bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-200"
        >
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
          <p className="text-gray-600 text-sm mb-4">{item.description}</p>
          <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200">
            Claim
          </button>
        </div>
      ))}
    </div>
  );
};

export default Lostitems;
