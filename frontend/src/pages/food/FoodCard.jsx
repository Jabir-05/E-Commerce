import React from 'react';

const FoodCard = () => {
  const foodData = [
    {
      id: 'fast_food',
      title: 'Fast Food',
      items: [
        { id: 'ff1', name: 'Burger', price: 120, type: 'veg', image: '' },
        { id: 'ff2', name: 'Chicken Burger', price: 150, type: 'non-veg', image: '' },
        { id: 'ff3', name: 'French Fries', price: 90, type: 'veg', image: '' },
        { id: 'ff4', name: 'Pizza', price: 200, type: 'veg', image: '' },
        { id: 'ff5', name: 'Chicken Nuggets', price: 130, type: 'non-veg', image: '' }
      ]
    },
    {
      id: 'ration',
      title: 'Home Ration',
      items: [
        { id: 'hr1', name: 'Rice (1kg)', price: 60, image: '' },
        { id: 'hr2', name: 'Wheat Flour (1kg)', price: 50, image: '' },
        { id: 'hr3', name: 'Cooking Oil (1L)', price: 110, image: '' },
        { id: 'hr4', name: 'Lentils (1kg)', price: 95, image: '' },
        { id: 'hr5', name: 'Sugar (1kg)', price: 45, image: '' }
      ]
    },
    {
      id: 'vegetables',
      title: 'Vegetables',
      items: [
        { id: 'veg1', name: 'Tomato (1kg)', price: 35, image: '' },
        { id: 'veg2', name: 'Potato (1kg)', price: 25, image: '' },
        { id: 'veg3', name: 'Onion (1kg)', price: 30, image: '' },
        { id: 'veg4', name: 'Spinach (500g)', price: 20, image: '' },
        { id: 'veg5', name: 'Cauliflower (1pc)', price: 40, image: '' }
      ]
    },
    {
      id: 'non_veg',
      title: 'Non-Veg Items',
      items: [
        { id: 'nv1', name: 'Chicken (1kg)', price: 220, image: '' },
        { id: 'nv2', name: 'Mutton (1kg)', price: 480, image: '' },
        { id: 'nv3', name: 'Fish (1kg)', price: 300, image: '' },
        { id: 'nv4', name: 'Eggs (6 pcs)', price: 45, image: '' }
      ]
    },
    {
      id: 'veg_thali',
      title: 'Veg Thali',
      items: [
        {
          id: 'vt1',
          name: 'Simple Veg Thali',
          price: 150,
          includes: ['Rice', 'Dal', '2 Roti', 'Sabzi', 'Salad', 'Pickle'],
          image: ''
        },
        {
          id: 'vt2',
          name: 'Deluxe Veg Thali',
          price: 220,
          includes: ['Jeera Rice', 'Paneer', 'Dal Makhani', '4 Roti', 'Raita', 'Sweet'],
          image: ''
        }
      ]
    },
    {
      id: 'non_veg_thali',
      title: 'Non-Veg Thali',
      items: [
        {
          id: 'nvt1',
          name: 'Chicken Thali',
          price: 250,
          includes: ['Rice', 'Chicken Curry', '2 Roti', 'Salad', 'Pickle'],
          image: ''
        },
        {
          id: 'nvt2',
          name: 'Mutton Thali',
          price: 320,
          includes: ['Jeera Rice', 'Mutton Curry', '4 Roti', 'Raita', 'Sweet'],
          image: ''
        }
      ]
    }
  ];

  return (
    <div className="px-4 py-10 bg-gray-100">
      {foodData.map((category) => (
        <div key={category.id} className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{category.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300"
              >
                <div className="h-40 w-full mb-4 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                  {/* Placeholder image section */}
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  ) : (
                    <span className="text-gray-400">Image</span>
                  )}
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  {item.type && (
                    <span
                      className={`text-sm font-medium px-2 py-1 rounded-full ${
                        item.type === 'veg'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {item.type}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-2">₹{item.price}</p>
                {item.includes && (
                  <ul className="text-sm text-gray-500 list-disc ml-5 space-y-1">
                    {item.includes.map((food, i) => (
                      <li key={i}>{food}</li>
                    ))}
                  </ul>
                )}
                <button className="mt-4 w-full bg-yellow-500 text-black font-semibold py-2 rounded-lg hover:bg-yellow-600 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
