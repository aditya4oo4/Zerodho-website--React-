import React from "react";


function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="row p-5 " style={{marginLeft:"50px" ,marginRight:"50px",marginTop:"50px"}}>
        <div className="col " style={{marginBottom:"20px"}}>
        <h1
          className="fs-3 text-center  mt -5 text-muted"
          // style={{ lineHeight: "1.5" }}
        >
          Zerodha Products
        </h1>
        <p className="text-center  mt-4 mb-3" style={{fontSize:"23px"}}>Sleek, modern, and intuitive trading platforms</p>
        <p  className="text-center b-5"  style={{fontSize:"19px "}}>Check out our <a href="" style={{fontSize:"19px " ,textDecoration:"none",marginBottom:"45px" }} > investment offerings<i className="fa fa-long-arrow-right ms-2 fs-200px" aria-hidden="true"></i></a></p>
        <br />
        <br />

        </div>
      </div>
    </div>
  );
}
export default Hero;
