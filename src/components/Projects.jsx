import hirehubImg from "../assets/hirehub.png";
import sbhImg from "../assets/sbh.png";
import tajImg from "../assets/taj.png";
import bakeryImg from "../assets/bakery.png";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import style from "./Projects.module.css";
function Projects() {
  return (
    <section id="projects" className={style.projects}>
      <h2 className={style.title}>PROJECTS</h2>

      <div className={style.projectGrid}>
        {/* Card 1 */}
        <div className={style.projectCard}>
          <img src={hirehubImg} alt="Hurehub" className={style.projectImage} />
          <h3 className={style.projectName}>HireHub</h3>
          <p className={style.projectDesc}>
            Developed HireHub, a full‑stack job portal using Django and
            Bootstrap with authentication, job postings, profiles, and
            responsive UI.
          </p>

          <div className={style.techStack}>
            <span>Html</span>
            <span>CSS</span>
            <span>JavaScripts</span>
            <span>Bootstrap</span>
            <span>Python</span>
            <span>Django</span>
          </div>

          <div className={style.buttons}>
            <a
              href="https://hirehub-7j1o.onrender.com"
              className={style.customBtn}
            >
              <HiOutlineExternalLink />
              Live Demo
            </a>
            <a
              href="https://github.com/SurajMishra08/HireHub"
              className={style.customBtn}
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className={style.projectCard}>
          <img src={sbhImg} alt="sbh" className={style.projectImage} />
          <h3 className={style.projectName}>Smart BuildHub System</h3>
          <p className={style.projectDesc}>
            Built a full‑stack construction management app using Django and
            Bootstrap with authentication, responsive UI, and database
            integration.
          </p>

          <div className={style.techStack}>
            <span>Html</span>
            <span>CSS</span>
            <span>JavaScripts</span>
            <span>Bootstrap</span>
            <span>Python</span>
            <span>Django</span>
          </div>

          <div className={style.buttons}>
            <a
              href="https://smart-buildhub-system.onrender.com"
              className={style.customBtn}
            >
              <HiOutlineExternalLink />
              Live Demo
            </a>
            <a
              href="https://github.com/SurajMishra08/Smart_Buildhub_System"
              className={style.customBtn}
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className={style.projectCard}>
          <img src={tajImg} alt="taj Resort" className={style.projectImage} />
          <h3 className={style.projectName}>Taj Resort</h3>
          <p className={style.projectDesc}>
            Enhanced Taj Resort website clone showcasing front‑end skills with
            hero, gallery, amenities, and contact form in elegant design.
          </p>

          <div className={style.techStack}>
            <span>Html</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>JavaScripts</span>
          </div>

          <div className={style.buttons}>
            <a
              href="https://tajresortweb.netlify.app/"
              className={style.customBtn}
            >
              <HiOutlineExternalLink />
              Live Demo
            </a>
            <a
              href="https://github.com/SurajMishra08/TajWebsite"
              className={style.customBtn}
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div className={style.projectCard}>
          <img
            src={bakeryImg}
            alt="Bakery Website"
            className={style.projectImage}
          />
          <h3 className={style.projectName}>Bakery Website</h3>
          <p className={style.projectDesc}>
            Designed a bakery web app with modern layout, product galleries,
            contact/order form, and intuitive navigation for customer
            interaction.
          </p>

          <div className={style.techStack}>
            <span>Html</span>
            <span>CSS</span>
            <span>Bootstrap</span>
          </div>

          <div className={style.buttons}>
            <a
              href="https://sweetdelightswebsite.netlify.app/"
              className={style.customBtn}
            >
              <HiOutlineExternalLink />
              Live Demo
            </a>
            <a
              href="https://github.com/SurajMishra08/BakeryWebsite"
              className={style.customBtn}
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
