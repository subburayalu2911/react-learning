import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ activePage, onNavClick }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navLinks = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "ℹ️" },
    { id: "contact", label: "Contact", icon: "📞" }
  ];

  return (
    <div className="sidebar-container">
      <nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
        <button
          className="toggle-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "☰" : "×"}
        </button>
        <h1 className="logo">{!isCollapsed && "My React Learning"}</h1>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={activePage === link.id ? "active" : ""}
                onClick={() => onNavClick(link.id)}
              >
                {link.icon} {!isCollapsed && link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
