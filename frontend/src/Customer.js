
import HomePage from "./Components/Home/HomePage";
import {  Route, Routes} from "react-router-dom";
import Login from "./Page/home/Login";
import Register from "./Page/home/Register";
//import Home from "./Page/home/Home";

//import NavBar from "./Components/NavBar/NavBar";
//import { Fragment, useState } from "react";
import Home from "./Page/admin/home/Home";

const Customer = () => {
  return (
    <Routes>
      <Route path="/"element={ <HomePage/> }/>
      <Route path="/t"element={ <Home/> }/>
       <Route path="/login" element={ <Login />}/>
       <Route path="/register" element={<Register />}/>
    </Routes>
  )
   
}
export default Customer;
