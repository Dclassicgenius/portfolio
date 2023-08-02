import "./about.css";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsGlobe } from "react-icons/bs";
import ME from "../../assets/me2.jpeg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <figure className="about__me-image">
            <img src={ME} alt="About Image" />
          </figure>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <BsGlobe className="about__icon" />
              <h5>Web Development</h5>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p className="about__text">
            {" "}
            Driven and dedicated web developer with a strong foundation in
            front-end development. Passionate about creating engaging and
            user-friendly web applications using React, TypeScript, HTML, and
            CSS. Experience in collaborating with cross-functional teams to
            deliver high-quality software solutions. Solid understanding of
            modern web development principles and best practices. Strong
            problem-solving skills and a quick learner, always seeking
            opportunities to expand knowledge and stay up-to-date with the
            latest technologies. Committed to delivering clean, efficient, and
            maintainable code. Looking to contribute to a dynamic development
            team and make a positive impact in the world of web development.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
