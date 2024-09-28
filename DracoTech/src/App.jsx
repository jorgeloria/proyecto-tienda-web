import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Login from './pages/Login';
import Category from './pages/Category';
import ShoppingCart from './pages/ShoppingCart';
import Product from './pages/Product';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path="/Login" element={<Login />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
<<<<<<< HEAD
        <Route path="/Product" element={<Product />} />
=======
        <Route path="/SignUp" element={<SignUp />} />
>>>>>>> 283e5cb (added initial sign up page)
      </Route>
    </Routes>
  );
}

export default App;
