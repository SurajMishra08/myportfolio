import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import pythonLogo from "../assets/python.png";
import djangoLogo from "../assets/django.png";
import vscodeLogo from "../assets/vscode.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import bootstrapLogo from "../assets/bootstrap.png";
import reactLogo from "../assets/react.png";
import styles from "./Skills.module.css";
const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>
      <p className={styles.description}>
        <span>Tools I work with</span> <br />A versatile stack covering modern
        frontend, backend, and design tools.
      </p>

      {/* FRONTEND */}
      <h3 className={styles.sectionHeading}>FRONTEND</h3>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src={htmlLogo} alt="HTML" />
          <h4>HTML</h4>
        </div>
        <div className={styles.card}>
          <img src={cssLogo} alt="CSS" />
          <h4>CSS</h4>
        </div>
        <div className={styles.card}>
          <img src={jsLogo} alt="JavaScript" />
          <h4>JAVASCRIPT</h4>
        </div>
        <div className={styles.card}>
          <img src={bootstrapLogo} alt="Bootstrap" />
          <h4>BOOTSTRAP</h4>
        </div>
        <div className={styles.card}>
          <img src={reactLogo} alt="React" />
          <h4>REACT</h4>
        </div>
      </div>

      {/* BACKEND */}
      <h3 className={styles.sectionHeading}>BACKEND</h3>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src={pythonLogo} alt="Python" />
          <h4>PYTHON</h4>
        </div>
        <div className={styles.card}>
          <img src={djangoLogo} alt="Django" />
          <h4>DJANGO</h4>
        </div>
      </div>

      {/* TOOLS */}
      <h3 className={styles.sectionHeading}>TOOLS</h3>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src={vscodeLogo} alt="VS Code" />
          <h4>VS CODE</h4>
        </div>
        <div className={styles.card}>
          <img src={gitLogo} alt="Git" />
          <h4>GIT</h4>
        </div>
        <div className={styles.card}>
          <img src={githubLogo} alt="GitHub" />
          <h4>GIT HUB</h4>
        </div>
      </div>
    </section>
  );
};

export default Skills;
