import style from "./Achievements.module.css";
import { FaAward } from "react-icons/fa";
const Achievements = () => {
  return (
    <section id="achievements" className={style.certifications}>
      <h2 className={style.title}>CERTIFICATIONS</h2>

      <div className={style.certContainer}>
        <div className={style.certCard}>
          <div className={style.icon}>
            <FaAward />
          </div>
          <div className={style.certContent}>
            <h3>Frontend Developer Intern</h3>
            <p className={style.org}>IBM</p>
            <p className={style.year}>2025</p>
          </div>
        </div>

        <div className={style.certCard}>
          <div className={style.icon}>
            <FaAward />
          </div>
          <div className={style.certContent}>
            <h3>Full Stack Internship</h3>
            <p className={style.org}>SOFTPRO</p>
            <p className={style.year}>Oct 2025 – March 2026</p>
          </div>
        </div>

        <div className={style.certCard}>
          <div className={style.icon}>
            <FaAward />
          </div>
          <div className={style.certContent}>
            <h3>Artificial Intelligence and Machine Learning</h3>
            <p className={style.org}>Techkriti’25 at IIT Kanpur</p>
            <p className={style.year}>2025</p>
          </div>
        </div>
        <div className={style.certCard}>
          <div className={style.icon}>
            <FaAward />
          </div>
          <div className={style.certContent}>
            <h3>Summer Internship (Python with Django)</h3>
            <p className={style.org}>SOFTPRO INDIA</p>
            <p className={style.year}>2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
