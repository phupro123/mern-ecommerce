import "./App.css";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
//import NavBar from "./Components/NavBar/NavBar";
//import { useState } from "react";
import Customer from "./Customer";
import Admin from "./Admin";


function App() {
  return (
    <Router>
        <Routes>  
          <Route path="/*" element={<Customer/>} />
          <Route path="/seller/*" element={<Customer/>} />
          <Route path="/admin/*" element={ <Admin />} />
        </Routes>
    </Router>
  );
}

export default App;
