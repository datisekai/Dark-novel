import { createTheme, ThemeProvider } from "@mui/material";
import React, { FC } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import { ChildrenProps } from "../../models";
import { getDesignTokens } from "../../theme";

const ThemeLayout: FC<ChildrenProps> = ({ children }) => {
  const theme = createTheme(getDesignTokens("light"));

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeLayout;
