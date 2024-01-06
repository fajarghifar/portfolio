import React, { useState } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import projects from "../data/projects"
import "../styles/Projects.css"
import { FiExternalLink, FiGithub } from 'react-icons/fi';


function Projects() {
  const [typeFilter, setTypeFilter] = useState('all');
  const filterProjects = () => {
    if (typeFilter === 'all') return projects;
    return projects.filter(({type}) => type.includes(typeFilter));
  }
  return (
    <body>
    <TitleBar />
    <section className="flex-container">
      <section className="main-container">
        <Header />
        <MenuMobile />
        <main className="main-wrapper projects">
          <h1 className="title-page-projects">Recent Works</h1>
          <div className="btn-container">
            <button
              type="button"
              className={`btn-filter ${typeFilter === 'all' && 'active'}`}
              onClick={() => setTypeFilter('all')}
            >
              All
            </button>
            <button
              type="button"
              className={`btn-filter ${typeFilter === 'web' && 'active'}`}
              onClick={() => setTypeFilter('web')}
            >
              Web
            </button>
            <button
              type="button"
              className={`btn-filter ${typeFilter === 'mobile' && 'active'}`}
              onClick={() => setTypeFilter('mobile')}
            >
              Mobile
            </button>
            <button
              type="button"
              className={`btn-filter ${typeFilter === 'design' && 'active'}`}
              onClick={() => setTypeFilter('design')}
            >
              Design
            </button>
            </div>

          <div className="projects-container">
            {filterProjects().map(({type, name, src, repository, description, site, technologies }, index) => (
              <div key={index} className="card-project">
                <div className="img-container">
                  <img src={`img/projects/${src}`} alt="project-img" className="img-project" />
                </div>
                <h2 className="title-project">{name}</h2>
                <p>{description}</p>
                <div className="technologies-container">
                  {technologies.map(tech => (
                    <span className="span-technologies">{tech}</span>
                  ))}
                </div>
                <div className="links-container">
                  <a href={repository} title="Github" target="_blank" rel="noreferrer"><FiGithub /></a>
                  <a href={site} title="View application" target="_blank" rel="noreferrer"><FiExternalLink /></a>
                </div>
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

export default Projects;
