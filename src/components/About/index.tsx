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
          Com 31 anos de idade, sou um desenvolvedor web full stack com
          experiência profissional tanto no front end quanto no back end.
          Destaco-me na criação de sites responsivos, sistemas web e
          integrações, entregando soluções tecnológicas eficientes e inovadoras.
          Minha expertise abrange a concepção e implementação de projetos,
          sempre com foco na excelência e na adaptação às demandas do mercado.
        </p>
        <p>
          Com um mindset colaborativo, sou reconhecido por meu bom humor e pela
          disposição em compartilhar conhecimento e ideias de aprimoramento. A
          constante busca pelo aperfeiçoamento na área de tecnologia é uma
          característica marcante, refletindo meu entusiasmo em abraçar desafios
          e assimilar novas tendências do setor.
        </p>
        <p>
          Estou aberto a oportunidades que permitam aplicar minha experiência e
          habilidades em projetos desafiadores, contribuindo ativamente para o
          sucesso e a inovação no campo da tecnologia
        </p>
      </section>
    </AboutStyled>
  );
};
