import React from "react";
import { BsLinkedin, BsGithub, BsTwitterX, BsInstagram, BsYoutube } from 'react-icons/bs';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="links-footer">
        <p>Talk to Me:</p>
        <a href="https://www.linkedin.com/in/fajarghifar/"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsLinkedin className="icon-footer"/>
        </a>
        <a href="https://github.com/fajarghifar"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsGithub className="icon-footer"/>
        </a>
        <a href="https://twitter.com/fajarghifarii"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsTwitterX className="icon-footer"/>
        </a>
        <a href="https://instagram.com/fajarghifar"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsInstagram className="icon-footer"/>
        </a>
        <a href="https://youtube.com/@fajarghifar"
          target="_blank"
          className="icon-container"
          rel="noreferrer"
        >
          <BsYoutube className="icon-footer"/>
        </a>
      </div>

      <p className="text-footer">Build with ❤ by Fajar Ghifari Nugroho</p>
    </footer>
  );
}

export default Footer;
