import React from "react";
import style from "./Footer.module.css";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerLeft}>
          <div className={style.brand}>
            <span className={style.logoBox}>S</span>
            <span className={style.logoName}>  Suraj.DEV</span>
          </div>
          <p className={style.tagline}>
            Crafting modern, responsive web experiences with care and attention
            to detail.
          </p>
        </div>
        <div className={style.footerMiddle}>
          <h4 className={style.sectionTitle}>Quick Links</h4>
          <ul className={style.links}>
            <ScrollLink to="hero" smooth={true} duration={50}>
              <li>Home</li>
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={50}>
              <li>Skills</li>
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={50}>
              <li>Project</li>
            </ScrollLink>
            <ScrollLink to="education" smooth={true} duration={50}>
              <li>Education</li>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={50}>
              <li>Contact</li>
            </ScrollLink>
          </ul>
        </div>
        <div className={style.footerRight}>
          <h4 className={style.sectionTitle}>Contact</h4>
          <div className={style.socialIcons}>
            <FaGithub
              className={style.icon}
              onClick={() =>
                (window.location.href = "https://github.com/SurajMishra08")
              }
            />
            <FaLinkedin
              className={style.icon}
              onClick={() =>
                (window.location.href = "https://www.linkedin.com/in/suraj7571")
              }
            />
            <FaEnvelope
              className={style.icon}
              onClick={() =>
                (window.location.href = "mailto:surajmishra75710963@gmail.com")
              }
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
