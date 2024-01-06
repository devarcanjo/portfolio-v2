import { HeaderSpacing, HeaderDesktop } from "./styles";
import reactIcon from "../../img/react-icon.png";
import githubIcon from "../../img/github-icon.png";
import linkedinIcon from "../../img/linkedin-icon.png";

export const Header = () => {
  return (
    <>
      <HeaderDesktop>
        <div>
          <a href="#home" className="logo">
            <img className="react-icon" src={reactIcon} alt="icone do react" />
          </a>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">Sobre</a>
            <a href="#technologies">Tecnologias</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </nav>
          <section className="social-media">
            <a
              href="https://github.com/devarcanjo"
              target="_blank"
              rel="noreferrer"
              data-testid="header-github-link"
            >
              <img src={githubIcon} alt="icone do github" />
            </a>
            <a
              href="https://www.linkedin.com/in/victorarcanjo/"
              target="_blank"
              rel="noreferrer"
              data-testid="header-linkedin-link"
            >
              <img src={linkedinIcon} alt="icone do linkedin" />
            </a>
          </section>
        </div>
      </HeaderDesktop>
      <HeaderSpacing id="home" />
    </>
  );
};
