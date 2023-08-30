import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from'../component/Login'
import Register from '../component/Register'
import Filter from './filter'
import ProductCard from './ProductCard/ProductCard'
import Payment from './Payment'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/tempo" element={<Filter/>}></Route>
        <Route path="/product" element={<ProductCard/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
    </Routes>
  )
}

export default AllRoutes
