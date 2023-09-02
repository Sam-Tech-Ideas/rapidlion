import React from "react";
import Navbar from "../components/Navbar";

import About from "../components/About";
import Footer from "../components/Footer";
import CarouselSlide from "./CarouselSIde";
import Contact from "./Contact";
import { FaWhatsapp } from "react-icons/fa";
import Hero from "./Hero";
import { Content } from "./Content";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
    

      <About />
      <Content />
      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
