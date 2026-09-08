import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

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
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>📍 T/F-90, Anna Fruit Market,<li>Chennai - 600092</li></li>
              <li>📞 +91 8015010397, 9176650733</li>
              <li>✉️ ayyappan4100@gmail.com</li>
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
