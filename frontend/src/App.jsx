import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import FoodPage from './pages/food/FoodPage'
import FastFood from './pages/food/FastFood'
import Ration from './pages/food/Ration'
import Vegetable from './pages/food/Vegetable'
import Nonveg from './pages/food/Nonveg'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/food' element={<FoodPage/>}/>
        <Route path='/fastfood' element={<FastFood/>}/>
        <Route path='/ration' element={<Ration/>}/>
        <Route path='/veg' element={<Vegetable/>}/>
        <Route path='/nonveg' element={<Nonveg/>}/>
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
