import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  sticky-top border-bottom navbar-light bg-light">
      <a className="navbar-brand" href="#"></a>
      <div className="container">
        <img
          src="Media/images/logo.svg"
          style={{ width: "14%" }} 
          alt=""
          className=" logoimg " 
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent ">
          
            <ul className="navbar-nav ms-auto " style={{ marginRight: "3%" }}>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Signup <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
