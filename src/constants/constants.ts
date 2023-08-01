import drimbooks from "../assets/drimbooks.png";
import drimnotes from "../assets/drimnotes.png";
import drimmovies from "../assets/drimmovies.png";
import drimprompts from "../assets/drimprompts.png";
import drimtodo from "../assets/drimtodo.png";

export const frontendSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Material UI",
  "Typescript",
  "NextJS",
];

export const backendSkills = [
  "NodeJs",
  "Python",
  "MongoDB",
  "MySQL",
  "Django",
  "PostgreSQL",
  "ExpressJs",
];

export const projects = [
  {
    name: "Drim Movie",
    description:
      "Drim Movies is a web-based platform that uses the TMDB API to show movie catalogue. It allows for sort and filters based on genre, date, popularity, duration and so on. User can view trending, popular, free Movies and TV Shows, watch trailer of a particular movie or Tv Show, see actors, movies, and TV shows details.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Matrerial UI",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: drimmovies,
    source_code_link: "https://github.com/Dclassicgenius/Drim-Movie",
    livesiteURL: "https://drim-movie.netlify.app/",
  },

  {
    name: "Drim Books",
    description:
      "An E-Commerce website for buying books. Include features such as filter by latest or name, cart functionalities and user authentication.",
    tags: [
      {
        name: "Next.JS",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: drimbooks,
    source_code_link: "https://github.com/Dclassicgenius/drimbooks",
    livesiteURL: "https://drimbooks.vercel.app/",
  },

  {
    name: "Drim Prompts",
    description:
      "Web application for sharing AI prompts. Drimprompts lets you create, discover and share creative AI prompts in this beautiful world of AI.",
    tags: [
      {
        name: "Next.JS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: drimprompts,
    source_code_link: "https://github.com/Dclassicgenius/drimprompts",
    livesiteURL: "https://drimprompts.vercel.app/",
  },
  {
    name: "Drim Todo",
    description:
      "A todo app using Tailwind CSS and NextJS. Create and update tasks, check or delete tasks and switch between the light and dark theme.",
    tags: [
      {
        name: "Next.JS",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: drimtodo,
    source_code_link: "https://github.com/Dclassicgenius/fabrica-todo",
    livesiteURL: "https://drim-todo.vercel.app/",
  },
  {
    name: "Drim Notes",
    description:
      "A simple note app built using React, Bootstrap and Typescript. Write, update and delete notes, also user can sort or filter by name or tags given to various notes on creation.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: drimnotes,
    source_code_link: "https://github.com/Dclassicgenius/DrimNote",
    livesiteURL: "https://drim-note.netlify.app/",
  },
];
