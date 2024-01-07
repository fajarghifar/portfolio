import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import testimonials from "../data/testimonials"
import "../styles/Testimonials.css"

export default function Testimonials() {
  return (
    <body>
    <TitleBar />
    <section className="flex-container">
      <section className="main-container">
        <Header />
        <MenuMobile />
        <main className="main-wrapper testimonials">
          <h1 className="title-testimonials">My Client Say</h1>
          <div className="testimonials-container">
            {testimonials.map(({name, message, social}, index) => (
              <div className={`testimonials-card ${index === 1 && 'border'}`} key={name}>
                <p>{message}</p>
                <a href={social} target="_blank" rel="noreferrer"><h2>{name}</h2></a>
              </div>
            ))}
          </div>
        </main>
      </section>
      <SideBar />
    </section>
    <Footer />
  </body>
  );
}
