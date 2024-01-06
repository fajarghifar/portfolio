import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import '../styles/About.css';
import IconCloud from '../components/IconCloud';

function About() {
  return (
    <body>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper about">
            <div className="about-container">
              <span className="span-tag html">{'<html>'}</span>
              <br/>
              <span className="span-tag body">{'<body>'}</span>
              <br/>
              <span className="span-tag content">{'<h1>'}</span>
                <h1 className="title-about">Hello 👋,</h1>
              <span className="span-tag content">{'</h1>'}</span>
              <br/>
              <span className="span-tag content">{'<p>'}</span>
                <p className="text-about">
                  Hi, I'm <span className="span-highlight">Fajar Ghifari Nugroho</span>, a student of Informatics Engineering at University Muhammadiyah Cirebon. Currently delving into <span className="span-highlight">Full-Stack Web Development</span>, I find joy in overcoming challenges through coding.
                </p>
                <p className="text-about">
                Beyond my academic pursuits, I bring practical experience in both web and mobile development, with a goal to craft applications that seamlessly blend <span className="span-highlight">accessibility and functionality</span>. Guided by a passion for problem-solving, I've successfully navigated intricate projects, engaging in rigorous testing and collaborative efforts within tight timelines.
                </p>
                {/* <p className="text-about last">
                  Relevant skills in my toolkit include: <span className="span-highlight">Html, CSS, JavaScript, React, Redux, ContextAPI, Hooks, Jest/RTL, Git/Github.</span>
                </p> */}
              <span className="span-tag content">{'</p>'}</span>
              <br/>
              <span className="span-tag body">{'</body>'}</span>
              <br/>
              <span className="span-tag html">{'</html>'}</span>
            </div>
            <IconCloud />
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </body>
  );
}

export default About;
