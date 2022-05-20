

import {  Route, Routes} from "react-router-dom";
import Login from "./Page/home/Login";
import Register from "./Page/home/Register";
//import Home from "./Page/home/Home";

//import NavBar from "./Components/NavBar/NavBar";
//import { Fragment, useState } from "react";
import Home from "./Page/home/Home";
import Cart from "./Page/home/Cart";
import Product from "./Page/home/Product";
import ProductList from "./Page/home/ProductList";
import Caterogy1 from "./Page/home/Caterogy1";
 
const Customer = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/product/:slug" element={<Product />} />
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/category/:id" element={<Caterogy1 />} />
     
    </Routes>
  )
   
}
export default Customer;
