import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col mt-2">
          <h3 className="text-center   mt-5 mb-2">
            Charges
          </h3>
          <p
            className="text-muted  text-center mb-5"
            style={{ fontSize: "27px" }}
          >
            List of all charges and taxes
          </p>
        </div>
      </div>
      <div
        className="row m-5 "
        style={{
          display: "flex",
          gap: "60px",
        }}
      >
        <div className="col m-2 ">
          <img src="Media\images\pricing0.svg" alt="" />
          <h3 className="text-center text-muted fw-semibold fs-3">
            Free equity delivery
          </h3>
          <h6
            className="text-muted text-center mt-2 fw-normal"
            style={{ lineHeight: "1.6", fontSize: "18px" }}
          >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </h6>
        </div>
        <div className="col m-2">
          <img src="Media\images\intradayTrades.svg" alt="" />
          <h3 className="text-center text-muted fw-semibold mb-0 fs-3">
            Intraday and F&O 
          </h3>
          <h6
            className="text-muted text-center mt-2 fw-normal"
            style={{ lineHeight: "1.6", fontSize: "18px" }}
          >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </h6>
        </div>
        <div className="col m-2">
          <img src="Media\images\pricing0.svg" alt="" />
          <h3 className="text-center text-muted fw-semibold fs-3">
            Free direct MF
          </h3>
          <h6
            className="text-muted text-center mt-2 fw-normal "
            style={{ lineHeight: "1.6", fontSize: "18px" }}
          >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </h6>
        </div>
      </div>
    </div>
  );
}
export default Hero;
