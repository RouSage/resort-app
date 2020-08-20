import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { HOME_PAGE, ROOMS_PAGE } from '../routes';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to={HOME_PAGE}>
            <img src={logo} alt="Resort App" />
          </Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaBars className="nav-icon" />
          </button>
        </div>
        <ul className={`nav-links ${isOpen ? 'show-nav' : ''}`}>
          <li>
            <Link to={HOME_PAGE}>Home</Link>
          </li>
          <li>
            <Link to={ROOMS_PAGE}>Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
