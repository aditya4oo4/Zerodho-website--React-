import React from "react";

function Pricing() {
  return (
    <div className="container " style={{marginTop:"100px"}}>
      <div className="row">
        <div className="col-4">
          <h2 className="mb-3 fw-normal">unbeatable pricing</h2>
          <p style={{ maxWidth: "700px" }} className="mt-5">
            We pioneered the concept of discount broking and price transparency in India, Flat fees and no hidden charges.
            
          </p>
          <a style={{ textDecoration: "none" }} href="">
            See pricing
            <i className="fa fa-long-arrow-right ms-2 fs-200px" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
            <div className="row text-center">
                <div className="col border pt-4">
                    <h1 className="mb-4">₹0</h1>
                    <p >Free equity delivery and <br />direct mutul funds</p>
                </div>
                <div className="col border pt-4">
                     <h1 className="mb-4">₹20</h1>
                    <p>intraday and F&O</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Pricing;
