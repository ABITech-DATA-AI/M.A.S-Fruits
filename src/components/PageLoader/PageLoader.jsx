import React from "react";
import logo from "../../assets/images/logo.png";
import "./PageLoader.css";

/**
 * Full-screen branded loader shown on first load and on every route change,
 * so navigating between pages feels like the site is "reloading" with the
 * MAS Fruits logo, instead of just snapping to new content.
 */
export default function PageLoader({ show }) {
  return (
    <div className={`page-loader ${show ? "show" : ""}`} aria-hidden={!show}>
      <div className="page-loader-spin">
        <div className="page-loader-ring"></div>
        <div className="page-loader-badge">
          <img src={logo} alt="MAS Fruits" />
        </div>
      </div>
      <div className="page-loader-text">
        <span>MAS</span> Fruits
      </div>
    </div>
  );
}
