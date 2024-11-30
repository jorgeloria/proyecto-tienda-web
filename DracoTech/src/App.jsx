import React from "react";
import { Routes, Route } from "react-router-dom";

import Account from "./pages/Account";
import EditAccount from "./pages/EditAccount";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Category from "./pages/Category";
import ShoppingCart from "./pages/ShoppingCart";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import PurchaseHistory from './pages/PurchaseHistory';
import CheckoutPage  from './pages/CheckoutPage';
import BillPage from "./pages/BillPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/EditAccount" element={<EditAccount />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/PurchaseHistory" element={<PurchaseHistory />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
        <Route path="/BillPage" element={<BillPage />} />
      </Route>
    </Routes>
  );
}

export default App;
