import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/img/logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'; // FontAwesome icons for hamburger and close

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (item) => {
    setMenu(item);
    setIsMobileMenuOpen(false); // Close menu on selection
  };

  return (
    <div className="Navbar new-navbar">
      <div className="row"></div>
      <img src={logo} alt="Logo" className="logo" />

      <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`} style={{padding:'10px'}}>
        {['home', 'about', 'services', 'contact'].map((item) => (
          <li  key={item}  onClick={() => handleMenuClick(item)}  className={menu === item ? 'active' : ''}>
            <AnchorLink className="anchor-link" href={`#${item}`}>
              {item === 'about' ? 'About Me' : item.charAt(0).toUpperCase() + item.slice(1)}
            </AnchorLink>
          </li>
        ))}

        <div className="nav-connect" onClick={() => handleMenuClick('contact')}>
          <AnchorLink className="anchor-link" href="#contact">Connect with me</AnchorLink>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className="burger-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
    </div>
  );
};

export default Navbar;
