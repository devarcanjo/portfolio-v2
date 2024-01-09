import React from "react";
import StyledTechIcon from "./styles";

interface TechIconPros {
  text: string;
  Icon: React.ElementType;
  doc: string;
}

export const TechIcon = ({ text, Icon, doc }: TechIconPros) => {
  return (
    <StyledTechIcon href={doc} target="_blank" rel="noreferrer">
      <Icon className="icon" />
      <p>{text}</p>
    </StyledTechIcon>
  );
};
