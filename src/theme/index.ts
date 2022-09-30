import { PaletteMode } from "@mui/material";
import { createTheme, Theme } from "@mui/material/styles";

import {
  error,
  grey,
  primary,
  secondary,
  secondaryDark,
  success,
  warning,
  text,
  textDark,
  greyDark,
} from "./color";

const fontSize = 14;

const fontFamily = [
  // "Open Sans",
  "Montserrat",
  // "-apple-system",
  // "BlinkMacSystemFont",
  // "Segoe UI",
  // "Oxygen",
  // "Ubuntu",
  // "Cantarell",
  // "Fira Sans",
  // "Droid Sans",
  // "Helvetica Neue",
  // "sans-serif",
].join(",");

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

// Create a theme instance.
const bazarTheme = createTheme({
  palette: {
    primary: {
      ...primary,
      light: "white",
    },
    mode: "dark",
    secondary,
    error,
    info: {
      main: "#333",
      100: "#ccc",
      200: "#999",
      300: "#666",
    },
    warning,
    success,
    text: {
      primary: grey[900],
      secondary: grey[800],
      disabled: grey[400],
    },
    divider: grey[200],
    grey: { ...grey },
    background: {
      default: grey[100],
    },
  },
  typography: {
    fontSize,
    fontFamily,
    htmlFontSize: 16,
    body1: { fontSize },
    body2: { fontSize },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ul: {
          margin: 0,
          padding: 0,
          listStyle: "none",
        },
        p: {
          lineHeight: 1.75,
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
        button: {
          fontFamily,
          fontSize,
        },
        ".MuiRating-sizeSmall": {
          fontSize: "20px",
        },
        "#nprogress .bar": {
          position: "fixed",
          top: 0,
          left: 0,
          height: "3px !important",
          borderRadius: "0px 300px 300px 0px !important",
          zIndex: 1031,
          background: `${primary[500]} !important`,
          overflow: "hidden",
        },
        "#nprogress .peg": {
          boxShadow: `0 0 10px ${primary[500]}, 0 0 5px ${primary[500]} !important`,
        },
      },
    },
    MuiPagination: {
      defaultProps: {
        variant: "outlined",
        color: "primary",
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
        variant: "outlined",
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textTransform: "capitalize",
          minWidth: 0,
          minHeight: 0,
        },
      },
      defaultProps: {
        color: "inherit",
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          [customTheme.breakpoints.up("sm")]: {
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 8,
        },
      },
    },
  },
});

export const getDesignTokens = (mode: any) => ({
  palette: {
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            ...primary,
            light: "white",
          },
          secondary,
          error,
          info: {
            main: "#666",
            200: "#fff",
          },
          warning,
          success,
          text,
          divider: grey[200],
          grey: { ...grey },
          background: {
            default: grey[100],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            ...primary,
            light: "black",
          },
          secondary: secondaryDark,
          error,
          info: {
            main: "#f5f5f5",
            100: "#ccc",
            200: "#fff",
            300: "#666",
          },
          warning,
          success,
          text: textDark,
          divider: greyDark[200],
          grey: { ...greyDark },
          background: {
            default: greyDark[100],
          },
        }),
    mode,
  },
  typography: { ...bazarTheme.typography },
  components: { ...bazarTheme.components },
});

export type MuiThemeProps = Theme;
