import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetails from '../components/ProductDetails'
import Basket from '../components/Basket'
import Favorite from '../components/Favorite'

function RouterConfig() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product-details/:id' element={<ProductDetails/>} />
        <Route path='/product-basket' element={<Basket/>} />
        <Route path='/favorites' element={<Favorite/>} />
    </Routes>      
  )
}

export default RouterConfig
