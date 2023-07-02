import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>patamaechi1@gmail.com</h5>
            <a href="mailto:patamaechi1@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BiLogoTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@noblehomme</h5>
            <a href="https://t.me/noblehomme" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            required
            rows={7}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
