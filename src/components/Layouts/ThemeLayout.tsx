import { createTheme, ThemeProvider } from "@mui/material";
import { FC } from "react";
import { ChildrenProps } from "../../models";
import { getDesignTokens } from "../../theme";

const ThemeLayout: FC<ChildrenProps> = ({ children }) => {
  const theme = createTheme(getDesignTokens("dark"));

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeLayout;
