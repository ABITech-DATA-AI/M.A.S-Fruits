import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  IconHome,
  IconLeaf,
  IconBox,
  IconFarm,
  IconBadge,
  IconImage,
  IconServices,
  IconEnvelope,
  DecorLeaf,
} from "../NavIcons.jsx";
import "./Navbar.css";

// `divider: true` renders a "|" immediately after that item — matches the
// reference design exactly, where a divider only appears after the active
// Home pill on the left, and between every item on the right.
const leftLinks = [
  { to: "/", label: "Home", icon: IconHome, divider: true },
  { to: "/about", label: "About Us", icon: IconLeaf },
  { to: "/products", label: "Products", icon: IconBox },
  { to: "/services", label: "Services", icon: IconServices, divider: true },
];

const rightLinks = [
  { to: "/quality", label: "Quality", icon: IconBadge, divider: true },
  { to: "/gallery", label: "Gallery", icon: IconImage, divider: true },
  { to: "/farms", label: "Our Farms", icon: IconFarm },
  { to: "/contact", label: "Contact", icon: IconEnvelope },
];

// All 8 topics together — used for the mobile dropdown so every link
// shows up on small screens, not just the first 4.
const allLinks = [...leftLinks, ...rightLinks];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar-wrap">
      <nav className="navbar">
        <div className="decor-leaf decor-leaf-left">
          <DecorLeaf size={34} />
        </div>

        <ul className="nav-links">
          {leftLinks.map((l) => {
            const Icon = l.icon;
            return (
              <React.Fragment key={l.to}>
                <li>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <Icon /> {l.label}
                  </NavLink>
                </li>
                {l.divider && <li className="nav-divider" aria-hidden="true"></li>}
              </React.Fragment>
            );
          })}
        </ul>

        <NavLink to="/" className="brand" aria-label="MAS Fruits — Home">
          <div className="brand-badge">
            <img src={logo} alt="MAS Fruits" className="brand-logo-img" />
          </div>
        </NavLink>

        <ul className="nav-links right">
          {rightLinks.map((l) => {
            const Icon = l.icon;
            return (
              <React.Fragment key={l.to}>
                <li>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <Icon /> {l.label}
                  </NavLink>
                </li>
                {l.divider && <li className="nav-divider" aria-hidden="true"></li>}
              </React.Fragment>
            );
          })}
        </ul>

        <div className="decor-leaf decor-leaf-right">
          <DecorLeaf size={34} flip />
        </div>

        <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? "✕" : "☰"}
        </button>

        {/* Mobile dropdown — all 8 topics in one list, shown only under 720px */}
        <ul className={`nav-links-mobile ${open ? "open" : ""}`}>
          {allLinks.map((l) => {
            const Icon = l.icon;
            return (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <Icon /> {l.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
