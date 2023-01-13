import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import Signup from '../Pages/Signup'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  )
}

export default Router
