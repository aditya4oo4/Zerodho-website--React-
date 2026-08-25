import React from "react";
import Hero from "./Hero";
import Award from "./Award";

import Stats from "./Stats";
import Education from "./Education";
import Pricing from "./Pricing";

import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";


function Homepage(){
    return(
        <>
            
            <Hero/>
            <Award/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            
        </>
    );
}
export default Homepage;