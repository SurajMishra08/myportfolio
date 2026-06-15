import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [active, setActive] = useState("hero"); // default active = Home

  const handleSetActive = (section) => {
    setActive(section);
  };

  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
      <div className="container">
        <a className={styles.logo} href="/">
          Suraj<span>.DEV</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-lg-4">
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "education", label: "Education" },
              { id: "achievements", label: "Certifications" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <li className="nav-item" key={item.id}>
                <ScrollLink
                  to={item.id}
                  smooth={true}
                  duration={50}
                  spy={true}
                  offset={-80}
                  activeClass={styles.activeNav}
                  className={`${styles.navLink} ${
                    active === item.id ? styles.activeNav : ""
                  }`}
                  onSetActive={() => handleSetActive(item.id)}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        <button
          className={styles.hireBtn}
          onClick={() =>
            (window.location.href = "mailto:surajmishra75710963@gmail.com")
          }
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
