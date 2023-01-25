import React from 'react';
import { NavLink } from 'react-router-dom';


function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="nav-item nav-link" to="/">Home</NavLink>
      <NavLink className="nav-item nav-link" to="/about">About</NavLink>
      <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Navigation;
