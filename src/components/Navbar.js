import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ activeSection }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">JIYA JOY</div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={activeSection === '' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={activeSection === 'about' ? 'active' : ''}>About</Link>
        </li>
        <li>
          <Link to="/skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</Link>
        </li>
        <li>
          <Link to="/projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</Link>
        </li>
        <li>
          <Link to="/contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
