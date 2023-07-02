import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const frontendSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Material UI",
  "Bootstrap",
  "NextJS",
];

const backendSkills = [
  "NodeJs",
  "Python",
  "MongoDB",
  "MySQL",
  "Django",
  "PostgreSQL",
  "ExpressJs",
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skils</h5>
      <h2>Stack I use</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendSkills.map((skill) => (
              <article className="experience__details" key={skill}>
                <BsFillPatchCheckFill className="experience__detail-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendSkills.map((skill) => (
              <article className="experience__details" key={skill}>
                <BsFillPatchCheckFill className="experience__detail-icon" />
                <h4>{skill}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
