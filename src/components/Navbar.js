import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        Book <span>Bloom</span> ✿
      </NavLink>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/books" onClick={closeMenu}>Books</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>

        <NavLink to="/cart" className="cart-link" onClick={closeMenu}>
          ♡ Cart ({cartCount})
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;