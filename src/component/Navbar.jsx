import React from "react";
import { Link } from "react-router-dom";
import Logo from '../pages/images/MY LOGO.png';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-info bg-light py-1 shadow p-3 sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4 text-dark" to="/">
          <img src={Logo} className="card-img-top" alt="Background" height="55vh"/>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link to="/" className="nav-link me-4" aria-selected="true" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link me-4">About</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link me-4">Services</a>
            </li>
            <li className="nav-item">
              <a href="#pricing" className="nav-link me-4">Pricing</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link me-4">Contacts us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
