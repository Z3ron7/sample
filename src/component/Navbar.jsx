import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../pages/images/rudhil_logo.png';
import './navbar.css';

const Navbar = () => {
  const [auth, setAuth] = useState(null);
  const [name, setName] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3000', { withCredentials: true })
      .then((res) => {
        if (res.data.Status === 'Success') {
          setAuth(true);
          setName(res.data.name);
        } else {
          setAuth(false);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  const handleLogout = () => {
    axios
      .get('http://localhost:3000/logout', { withCredentials: true })
      .then((res) => {
        localStorage.removeItem('token'); // Remove the token from local storage
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  if (auth === null) {
    return <div>Loading...</div>;
  }

  return (
    <nav className="d-flex navbar-expand-lg navbar-info bg-light py-0 shadow p-3 sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4 text-dark" to="/">
          {/* <img src={Logo} className="card-img-top" alt="Rudhil logo" height="55vh"/> */}
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
        <div className="container d-flex justify-content-end ">
      {auth ? (
        <div className="d-flex justify-content-end" >
        <h3>{name}</h3>
        <button className="btn btn-outline-danger" style={{marginLeft: "10px"}} onClick={handleLogout}>
          Logout <i className="fa fa-sign-out ml-2"></i>
        </button>
      </div>
      
      ) : null}
    </div>
      </div>
    </nav>
  );
};

export default Navbar;
