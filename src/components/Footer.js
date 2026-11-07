import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h2>Book Bloom ✿</h2>

      <p>Where every page blooms into a new adventure.</p>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <p className="copyright">
        © 2026 Book Bloom. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;