import React from 'react'
import { Link } from 'react-router-dom'

const FoodNavbar = () => {
  return (
    <div className='bg-black py-3 px-6 flex-col space-y-3 space-x-3 items-center justify-between'>
      <h1 className='text-xl font-semibold text-yellow-500'>Food Categories</h1>
      <Link to='/fastfood' className='text-blue-600 hover:text-yellow-500'>Fast Food</Link>
      <Link to='/ration' className='text-blue-600 hover:text-yellow-500'>Rations</Link>
      <Link to='/veg' className='text-blue-600 hover:text-yellow-500'>Vegetables</Link>
      <Link to='/nonveg' className='text-blue-600 hover:text-yellow-500'>Non Veg</Link>
    </div>
  )
}

export default FoodNavbar
