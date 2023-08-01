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

          <p>
            {" "}
            I'm a skilled software developer with experience in TypeScript and
            JavaScript and expertise in frameworks and libraries like React,
            Next.JS, Node.JS, Django. I'm a quick learner and collaborate
            closely with clients to create efficient, scalable, and
            user-friendly solutions that solve real-world problems. Let's work
            together to bring your ideas to life!
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
