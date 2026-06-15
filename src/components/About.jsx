import { FaPuzzlePiece, FaPlug, FaUsers, FaCode } from "react-icons/fa";
const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="abouttitle">About Me</h2>

      <p className="intro">
        I’m a Full Stack Developer passionate about creating modern, responsive,
        and user‑focused web applications. I enjoy building complete digital
        experiences using React, JavaScript, FastAPI, and modern backend
        technologies while combining clean design with efficient functionality.
      </p>

      <div className="cards">
        <div className="card">
          <div className="icon">
            <FaPuzzlePiece />
          </div>
          <h3>Problem Solving</h3>
          <p>Breaking down complex problems into elegant solutions.</p>
        </div>

        <div className="card">
          <div className="icon">
            <FaPlug />
          </div>
          <h3>API Integration</h3>
          <p>
            Connecting frontend applications with secure and efficient
            backend APIs for seamless data flow.
          </p>
        </div>

        <div className="card">
          <div className="icon">⚙️</div>
          <h3>End‑to‑End Development</h3>
          <p>Building complete web solutions from frontend to backend.</p>
        </div>
        <div className="card">
          <div className="icon">🧠</div>
          <h3>Continuous Learning</h3>
          <p>
            Staying updated with evolving technologies like React and Django.
            Exploring new tools and libraries.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <FaUsers />
          </div>
          <h3>Team Collaboration</h3>
          <p>
            Working effectively with cross‑functional teams to
            deliver projects on time.
          </p>
        </div>

        <div className="card">
          <div className="icon">
            <FaCode />
          </div>
          <h3>Clean Code</h3>
          <p>
            Writing maintainable, scalable, and
            readable code for long‑term projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
