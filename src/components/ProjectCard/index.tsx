import { ProjectCardStyled, TechSpan, Link } from "./stttyles";
import * as bsIcons from "react-icons/bs";
import * as mdIcons from "react-icons/md";

interface projectCardPros {
  image: string;
  technologies: string[];
  githubLink: string;
  deployLink: string;
  description: string;
}

const ProjectCard = ({
  image,
  technologies,
  githubLink,
  deployLink,
  description,
}: projectCardPros) => {
  return (
    <ProjectCardStyled>
      <img src={image} alt="project" />
      <section className="techs">
        {technologies.map((techText) => (
          <TechSpan key={techText}>{techText}</TechSpan>
        ))}
      </section>
      <article>
        <p>{description}</p>
      </article>
      <section className="links">
        <Link href={githubLink} target="_blank" rel="noreferrer">
          <bsIcons.BsGithub className="icon" />
          GitHub
        </Link>
        <Link href={deployLink} target="_blank" rel="noreferrer">
          <mdIcons.MdWeb className="icon" />
          Website
        </Link>
      </section>
    </ProjectCardStyled>
  );
};

export default ProjectCard;
