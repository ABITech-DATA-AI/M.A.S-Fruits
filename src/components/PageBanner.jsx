import React from "react";

export default function PageBanner({ title, crumb }) {
  return (
    <section className="page-banner">
      <div className="container">
        <h1>{title}</h1>
        <div className="crumb">Home &nbsp;/&nbsp; {crumb}</div>
      </div>
    </section>
  );
}
