import React from 'react';
import FoodNavbar from './FoodNavbar';

const fastFoodData = [
  {
    id: "ff1",
    name: "Cheese Burger",
    price: 150,
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1550317138-10000687a72b",
    description: "Juicy grilled chicken patty with melting cheese and fresh lettuce."
  },
  {
    id: "ff2",
    name: "Veggie Delight Burger",
    price: 120,
    type: "veg",
    image: "https://images.unsplash.com/photo-1606755962773-73f3cde0b2b8",
    description: "Crispy veg patty with tomatoes, onions and secret sauce."
  },
  {
    id: "ff3",
    name: "French Fries",
    price: 90,
    type: "veg",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    description: "Crispy golden fries lightly salted."
  },
  {
    id: "ff4",
    name: "Chicken Nuggets",
    price: 130,
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1604908177870-92c1f0a79d5b",
    description: "Tender and crunchy chicken nuggets with ketchup dip."
  },
  {
    id: "ff5",
    name: "Margherita Pizza",
    price: 200,
    type: "veg",
    image: "https://images.unsplash.com/photo-1601924582975-4f28cba6c0a3",
    description: "Classic pizza with tomato sauce, mozzarella and basil."
  },
  {
    id: "ff6",
    name: "Pepperoni Pizza",
    price: 250,
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1601925123118-18d877c29d3a",
    description: "Cheesy pizza topped with spicy pepperoni slices."
  },
  {
    id: "ff7",
    name: "Veggie Wrap",
    price: 100,
    type: "veg",
    image: "https://images.unsplash.com/photo-1621985273741-05faed9a2b0e",
    description: "Whole wheat wrap filled with fresh veggies and hummus."
  },
  {
    id: "ff8",
    name: "Chicken Shawarma",
    price: 160,
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b140e1b3",
    description: "Spicy chicken wrap with garlic mayo and veggies."
  },
  {
    id: "ff9",
    name: "Chilli Potato",
    price: 110,
    type: "veg",
    image: "https://images.unsplash.com/photo-1660820731684-7a80219f8135",
    description: "Crispy potatoes tossed in spicy Chinese sauce."
  },
  {
    id: "ff10",
    name: "Chicken Popcorn",
    price: 140,
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1676278467826-901b7b1267c1",
    description: "Bite-sized crispy fried chicken chunks."
  },
  {
    id: "ff11",
    name: "Paneer Roll",
    price: 130,
    type: "veg",
    image: "https://images.unsplash.com/photo-1632821973314-76527eab6454",
    description: "Spicy paneer tikka in soft paratha wrap."
  },
  {
    id: "ff12",
    name: "Chicken Kathi Roll",
    price: 170,
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1660820731916-c80c4421f101",
    description: "Grilled chicken wrapped in egg paratha and sauces."
  },
  {
    id: "ff13",
    name: "Cheese Garlic Bread",
    price: 90,
    type: "veg",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    description: "Buttery garlic bread loaded with melted cheese."
  },
  {
    id: "ff14",
    name: "Loaded Nachos",
    price: 150,
    type: "veg",
    image: "https://images.unsplash.com/photo-1613145998171-68f0ef8a1d1c",
    description: "Nachos loaded with cheese, beans, salsa, and jalapeños."
  },
  {
    id: "ff15",
    name: "Spicy Chicken Wings",
    price: 180,
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb35",
    description: "Hot and crispy wings tossed in fiery sauce."
  },
  {
    id: "ff16",
    name: "Veg Momos",
    price: 100,
    type: "veg",
    image: "https://images.unsplash.com/photo-1632821818407-8a226d35a19c",
    description: "Steamed dumplings with spicy chutney."
  },
  {
    id: "ff17",
    name: "Chicken Momos",
    price: 130,
    type: "non-veg",
    image: "https://images.unsplash.com/photo-1632821922426-83b64bfc4733",
    description: "Juicy chicken-stuffed momos with red sauce."
  },
  {
    id: "ff18",
    name: "Cold Coffee",
    price: 80,
    type: "veg",
    image: "https://images.unsplash.com/photo-1604908177505-99c9f3d49f2d",
    description: "Chilled coffee with milk and chocolate syrup."
  },
  {
    id: "ff19",
    name: "Choco Lava Cake",
    price: 90,
    type: "veg",
    image: "https://images.unsplash.com/photo-1620218553671-73e2ef66d621",
    description: "Molten chocolate cake with gooey center."
  },
  {
    id: "ff20",
    name: "Vanilla Shake",
    price: 70,
    type: "veg",
    image: "https://images.unsplash.com/photo-1627201550291-cba82b88d1a6",
    description: "Creamy vanilla milkshake with ice cream topping."
  }
];


const FastFood = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Delicious Food Delivered</h1>
          <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
            Savor the taste of freshness and quality from our kitchen to your table.
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-md transition duration-300">
            Explore Menu
          </button>
        </div>
      </div>

      {/* Fast Food Cards */}
      <div className="px-4 py-10 bg-gradient-to-b from-yellow-50 to-white">
        <h2 className="text-3xl font-bold text-center text-yellow-600 mb-8">Fast Food Menu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {fastFoodData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  {item.type && (
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        item.type === 'veg'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {item.type}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-1">{item.description}</p>
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

export default FastFood;
