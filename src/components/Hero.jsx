import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link as ScrollLink } from "react-scroll";
import profileImg from "../assets/suraj.png";
const Hero = () => {
  return (
    <>
      <section id="hero" className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-7 text-white">
              <div className="availability-badge">
                ● Available for Freelance & Internships
              </div>

              <h1 className="hero-title">
                Hi, I'm <span>Suraj Mishra</span>
              </h1>

              <h2 className="hero-subtitle">I'm a Full-Stack Developer</h2>

              <p className="hero-description">
                Passionate developer specializing in React, FastAPI, and modern
                web applications. I build clean, fast, and delightful digital
                experiences.
              </p>
              <button
                className="btn project-btn"
                onClick={() =>
                  (window.location.href =
                    "https://drive.google.com/file/d/185TQ0c7xbuDkQgmdfpHhAWhf1Ddy6wFw/view?usp=drivesdk")
                }
              >
                View Resume →
              </button>
              <div className="social-links mt-4 icons">
                <i
                  className="bi bi-github"
                  onClick={() =>
                    (window.location.href = "https://github.com/SurajMishra08")
                  }
                ></i>
                <i
                  className="bi bi-linkedin"
                  onClick={() =>
                    (window.location.href =
                      "https://www.linkedin.com/in/suraj7571")
                  }
                ></i>
                <i
                  className="bi bi-envelope-fill"
                  onClick={() =>
                    (window.location.href =
                      "mailto:surajmishra75710963@gmail.com")
                  }
                ></i>
              </div>
            </div>

            <div className="col-lg-5 text-center mt-5 mt-lg-0">
              <img
                src={profileImg}
                alt="Suraj"
                className="img-fluid hero-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
