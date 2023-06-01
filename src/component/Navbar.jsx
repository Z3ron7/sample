import React from "react";
import { Link } from "react-router-dom";
import Logo from '../pages/images/rudhil_logo.png';
import Logout from "../buttons/Logout";
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-info bg-light py-1 shadow p-3 sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4 text-dark" to="/">
          <img src={Logo} className="card-img-top" alt="Rudhil logo" height="55vh"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link to="/" className="nav-link me-4" aria-selected="true" aria-current="page">Insurance</Link>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link me-4">Insured</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link me-4">Coverage</a>
            </li>
          </ul>
        </div> */}
        
      </div>
      <Logout />

    </nav>
  );
};

export default Navbar;
