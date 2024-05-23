import { RaThemeOptions, defaultTheme } from "react-admin";
import indigo from "@mui/material/colors/indigo";
import red from "@mui/material/colors/red";
import { blue } from "@mui/material/colors";

export const DarkTheme: RaThemeOptions = {
  ...defaultTheme,
  palette: {
    mode: "dark",
    primary: blue,
    secondary: indigo,
    error: red,
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  components: {
    ...defaultTheme.components,
    MuiTextField: {
      defaultProps: {
        variant: "outlined" as const,
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: "outlined" as const,
      },
    },
  },
};

export const LightTheme = {
  ...defaultTheme,
  palette: {
    mode: "light",
    primary: blue,
    secondary: indigo,
    error: red,
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  components: {
    ...defaultTheme.components,
    MuiTextField: {
      defaultProps: {
        variant: "outlined" as const,
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: "outlined" as const,
      },
    },
  },
};
