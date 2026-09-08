import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <h1>404</h1>
        <p>Oops — this page doesn't exist.</p>
        <Link to="/" className="btn btn-primary">Back to Home →</Link>
      </div>
    </section>
  );
}
