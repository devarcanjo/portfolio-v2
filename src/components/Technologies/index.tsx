import StyledTechnologies from "./styles";
import { SectionDivider } from "../SectionDivider";
import { GradientText } from "../GradientText";
import { TechIcon } from "../TechIcon";

interface techProps {
  text: string;
  icon: React.ElementType;
  doc: string;
}

interface technologiesProps {
  tech: techProps[];
}

export const Technologies = ({ tech }: technologiesProps) => {
  return (
    <StyledTechnologies id="technologies" className="section-spacing">
      <SectionDivider />
      <GradientText text="Tecnologias" classes="tech-heading" />
      <section>
        {tech.map((tech) => (
          <TechIcon
            key={tech.text}
            text={tech.text}
            Icon={tech.icon}
            doc={tech.doc}
          />
        ))}
      </section>
    </StyledTechnologies>
  );
};
