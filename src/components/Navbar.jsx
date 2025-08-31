import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import menuConfig from "../assets/configuration/menuConfig.json";

function Navbar({ cart }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const handleMenuItemClick = (idx, item) => {
    if (item.subMenu) {
      setOpenSubmenus((prev) => ({
        ...prev,
        [idx]: !prev[idx],
      }));
    }

    if (item.path) {
      navigate(item.path);
      setMenuOpen(false); // close mobile menu
    }
  };

  const handleSubmenuClick = (subItem) => {
    if (subItem.path) navigate(subItem.path);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo" onClick={() => navigate("/")}>Srisai Delights</div>
      </div>

      <div className={`menu ${menuOpen ? "open" : ""}`}>
        {menuConfig.map((item, idx) => (
          <div
            key={idx}
            className={`menu-item ${openSubmenus[idx] ? "open" : ""}`}
          >
            <span
              className="menu-title"
              onClick={() => handleMenuItemClick(idx, item)}
            >
              {item.title}
            </span>

            {item.subMenu && (
              <div className="submenu">
                {item.subMenu.map((subItem, subIdx) => (
                  <div
                    key={subIdx}
                    className="submenu-item"
                    onClick={() => handleSubmenuClick(subItem)}
                  >
                    {subItem.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
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
