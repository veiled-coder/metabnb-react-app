import React from 'react';
import "../styles/header.css"

function Header() {
  return (
    <section className="header grid">
      <div className="header-content">
        <div className=" header-content_box header-hero_box">content 1</div>
        <div className="header-content_box header-image_box">content 2</div>
      </div>
    </section>
  );
}

export default Header