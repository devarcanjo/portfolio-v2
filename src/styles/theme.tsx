import  { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from '../themes/default';
import GlobalStyles from "./globals";

interface ThemeProps {
  children: ReactNode;
}

export const Theme = ({ children }: ThemeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};


