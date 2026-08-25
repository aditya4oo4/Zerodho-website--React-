import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./landing_page/home/Homepage.jsx";
import About from "./landing_page/about/AboutPage.jsx";
import Pricing from "./landing_page/pricing/PricingPage.jsx";
import Product from "./landing_page/product/Hero.jsx";
import Support from "./landing_page/support/SupportPage.jsx";
import Signup from "./landing_page/signup/Signup.jsx";
import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import NotFound from "./landing_page/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Navbar/>

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/product" element={<Product />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/support" element={<Support />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);