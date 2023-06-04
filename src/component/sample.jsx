import React, { useState } from "react";
import { FaDashboard, FaUser, FaApper, FaEnvelope, FaChartPie, FaFolder, FaShoppingCart, FaHeart, FaCog } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
      text: "Dashboard",
      icon: <FaApper />,
    },
    {
      text: "Admin Profile",
      icon: <FaUser />,
    },
    {
      text: "Messages",
      icon: <FaEnvelope />,
    },
    {
      text: "Analytics",
      icon: <FaChartPie />,
    },
    {
      text: "File Manager",
      icon: <FaFolder />,
    },
    {
      text: "Orders",
      icon: <FaShoppingCart />,
    },
    {
      text: "Saved Items",
      icon: <FaHeart />,
    },
    {
      text: "Settings",
      icon: <FaCog />,
    },
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons/Logo.svg" alt="" srcset="" />
							<h2>Showkart</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="#"
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/user.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">M Showkat</p>
							<p className="nav-footer-user-position">store admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
			</div>
		</div>
	);
};

export default Sidebar;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="position-fixed fluid">
      <div className="row">
        <div className="col-auto col-sm-2 bg-white d-flex flex-column justify-content-between min-vh-100">
          <div className="mt-3">
            <a href to="" className="text-decoration-none ms-4 d-flex align-items-center text-black d-none d-sm-inline" role="button">
              <span className="f5-4">Rudhil</span>
            </a>
            <hr className="text-black d-none d-sm-block"></hr>
            <ul className="dropdown open nav nav-pills flex-column mt-2 mt-sm-0 fnt" id="parentM">
            <li className="nav-item my-1 py-2 py-sm-0"
              id="triggerId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
                <NavLink
                  exact
                  to="/"
                  className="nav-link text-black text-center text-sm-start"
                  aria-current="page"
                >
                  <i className="bi bi-table"></i>
                  <span className="ms-2 d-none d-sm-inline">Data entry</span>
                </NavLink>
              </li>
            </ul>
            <ul className="nav nav-pills flex-column mt-2 mt-sm-0 fnt" id="parentM">
              <li className="nav-item my-1 py-2 py-sm-0">
                <NavLink
                  exact
                  to="/CustomerEntry"
                  className={`nav-link text-black text-center text-sm-start ${activeLink === '/CustomerEntry' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/CustomerEntry')}
                  aria-current="page"
                >
                  <i className="bi bi-people"></i>
                  <span className="ms-2 d-none d-sm-inline">Insurance</span>
                </NavLink>
              </li>
              <li className="nav-item my-1 py-2 py-sm-0">
                <NavLink
                  exact
                  to="/CustomerInsured"
                  className={`nav-link text-black text-center text-sm-start ${activeLink === '/CustomerInsured' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/CustomerInsured')}
                  aria-current="page"
                >
                  <i className="bi bi-grid"></i>
                  <span className="ms-2 d-none d-sm-inline">Insured</span>
                </NavLink>
              </li>
              <li className="nav-item my-1 py-2 py-sm-0">
                <NavLink
                  exact
                  to="/coverage"
                  className={`nav-link text-black text-center text-sm-start ${activeLink === '/coverage' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/coverage')}
                  aria-current="page"
                >
                  <i className="bi bi-table"></i>
                  <span className="ms-2 d-none d-sm-inline">Coverage</span>
                </NavLink>
              </li>
            </ul>
            <ul className="nav nav-pills flex-column mt-2 mt-sm-0 fnt" id="parentM">
            <li className="nav-item my-1 py-2 py-sm-0">
                <NavLink
                  exact
                  to="/transaction"
                  className={`nav-link text-black text-center text-sm-start ${activeLink === '/transaction' ? 'active' : ''}`}
                  onClick={() => handleLinkClick('/transaction')}
                  aria-current="page"
                >
                  <i className="bi bi-table"></i>
                  <span className="ms-2 d-none d-sm-inline">Transaction</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='bg-dark col-auto col-md-3 min-vh-100 d-flex justify-content-between flex-column'>
          <div className='mt-2'>
          <a className='text-decoration-none text-white d-non d-sm-inline d-flex align-item-center'>
            <i className='fs-4 bi bi-book'></i>
            <span className='ms-1 fs-4 d-none d-sm-inline'>Rudhil</span>
          </a>
          <hr className='text-secondary d-non e d-sm-block'/>
          <ul class="nav nav-pills flex-colum mt-3 mt-sm-0 " id='parentM'>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <a class="nav-link active text-white text-center text-sm-start fs-5 ms-3 mt-2" href="#" aria-current="page">
                  <i className='bi bi-book'></i>
                  <span className='ms-2 d-none d-sm-inline'>Data entry</span>
                  <i className='bi bi-arrow-down ms-0 ms-sm-4'></i>
                  </a>
                  <ul class="nav collapse ms-2 flex-column " id='submenu' data-bs-parent = "#parentM">
                      <li class="nav-item text-white">
                          <a class="nav-link" href="#" aria-current="page">
                            <span className='d-none d-sm-inline'>Insurance</span> 1
                          </a>
                      </li>
                      <li class="nav-item text-white">
                          <a class="nav-link" href="#">
                          <span className='d-none d-sm-inline'>Insured</span> 1
                          </a>
                      </li>
                      <li class="nav-item text-white">
                          <a class="nav-link" href="#">
                          <span className='d-none d-sm-inline'>Insurance</span> 1 
                          </a>
                      </li>
                  </ul>
              </li>
              <li class="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                  <a class="nav-link active text-white fs-5" href="#" aria-current="page">
                  <i className='bi bi-book'></i>
                  <span className='ms-2 d-none d-sm-inline'>Transaction</span>
                  </a>
              </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
