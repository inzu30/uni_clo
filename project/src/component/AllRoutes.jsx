import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from'../component/Login'
import Register from '../component/Register'
import Filter from './filter'
import ProductCard from './ProductCard/ProductCard'
import Payment from './Payment'
import Cart from './Cart'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/products/:category" element={<Filter/>}></Route>
        <Route path="products/:category/:id" element={<ProductCard/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  )
}

export default AllRoutes;
