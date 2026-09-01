import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src={logo} alt="MAS Fruits" className="footer-logo" />
              <h4 style={{ margin: 0 }}>MAS Fruits</h4>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7 }}>
              Naturally delicious bananas and fruits, grown pure and fresh on our
              own hill farms and delivered straight to you.
            </p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/farms">Our Farms</Link></li>
              <li><Link to="/quality">Quality</Link></li>
            </ul>
          </div>
          <div>
            <h4>More</h4>
            <ul>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>📍 Hill Farms Estate, Tamil Nadu, India</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@masfruits.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} MAS Fruits. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
