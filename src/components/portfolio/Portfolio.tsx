import "./portfolio.css";
import { Tilt } from "react-tilt";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../../constants/constants";
import { useEffect } from "react";

const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const Portfolio = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio </h2>
      <div ref={ref} className="container portfolio__container">
        {projects.map((project, index) => (
          <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            initial="hidden"
            animate={controls}
            key={project.name}
          >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
              <motion.article className="portfolio__item">
                <figure className="portfolio__item-image">
                  <img src={project.image} alt={project.name} />
                </figure>

                <div className="portfolio__heading">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="portfolio__item-cta">
                  <a
                    href={project.source_code_link}
                    className="btn"
                    target="_blank"
                  >
                    Github
                  </a>
                  <a
                    href={project.livesiteURL}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </div>

                <div className="portfolio__tag">
                  {project.tags.map((tag) => (
                    <p
                      key={`${project.name}-${tag.name}`}
                      className={` ${tag.color}`}
                    >
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </motion.article>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
