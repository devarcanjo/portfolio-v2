import StyledTechnologies from "./styles";
import { SectionDivider } from "../SectionDivider";
import { GradientText } from "../GradientText";
import { TechIcon } from "../TechIcon";
import data from "../../data/techs";

export const Technologies = () => {
  return (
    <StyledTechnologies id="technologies" className="section-spacing">
      <SectionDivider />
      <GradientText text="Tecnologias" classes="tech-heading" />
      <section>
        {data.map((tech) => (
          <TechIcon
            key={tech.text}
            text={tech.text}
            Icon={tech.Icon}
            doc={tech.doc}
          />
        ))}
      </section>
    </StyledTechnologies>
  );
};
