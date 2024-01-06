import React, { useState, useContext } from "react";
import '../styles/SideBar.css';
import react_icon from '../images/react_icon.svg'
import js_icon from '../images/js_icon.svg'
import html_icon from '../images/html_icon.svg'
import css_icon from '../images/css_icon.svg'
import json_icon from '../images/json_icon.svg'
import { IoIosArrowDown,IoIosArrowForward } from 'react-icons/io';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';
import myContext from "../context/AppContext";
import SideBarItem from './SideBarItem';

function SideBar() {
  const {activeSideBar} = useContext(myContext)
  const [open, setOpen] = useState(true);

  return (
    <aside className={`side-bar-container ${activeSideBar && 'active'}`}>
      <div  className="explore-title">
        <p>EXPLORER</p>
      </div>
      <button type="button"
        className="explore-portfolio"
        onClick={() => setOpen(!open)}
      >
        {open ? <IoIosArrowDown /> : <IoIosArrowForward />}
        {open ? <FaFolderOpen color="#EBCB8B"/> : <FaFolder color="#EBCB8B"/>}
        <p>Portfolio</p>
      </button>
      {open && (
        <>
          <SideBarItem
            icon={ react_icon }
            name='home.jsx'
            path="/"
          />
          <SideBarItem
            icon={ html_icon }
            name='about.html'
            path="/about"
          />
          <SideBarItem
            icon={ js_icon }
            name='projects.js'
            path="/projects"
          />
          <SideBarItem
            icon={ json_icon }
            name='testimonials.json'
            path="/recommendation"
          />
          <SideBarItem
            icon={ css_icon }
            name='contact.css'
            path="/contact"
          />
        </>
      )}
    </aside>
  );
}

export default SideBar;
