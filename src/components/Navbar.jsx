import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import menuConfig from "../assets/configuration/menuConfig.json";

function Navbar({ cart }) {
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmenuClick = (subItem, parentIndex) => {
    if (subItem.path) {
      navigate(subItem.path);
    }

    // Add force-hide class to parent menu item
    const menuItems = document.querySelectorAll(".menu-item");
    const parent = menuItems[parentIndex];
    if (parent) {
      parent.classList.remove("force-hide");
      void parent.offsetWidth; // trigger reflow
      parent.classList.add("force-hide");

      setTimeout(() => {
        parent.classList.remove("force-hide");
      }, 100); // submenu will hide briefly
    }
  };

  return (
    <nav className="navbar">
      <div className="menu-container" ref={menuRef}>
        <ul className="menu">
          {menuConfig.map((item, idx) => (
            <li key={idx} className="menu-item">
              <span
                className="menu-title"
                onClick={() => {
                  if (item.path) navigate(item.path);
                }}
              >
                {item.title}
              </span>

              {item.subMenu && (
                <ul className="submenu">
                  {item.subMenu.map((subItem, subIdx) => (
                    <li
                      key={subIdx}
                      className="submenu-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSubmenuClick(subItem, idx);
                      }}
                    >
                      {subItem.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-right">
        <div
          className="cart-icon-container"
          onClick={() => navigate("/checkout")}
        >
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cart?.length || 0}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
