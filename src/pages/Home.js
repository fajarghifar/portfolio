import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import '../styles/Home.css';
import image from '../images/profile.webp';
import { FiDownload } from 'react-icons/fi';
import MenuMobile from "../components/MenuMobile";
import Typical from 'react-typical';

function Home() {
  return (
    <body>
      <TitleBar />
      <section className="flex-container">
        <SideBar />
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper home">
            <div className="home-content">
              <p><span className="span">{'<'}</span>Hello 👋, I'm</p>
              <h1>Fajar Ghifari Nugroho <span className="span">{'/>'}</span></h1>
              <Typical
                steps={['Full-Stack Developer', 1000, 'Web Development Student', 1000, 'Mobile Development Student', 1000]}
                loop={Infinity}
                wrapper="h2"
              />
              <a
                href="#"
                target="_blank"
                className="btn-download" rel="noreferrer"
              >
                Download CV
                <FiDownload />
              </a>
            </div>

            <div className="home-img">
              <img
                src={image}
                alt="foto profile fajar ghifari nugroho"
                className="image-perfil"
              />
            </div>

          </main>
        </section>
        {/* <SideBar /> */}
      </section>
      <Footer />
    </body>
  );
}

export default Home;
