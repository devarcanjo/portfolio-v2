import { GradientBtn } from "../GradientBtn";
import { GradientText } from "../GradientText";
import about from "../../img/about.png";
import { VictorStyled } from "./styles";

export const Victor = () => {
  return (
    <VictorStyled className="section-spacing">
      <img src={about} alt="foto" />
      <article>
        <section>
          <p className="victor-txt">Olá mundo, eu sou</p>
          <GradientText text="Victor Arcanjo" classes="victor-name" />
          <p className="victor-txt">Desenvolvedor Full Stack</p>
        </section>
        <a
          href="https://www.linkedin.com/in/victorarcanjo/"
          target="_blank"
          rel="noreferrer"
          data-testid="victor-linkedin-link"
        >
          <GradientBtn text={"Saiba mais"} />
        </a>
      </article>
    </VictorStyled>
  );
};
