import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Login from './pages/Login';
import Category from './pages/Category';
import ShoppingCart from './pages/ShoppingCart';
import Product from './pages/Product';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="/Login" element={<Login />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/Product" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
