import { StyledProjects } from "./styles";
import { ProjectCard } from "../ProjectCard";
import projects from "../../data/projects";
import { SectionDivider } from "../SectionDivider";
import { GradientText } from "../GradientText";

export const Projects = () => {
  return (
    <StyledProjects id="projects" className="section-spacing">
      <SectionDivider />
      <GradientText text="Projetos" classes="project-heading" />
      <section className="cards">
        {projects.map((project) => (
          <ProjectCard
            key={project.deployLink}
            image={project.image}
            technologies={project.technologies}
            githubLink={project.githubLink}
            deployLink={project.deployLink}
            description={project.description}
          />
        ))}
      </section>
    </StyledProjects>
  );
};
