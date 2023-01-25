import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Link to="/about">About</Link>
          </div>
          <div className="col-lg-4">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="col-lg-4">
            <Link to="/help">Help</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
