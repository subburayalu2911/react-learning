import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";

function Navbar({ activePage, onNavClick }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navLinks = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "ℹ️" },
    { id: "contact", label: "Contact", icon: "📞" },
    { id: "form", label: "Form", icon: "📋" }
  ];

  return (
    <div className="sidebar-container">
      <nav className={`sidebar${isCollapsed ? " collapsed" : ""}`}>
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
                className={`sidebar-link${activePage === link.id ? " sidebar-link-active" : ""}`}
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
