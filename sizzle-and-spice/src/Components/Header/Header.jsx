import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css"
const Header = () => {
  return (
    <div className="Header">
      <div className="header-container">
        <div className="logo">
          <h2 className="logo-title">SIZZLE & SPICE</h2>
        </div>
        <div className="header-wrapper">
          <div className="header-list">
            <ol className="header-items">
              <li className="header-items">
                <Link to="/">Home</Link>
                
              </li>
              <li className="header-items">
                <Link to="/menu">Menu</Link>
                
              </li>
              <li className="header-items">
                <Link to="/contacts">Contacts</Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
