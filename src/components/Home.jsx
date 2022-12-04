import React from 'react'
import Navbar from "../components/Navbar";
import CarouselSIde from "../components/CarouselSIde";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CarouselSIde />
      <About />
      <Footer />
    </div>
  );
}

export default Home