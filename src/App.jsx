import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./pages/Products";
import Services from "./components/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
