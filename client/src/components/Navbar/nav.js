import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={logo} className="navbar-brand" alt="Logo" />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Sign/Sign Up
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Sign In</a>
              <a className="dropdown-item" href="#">Sign Up</a>
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/destinations">Destinations</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/trips">Trips</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/tips">Tips</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
