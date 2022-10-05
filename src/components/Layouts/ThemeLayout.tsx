import { createTheme, ThemeProvider } from "@mui/material";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { ChildrenProps } from "../../models";
import { setMode } from "../../redux/slices/mode";
import { getDesignTokens } from "../../theme";

const ThemeLayout: FC<ChildrenProps> = ({ children }) => {
  const { mode } = useAppSelector((state) => state.mode);
  const dispatch = useAppDispatch();
  const theme = createTheme(getDesignTokens(mode || "light"));

  useEffect(() => {
    if (localStorage && localStorage.getItem("mode")) {
      dispatch(setMode(localStorage.getItem("mode")));
    }
  }, []);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeLayout;
