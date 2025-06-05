import React from 'react';
import FoodNavbar from './FoodNavbar';

const nonvegData = [
  { id: 'n1', name: 'Chicken Breast (500g)', price: 150, image: 'https://images.unsplash.com/photo-1603048295160-44fc99fadd53' },
  { id: 'n2', name: 'Mutton Curry Cut (500g)', price: 320, image: 'https://images.unsplash.com/photo-1632903776690-879f2d73b29a' },
  { id: 'n3', name: 'Eggs - White (6 pcs)', price: 45, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587' },
  { id: 'n4', name: 'Fish - Rohu Slices (500g)', price: 200, image: 'https://images.unsplash.com/photo-1605478704285-0c4915fae20d' },
  { id: 'n5', name: 'Chicken Leg Pieces (500g)', price: 170, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587' },
  { id: 'n6', name: 'Prawns - Medium (250g)', price: 240, image: 'https://images.unsplash.com/photo-1612392061774-c2d16ffba67f' },
  { id: 'n7', name: 'Chicken Drumsticks (500g)', price: 180, image: 'https://images.unsplash.com/photo-1613051974974-d3fc9b1626f9' },
  { id: 'n8', name: 'Fish - Katla (500g)', price: 210, image: 'https://images.unsplash.com/photo-1589978412557-e4bbd6d13e14' },
  { id: 'n9', name: 'Mutton Mince (500g)', price: 350, image: 'https://images.unsplash.com/photo-1618336753971-84bfc936338d' },
  { id: 'n10', name: 'Chicken Keema (500g)', price: 160, image: 'https://images.unsplash.com/photo-1618559679685-9fef4f41ef9f' },
  { id: 'n11', name: 'Fish - Surmai (250g)', price: 270, image: 'https://images.unsplash.com/photo-1587813861259-4f43a856ee1c' },
  { id: 'n12', name: 'Boiled Eggs (6 pcs)', price: 50, image: 'https://images.unsplash.com/photo-1606755962772-62a4805b2fb4' },
  { id: 'n13', name: 'Chicken Liver (500g)', price: 100, image: 'https://images.unsplash.com/photo-1578916171728-b5db0ef2a444' },
  { id: 'n14', name: 'Duck Meat (1kg)', price: 380, image: 'https://images.unsplash.com/photo-1612287230201-12ffdb42f290' },
  { id: 'n15', name: 'Crab (1 pc)', price: 260, image: 'https://images.unsplash.com/photo-1608830593086-910a6bfcf489' },
  { id: 'n16', name: 'Fish Fillet - Basa (250g)', price: 160, image: 'https://images.unsplash.com/photo-1616627784474-e136d5feaf75' },
  { id: 'n17', name: 'Goat Head Curry Cut', price: 280, image: 'https://images.unsplash.com/photo-1612296722273-f5e38c7efac5' },
  { id: 'n18', name: 'Quail Meat (500g)', price: 220, image: 'https://images.unsplash.com/photo-1616627784574-e136d5feaf66' },
  { id: 'n19', name: 'Chicken Wings (500g)', price: 150, image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f' },
  { id: 'n20', name: 'Eggs - Brown (6 pcs)', price: 55, image: 'https://images.unsplash.com/photo-1606756791031-8717d9532d2d' }
];

const Nonveg = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Non-Vegetarian Delights</h1>
          <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
            Juicy meats and seafood, fresh from the market to your kitchen.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-md transition duration-300">
            Explore Menu
          </button>
        </div>
      </div>

      {/* Non-Veg Cards */}
      <div className="px-4 py-10 bg-gradient-to-b from-red-50 to-white">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-8">Fresh Meats & Seafood</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {nonvegData.map((item) => (
            <div key={item.id} className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-red-700 font-semibold mb-3">₹{item.price}</p>
                <button className="w-full py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition">
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

export default Nonveg;
