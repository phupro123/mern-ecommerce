import React from "react";
import Categories from "../../Components/Home/Categories";
import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";
import Newsletter from "../../Components/Home/Newsletter";
import Products from "../../Components/Home/Products";
import Slider from "../../Components/Home/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
