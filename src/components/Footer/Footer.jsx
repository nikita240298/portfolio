import React from 'react';
import logo from '../../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className="bg-light text-muted py-4 px-3 mt-5">
      {/* Top Section */}
      <div className="container d-flex flex-wrap justify-content-between align-items-center gap-4 mb-3">
        {/* Left Side */}
        <div className="d-flex align-items-start gap-3">
          <img
            src={logo}
            alt="logo"
            style={{ height: '50px', width: '50px', borderRadius: '50%' }}
          />
          <p className="mb-0 small" style={{ maxWidth: '400px' }}>
            Hi! I'm Nikita Gharjale, a fullstack developer from Nagpur, India with 1 year of experience.
          </p>
        </div>

        {/* Right Side: Email Input + Subscribe */}
        <div className="d-flex align-items-center bg-secondary bg-opacity-25 rounded-pill p-2 gap-2">
          <i className="fa-solid fa-user text-dark ms-2"></i>
          <input type="email" placeholder="Enter your email" className="form-control form-control-sm bg-transparent border-0"style={{ width: '160px' }}/>
          <button
            className="btn btn-sm text-white"
            style={{background: 'linear-gradient(90deg, #e66465, #9198e5)',borderRadius: '20px',padding: '6px 14px'}}>
            Subscribe
          </button>
        </div>
      </div>

      <hr />

      {/* Bottom Section */}
      <div className="container d-flex flex-wrap justify-content-between align-items-center small gap-2">
        <div className="text-muted">
          © 2025 Nikita Gharjale. All rights reserved.
        </div>
        <div className="d-flex gap-3">
          <p className="mb-0">Terms of Service</p>
          <p className="mb-0">Privacy Policy</p>
          <p className="mb-0">Connect with Me</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
