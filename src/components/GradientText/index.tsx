import { GradientH1 } from "./styles";

interface GradientTextPros {
  text: string;
  classes: string;
}

export const GradientText = ({ text, classes }: GradientTextPros) => {
  return <GradientH1 className={classes}>{text}</GradientH1>;
};
