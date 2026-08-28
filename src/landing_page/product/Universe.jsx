import React from "react";

function Universe() {
  return (
    <div className="container py-5">
      <h5
        className="text-muted text-center fw-semibold"
        style={{ marginBottom: "80px" }}
      >
        Want to know more about our technology stack? Check out the{" "}
        <a href="" style={{ textDecoration: "none" }}>
          Zerodha.tech
        </a>{" "}
        blog.
      </h5>

      <h2 className="text-center text-dark mb-4">
        The Zerodha Universe
      </h2>

      <h6 className="text-muted text-center mb-5">
        Extend your trading and investment experience even further with our
        partner platforms
      </h6>

      {/* First Row */}

      <div className="row text-center justify-content-center g-5 mb-5">
        <div className="col-md-4">
          <img
            src="Media/images/zerodhaFundhouse.png"
            alt=""
            style={{
              width: "180px",
              height: "60px",
              objectFit: "contain",
            }}
             className="universe-logo"
          />

          <p
            className="text-muted mx-auto mt-4"
            style={{
              width: "75%",
              fontSize: "13px",
              lineHeight: "1.7",
            }}
          >
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4">
          <img
            src="Media/images/sensibullLogo.svg"
            alt=""
            style={{
              width: "180px",
              height: "60px",
              objectFit: "contain",
            }}
             className="universe-logo"
          />

          <p
            className="text-muted mx-auto mt-4"
            style={{
              width: "75%",
              fontSize: "13px",
              lineHeight: "1.7",
            }}
          >
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-md-4">
          <img
            src="Media/images/tijori.svg"
            alt=""
            style={{
              width: "180px",
              height: "60px",
              objectFit: "contain",
            }}
             className="universe-logo"
          />

          <p
            className="text-muted mx-auto mt-4"
            style={{
              width: "75%",
              fontSize: "13px",
              lineHeight: "1.7",
            }}
          >
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>

      {/* Second Row */}

      <div className="row text-center justify-content-center g-5">
        <div className="col-md-4">
          <img
            src="Media/images/streakLogo.png"
            alt=""
            style={{
              width: "180px",
              height: "60px",
              objectFit: "contain",
            }}
             className="universe-logo"
          />

          <p
            className="text-muted mx-auto mt-4"
            style={{
              width: "75%",
              fontSize: "13px",
              lineHeight: "1.7",
            }}
          >
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-md-4">
          <img
            src="Media/images/smallcaseLogo.png"
            alt=""
            style={{
              width: "180px",
              height: "60px",
              objectFit: "contain",
            }}
             className="universe-logo"
          />

          <p
            className="text-muted mx-auto mt-4"
            style={{
              width: "75%",
              fontSize: "13px",
              lineHeight: "1.7",
            }}
          >
            Thematic investing platform that helps you invest in diversified
            baskets of stocks and ETFs.
          </p>
        </div>

        <div className="col-md-4">
          <img
            src="Media/images/dittoLogo.png"
            alt=""
            style={{
              width: "180px",
              height: "60px",
              objectFit: "contain",
            }}
             className="universe-logo"
          />

          <p
            className="text-muted mx-auto mt-4"
            style={{
              width: "75%",
              fontSize: "13px",
              lineHeight: "1.7",
            }}
          >
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
                        <button className="p-2 btn btn-primary fs-5 mt-5 mb-5" style={{width:"20%", margin:"0 auto"}}>Signup Now</button>

      </div>
    </div>
  );
}

export default Universe;