import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  sticky-top border-bottom navbar-light bg-light">
     
      <div className="container">
        <Link className="navbar-brand" to="/">
        <img
          src="Media/images/logo.svg"
          style={{ width: "25%" }} 
          alt=""
          className=" logoimg " 
        />
         </Link>
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
                <Link className="nav-link" to="/signup">
                  Signup <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
