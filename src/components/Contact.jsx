import style from "./Contact.module.css";
import {
  FaWhatsapp,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTelegram,
} from "react-icons/fa";
const Contact = () => {
  return (
    <section id="contact" className={style.contact}>
      <h2 className={style.title}>CONTACT ME</h2>

      <div className={style.circleLayout}>
        <div
          className={`${style.iconWrapper} ${style.whatsapp}`}
          onClick={() => (window.location.href = "https://wa.me/917571096345")}
        >
          <FaWhatsapp className={style.icon} />
        </div>
        <div
          className={`${style.iconWrapper} ${style.github}`}
          onClick={() =>
            (window.location.href = "https://github.com/SurajMishra08")
          }
        >
          <FaGithub className={style.icon} />
        </div>
        <div
          className={`${style.iconWrapper} ${style.email}`}
          onClick={() =>
            (window.location.href = "mailto:surajmishra75710963@gmail.com")
          }
        >
          <FaEnvelope className={style.icon} />
        </div>
        <div
          className={`${style.iconWrapper} ${style.location}`}
          onClick={() =>
            (window.location.href =
              "https://www.google.com/maps/place/Pratapgarh,+Uttar+Pradesh")
          }
        >
          <FaMapMarkerAlt className={style.icon} />
        </div>
        <div
          className={`${style.iconWrapper} ${style.linkedin}`}
          onClick={() =>
            (window.location.href = "https://www.linkedin.com/in/suraj7571")
          }
        >
          <FaLinkedin className={style.icon} />
        </div>
        <div
          className={`${style.iconWrapper} ${style.telegram}`}
          onClick={() => (window.location.href = "https://t.me/Suraj_Mishra08")}
        >
          <FaTelegram className={style.icon} />
        </div>
      </div>
      <form
        action="https://formspree.io/f/xnjywlln"
        method="POST"
        className={style.form}
        onSubmit={() => alert("Message sent successfully!")}
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className={style.btnSend}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
