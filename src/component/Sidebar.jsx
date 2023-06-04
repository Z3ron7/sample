import React, { useState } from 'react';
import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/',
      name: 'Data entry',
      icon: <FaTh />,
      childrens: [
        {
            "title": "Home",
            "icon": "bi-house-fill",
            "path": "/"
        },
      ]
    },
    {
      path: '/about',
      name: 'About',
      icon: <FaUserAlt />
    },
    {
      path: '/analytics',
      name: 'Analytics',
      icon: <FaRegChartBar />
    },
    {
      path: '/comment',
      name: 'Comment',
      icon: <FaCommentAlt />
    },
    {
      path: '/product',
      name: 'Product',
      icon: <FaShoppingBag />
    },
    {
      path: '/productList',
      name: 'Product List',
      icon: <FaThList />
    }
  ];

  return (
    <div className="sidebar">
      <div
        style={{ width: isOpen ? '200px' : '50px' }}
        className={`sidebar${isOpen ? ' open' : ''}`}
      >
        <div className="top_section">
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            Logo
          </h1>
          <div
            style={{ marginLeft: isOpen ? '50px' : '0px' }}
            className="bars"
            onClick={toggle}
          >
            <FaBars />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
              {item.name}
              <i className="bi-chevron-down toggle-btn" onClick={() => setIsOpen(!isOpen)}></i>
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
