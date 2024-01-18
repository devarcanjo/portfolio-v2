import { StyledFooter } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Feito com <span className="tech">React</span>,{" "}
        <span className="tech">Styled components</span> e 💜
      </p>
      <p>©Victor Arcanjo</p>
    </StyledFooter>
  );
};

