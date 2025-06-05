import React from 'react';
import FoodNavbar from './FoodNavbar';

const vegetableData = [
  { id: 'v1', name: 'Tomato (1kg)', price: 30, image: 'https://images.unsplash.com/photo-1606788075761-1d7bcba82f88' },
  { id: 'v2', name: 'Potato (1kg)', price: 25, image: 'https://images.unsplash.com/photo-1582284548939-3e5ba0d6c06c' },
  { id: 'v3', name: 'Onion (1kg)', price: 28, image: 'https://images.unsplash.com/photo-1622900615183-0b9f20df9901' },
  { id: 'v4', name: 'Carrot (500g)', price: 20, image: 'https://images.unsplash.com/photo-1606755962772-62a4805b2fb4' },
  { id: 'v5', name: 'Cabbage (1 pc)', price: 35, image: 'https://images.unsplash.com/photo-1608137364763-e25b6ff658ef' },
  { id: 'v6', name: 'Cauliflower (1 pc)', price: 40, image: 'https://images.unsplash.com/photo-1624995462380-1fef3d69c6cb' },
  { id: 'v7', name: 'Broccoli (250g)', price: 45, image: 'https://images.unsplash.com/photo-1604937455450-a4c48bb5f0c3' },
  { id: 'v8', name: 'Spinach (1 bunch)', price: 15, image: 'https://images.unsplash.com/photo-1583337130417-3346a1b2e206' },
  { id: 'v9', name: 'Green Beans (500g)', price: 30, image: 'https://images.unsplash.com/photo-1615485296359-6f84e56454b2' },
  { id: 'v10', name: 'Cucumber (500g)', price: 18, image: 'https://images.unsplash.com/photo-1582281298052-3f056fa0e2a1' },
  { id: 'v11', name: 'Brinjal (500g)', price: 25, image: 'https://images.unsplash.com/photo-1587723316316-63478b6fdf7e' },
  { id: 'v12', name: 'Bottle Gourd (1 pc)', price: 30, image: 'https://images.unsplash.com/photo-1634732017910-54be4e46e019' },
  { id: 'v13', name: 'Lady Finger (500g)', price: 35, image: 'https://images.unsplash.com/photo-1608471146139-d4e75a24fc6b' },
  { id: 'v14', name: 'Pumpkin (1kg)', price: 20, image: 'https://images.unsplash.com/photo-1590080877652-49c70ad529f8' },
  { id: 'v15', name: 'Mushrooms (200g)', price: 40, image: 'https://images.unsplash.com/photo-1611765083444-6e7c4f4ab183' },
  { id: 'v16', name: 'Green Peas (250g)', price: 20, image: 'https://images.unsplash.com/photo-1590080877652-49c70ad529f8' },
  { id: 'v17', name: 'Coriander Leaves (1 bunch)', price: 10, image: 'https://images.unsplash.com/photo-1596386461350-5396f7f4157f' },
  { id: 'v18', name: 'Lettuce (1 pc)', price: 30, image: 'https://images.unsplash.com/photo-1609874922015-5559c9987eb3' },
  { id: 'v19', name: 'Green Chillies (100g)', price: 10, image: 'https://images.unsplash.com/photo-1627202423251-615d21eb1077' },
  { id: 'v20', name: 'Garlic (250g)', price: 25, image: 'https://images.unsplash.com/photo-1587206669431-3b8792f3a16d' }
];

const Vegetable = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Fresh Vegetables Delivered</h1>
          <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
            Handpicked vegetables straight from local farms to your doorstep.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-md transition duration-300">
            Explore Vegetables
          </button>
        </div>
      </div>

      {/* Vegetable Cards */}
      <div className="px-4 py-10 bg-gradient-to-b from-green-50 to-white">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Farm-Fresh Vegetables</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {vegetableData.map((veg) => (
            <div key={veg.id} className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300">
              <img src={veg.image} alt={veg.name} className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{veg.name}</h3>
                <p className="text-green-700 font-semibold mb-3">₹{veg.price}</p>
                <button className="w-full py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition">
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

export default Vegetable;
