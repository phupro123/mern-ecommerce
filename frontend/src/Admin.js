

import {  Route, Routes} from "react-router-dom";

//import NavBar from "./Components/NavBar/NavBar";
//import { useState } from "react";
import HomePage from "./Components/Home/HomePage";

const Admin = () => {
  return (
    
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      
       
  )
}
export default Admin;