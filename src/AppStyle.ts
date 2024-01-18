import styled from "styled-components";

interface WrapperProps {
  isLarge: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  .section-spacing {
    margin-bottom: ${(props) => (props.isLarge ? "15vh" : "0")};
  }

  .section-spacing-about {
    margin-bottom: ${(props) => (props.isLarge ? "10vh" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: ${(props) => (props.isLarge ? "90vw" : "inherit")};
    margin: ${(props) => (props.isLarge ? "0 auto" : "0")};
  }
`;

export const TextSection = styled.section<WrapperProps>`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: ${(props) => (props.isLarge ? "inherit" : "90vw")};
    margin: ${(props) => (props.isLarge ? "0 auto" : "0")};
  }
`;
