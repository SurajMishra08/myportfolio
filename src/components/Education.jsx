import { FaGraduationCap } from "react-icons/fa";
import style from "./Education.module.css";
const Education = () => {
  return (
    <section id="education" className={style.education}>
      <h2 className={style.title}>EDUCATION</h2>

      <div className={style.eduContainer}>
        <div className={style.eduCard}>
          <div className={style.icon}>
            <FaGraduationCap />
          </div>
          <div className={style.eduContent}>
            <div className={style.eduHeader}>
              <h3>Secondary School (10th)</h3>
              <span className={style.score}>88.6%</span>
            </div>
            <p className={style.school}>
              SANGAM INTERNATIONAL SCHOOL, PRATAPGARH (CBSE)
            </p>
            <p className={style.year}>2019 - 2020</p>
          </div>
        </div>

        <div className={style.eduCard}>
          <div className={style.icon}>
            <FaGraduationCap />
          </div>
          <div className={style.eduContent}>
            <div className={style.eduHeader}>
              <h3>Higher Secondary (12th)</h3>
              <span className={style.score}>77.4%</span>
            </div>
            <p className={style.school}>
              SANGAM INTERNATIONAL SCHOOL, PRATAPGARH (CBSE)
            </p>
            <p className={style.year}>2021 - 2022</p>
          </div>
        </div>

        <div className={style.eduCard}>
          <div className={style.icon}>
            <FaGraduationCap />
          </div>
          <div className={style.eduContent}>
            <div className={style.eduHeader}>
              <h3>Graduation</h3>
              <span className={style.score}>8.5 CGPA</span>
            </div>
            <p className={style.school}>
              DR. A.P.J. ABDUL KALAM TECHNICAL UNIVERSITY, LUCKNOW
            </p>
            <p className={style.year}>2022 – 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
