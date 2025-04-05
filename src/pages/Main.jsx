import React, { useState } from 'react';

function Main() {
  const [silPoints, setSilPoints] = useState(1200);
  const [karmaPoints, setKarmaPoints] = useState(1200);
  const [badges, setBadges] = useState(8);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        {/* Cards with margin-top 20px */}
        <main className="p-6 mt-5">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Get Your Points</h1>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* Sil Points */}
            <div className="bg-white p-6 rounded-2xl shadow w-64 text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-50">
              <h1 className="text-4xl font-extrabold text-indigo-600 mb-2">{silPoints}</h1>
              <h2 className="text-xl font-semibold mb-2">Sil Points</h2>
            </div>

            {/* Karma Points */}
            <div className="bg-white p-6 rounded-2xl shadow w-64 text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-50">
              <h1 className="text-4xl font-extrabold text-green-600 mb-2">{karmaPoints}</h1>
              <h2 className="text-xl font-semibold mb-2">Karma Points</h2>
            </div>

            {/* Badges */}
            <div className="bg-white p-6 rounded-2xl shadow w-64 text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gray-50">
              <h1 className="text-4xl font-extrabold text-yellow-600 mb-2">{badges}</h1>
              <h2 className="text-xl font-semibold mb-2">Badges</h2>
            </div>
          </div>

          {/* Centered Hello Boxes */}
          <h1 className="text-4xl font-bold text-center text-gray-800 mt-12 mb-6">
            Previous Found Items
          </h1>

          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex justify-center mt-10">
              <div className="bg-white shadow-lg rounded-2xl p-6 w-[800px] text-center relative">
                {/* Connector line between avatars */}
                <div className="absolute top-1/2 left-[140px] right-[140px] h-0.5 bg-black z-0" />

                <div className="flex items-center justify-between relative z-10 h-20 px-10">
                  {/* Circle 1 - Laptop Image */}
                  <div className="w-20 h-20 rounded-full overflow-hidden shadow-md border-2 border-indigo-500">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
                      alt="Laptop"
                      className="w-full h-full object-cover p-2"
                    />
                  </div>

                  {/* Circle 2 - Avatar B */}
                  <div className="w-20 h-20 rounded-full overflow-hidden shadow-md border-2 border-green-500">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Avatar B"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Circle 3 - Avatar C */}
                  <div className="w-20 h-20 rounded-full overflow-hidden shadow-md border-2 border-yellow-500">
                    <img
                      src="https://randomuser.me/api/portraits/men/85.jpg"
                      alt="Avatar C"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}



        </main>
      </div>
    </div>
  );
}

export default Main;
