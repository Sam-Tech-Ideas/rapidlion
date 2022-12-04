import React from "react"
import Navbar from "./components/Navbar";
import CarouselSIde from "./components/CarouselSIde";
import About from "./components/About";
import { Carousel } from "flowbite-react";
import Footer from "./components/Footer";

function App() {


  return (
    <div>
      <Navbar />
      <CarouselSIde />
      
      <About />
      <Footer/>
    </div>
  );
}

export default App
