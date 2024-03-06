import portfolioImg from "../img/portfolio.png";
import netflixClone from "../img/netflixclone.png";

export const projects = [
  {
    image: portfolioImg,
    technologies: ["ReactJs", "React Hooks", "Styled components", "RTL"],
    githubLink: "https://github.com/devarcanjo/portfolio-v2",
    deployLink: "https://victorarcanjo.vercel.app/",
    description: `Meu portfolio, onde falo um pouco sobre eu mesmo e as tecnologias que conheço (esse site que você está utilizando)`,
  },
  {
    image: netflixClone,
    technologies: ["ReactJs", "Redux ", "Sass (grid & flexbox)", "Swiper JS"],
    githubLink: "https://github.com/devarcanjo/netflixClone",
    deployLink: "https://vercel.com/devarcanjo/netflix-clone",
    description:
      "Explore este clone do Netflix, uma aplicação que captura a essência do serviço original com ReactJs, Redux e estilos flexíveis com Sass.",
  },
];
