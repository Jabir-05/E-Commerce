import React from 'react'
import FoodNavbar from './FoodNavbar'
import FoodCard from './FoodCard'

const FoodPage = () => {
  return (
    <div>
      <FoodNavbar />

      {/* Banner Section */}
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
      <FoodCard/>
    </div>
  )
}

export default FoodPage
