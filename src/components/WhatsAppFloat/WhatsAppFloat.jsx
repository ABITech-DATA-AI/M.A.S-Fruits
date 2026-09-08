import React from "react";
import WhatsAppIcon from "../WhatsAppIcon.jsx";
import "./WhatsAppFloat.css";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918015010397"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={30} color="#ffffff" />
    </a>
  );
}
