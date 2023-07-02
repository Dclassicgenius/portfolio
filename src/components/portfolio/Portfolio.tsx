import "./portfolio.css";
import DrimMovie from "../../assets/drim-movie.png";
import DrimNote from "../../assets/drim-note.png";

const portfolios = [
  {
    repo: "https://github.com/Dclassicgenius/Drim-Movie",
    demo: "https://drim-movie.netlify.app",
    title: "Drim Movie",
    image: `${DrimMovie}`,
  },
  {
    repo: "https://github.com/Dclassicgenius/DrimNote",
    demo: "https://drim-note.netlify.app/",
    title: "Drim Note",
    image: `${DrimNote}`,
  },
  {
    repo: "https://github.com/Dclassicgenius/Drim-Movie",
    demo: "https://drim-movie.netlify.app",
    title: "Drim Movie",
    image: `${DrimMovie}`,
  },
  {
    repo: "https://github.com/Dclassicgenius/DrimNote",
    demo: "https://drim-note.netlify.app/",
    title: "Drim Note",
    image: `${DrimNote}`,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio </h2>
      <div className="container portfolio__container">
        {portfolios.map((portfolio, index) => (
          <article className="portfolio__item" key={index}>
            <figure className="portfolio__item-image">
              <img src={portfolio.image} alt={portfolio.title} />
            </figure>

            <h3>{portfolio.title}</h3>
            <div className="portfolio__item-cta">
              <a href={portfolio.repo} className="btn" target="_blank">
                Github
              </a>
              <a
                href={portfolio.demo}
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
