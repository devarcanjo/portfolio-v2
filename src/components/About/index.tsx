import { GradientText } from "../GradientText";
import { SectionDivider } from "../SectionDivider";
import { AboutStyled } from "./styles";

export const About = () => {
  return (
    <AboutStyled id="about" className="section-spacing">
      <SectionDivider />
      <GradientText text="Sobre" classes="about-heading" />
      <section className="about-txt">
        <p>
          Tenho 31 anos, sou nascido e criado em São Paulo Sou uma pessoa muito
          caseira, escuto todo tipo de música, mas gosto principalmente de rock.
          Adoro jogar, assistir filmes e séries (principalmente fantasia
          medieval), ler livros e claro, programar.
        </p>
        <p>
          Sou um desenvolvedor web full stack com experiência profissional em
          front end e Back end. Tenho conhecimento sólido na criação de sites
          responsivos, sistemas web, integrações.
        </p>
        <p>
          Além disso, trago um toque de bom humor, colaboração e gosto por
          compartilhar conhecimento e ideias de aprimoramento. Sou entusiasta de
          tecnologia e estou sempre empolgado em aprimorar meus conhecimentos na
          área.
        </p>
      </section>
    </AboutStyled>
  );
};
