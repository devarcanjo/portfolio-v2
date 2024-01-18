import { GradientBtnStyled } from "./styles";

interface GradientBtnPros {
  text: string;
  disabled?: boolean;
  onClickFunc?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export const GradientBtn = ({
  text,
  disabled,
  onClickFunc,
}: GradientBtnPros) => {
  return (
    <GradientBtnStyled
      onClick={onClickFunc}
      disabled={disabled}
      className={disabled ? "disabled" : ""}
    >
      {text}
    </GradientBtnStyled>
  );
};
