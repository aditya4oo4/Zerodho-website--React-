import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./landing_page/home/Homepage.jsx";
import About from "./landing_page/about/AboutPage.jsx";
import Pricing from "./landing_page/pricing/PricingPage.jsx";

import Support from "./landing_page/support/SupportPage.jsx";

import Navbar from "./landing_page/Navbar.jsx";
import Footer from "./landing_page/Footer.jsx";
import NotFound from "./landing_page/NotFound.jsx";
import Productpage from "./landing_page/product/Productpage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Navbar/>

    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/product" element={<Productpage />} />
      
      <Route path="/support" element={<Support />} />


      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);