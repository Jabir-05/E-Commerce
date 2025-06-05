import React from 'react';
import FoodNavbar from './FoodNavbar';

const rationData = [
  {
    id: 'r1',
    name: 'Basmati Rice (1kg)',
    price: 85,
    image: 'https://images.unsplash.com/photo-1608137634203-5f34aa6191e3',
  },
  {
    id: 'r2',
    name: 'Wheat Flour (1kg)',
    price: 60,
    image: 'https://images.unsplash.com/photo-1631515243346-0d9ff8f7e09d',
  },
  {
    id: 'r3',
    name: 'Mustard Oil (1L)',
    price: 130,
    image: 'https://images.unsplash.com/photo-1624979305189-50c2aa6a36fa',
  },
  {
    id: 'r4',
    name: 'Sunflower Oil (1L)',
    price: 120,
    image: 'https://images.unsplash.com/photo-1622450438872-0b89e55ddba7',
  },
  {
    id: 'r5',
    name: 'Toor Dal (1kg)',
    price: 110,
    image: 'https://images.unsplash.com/photo-1641479485914-cdc496d99b0b',
  },
  {
    id: 'r6',
    name: 'Moong Dal (1kg)',
    price: 100,
    image: 'https://images.unsplash.com/photo-1631515250610-e1c4d7639e53',
  },
  {
    id: 'r7',
    name: 'Chana Dal (1kg)',
    price: 95,
    image: 'https://images.unsplash.com/photo-1633322322075-e9446a9bc03f',
  },
  {
    id: 'r8',
    name: 'Sugar (1kg)',
    price: 50,
    image: 'https://images.unsplash.com/photo-1576186726116-c2b89b05fa21',
  },
  {
    id: 'r9',
    name: 'Salt (1kg)',
    price: 25,
    image: 'https://images.unsplash.com/photo-1616161237034-d6c7f5b81213',
  },
  {
    id: 'r10',
    name: 'Turmeric Powder (100g)',
    price: 20,
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
  },
  {
    id: 'r11',
    name: 'Red Chilli Powder (100g)',
    price: 30,
    image: 'https://images.unsplash.com/photo-1587202372775-99c02a193921',
  },
  {
    id: 'r12',
    name: 'Coriander Powder (100g)',
    price: 25,
    image: 'https://images.unsplash.com/photo-1615201769756-37ed6f5cc315',
  },
  {
    id: 'r13',
    name: 'Garam Masala (100g)',
    price: 40,
    image: 'https://images.unsplash.com/photo-1621605827166-9b4fd3423b2e',
  },
  {
    id: 'r14',
    name: 'Cumin Seeds (100g)',
    price: 35,
    image: 'https://images.unsplash.com/photo-1580218476581-62607365ae01',
  },
  {
    id: 'r15',
    name: 'Besan (500g)',
    price: 45,
    image: 'https://images.unsplash.com/photo-1631515213659-d7cc92de8d1c',
  },
  {
    id: 'r16',
    name: 'Poha (500g)',
    price: 30,
    image: 'https://images.unsplash.com/photo-1617196037444-fc7aa622b089',
  },
  {
    id: 'r17',
    name: 'Sooji (500g)',
    price: 25,
    image: 'https://images.unsplash.com/photo-1631515197479-87c5451bfc0d',
  },
  {
    id: 'r18',
    name: 'Dry Coconut (100g)',
    price: 50,
    image: 'https://images.unsplash.com/photo-1626712065359-4e7b4a2c7720',
  },
  {
    id: 'r19',
    name: 'Jaggery (500g)',
    price: 40,
    image: 'https://images.unsplash.com/photo-1635914409644-5c377a5a6637',
  },
  {
    id: 'r20',
    name: 'Tea Powder (250g)',
    price: 90,
    image: 'https://images.unsplash.com/photo-1510626176961-4bfb7fa293d7',
  }
];

const Ration = () => {
  return (
    <div>
      <FoodNavbar />
      <div className="relative h-[500px] w-full overflow-hidden">
        <img
          src="https://t4.ftcdn.net/jpg/02/92/20/37/360_F_292203735_CSsyqyS6A4Z9Czd4Msf7qZEhoxjpzZl1.jpg"
          alt="Food Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Daily Essentials at Your Doorstep</h1>
          <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
            Buy high-quality home ration and groceries at affordable prices.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-md transition duration-300">
            Explore Products
          </button>
        </div>
      </div>

      {/* Ration Cards Section */}
      <div className="px-4 py-10 bg-gradient-to-b from-yellow-50 to-white">
        <h2 className="text-3xl font-bold text-center text-yellow-600 mb-8">Home Ration Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {rationData.map((item) => (
            <div key={item.id} className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-yellow-700 font-semibold mb-3">₹{item.price}</p>
                <button className="w-full py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ration;
