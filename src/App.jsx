import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Products from "./pages/Products";
import About from "./components/About";
import Services from "./components/Services";
function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App
