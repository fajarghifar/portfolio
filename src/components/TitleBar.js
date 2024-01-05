import React from "react";
import '../styles/TitleBar.css';

function TitleBar() {
  return (
    <section className="title-bar">
      <p>fajar_ghifari_portfolio</p>
      <div className="title-btn">
        <span className="close"/>
        <span className="minimize"/>
        <span className="maximize"/>
      </div>
    </section>
  );
}

export default TitleBar;
