import { createMuiTheme } from "@material-ui/core/styles";
const eBlue = "#0B72B9";
const eOrange = "#FFBA60";
const eGrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      blue: eBlue,
      orange: eOrange,
    },
    primary: {
      main: eBlue,
    },
    secondary: {
      main: eOrange,
    },
  },
  typography: {
    h1: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: "#fff",
      lineHeight: 1.5,
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1.2rem",
      color: eBlue,
      lineHeight: 1.2,
    },
    body1: {
      fontFamily: "Raleway",
      fontSize: "1.2rem",
      color: eGrey,
      fontWeight: 700,
    },
    body2: {
      fontFamily: "Pacifico",
      fontWeight: 500,
      fontSize: "1.5rem",
      color: eOrange,
      lineHeight: 1,
    },
  },
  overrides: {
    MuiCardMedia: {
      root: {
        backgroundSize: "contain",
      },
    },
    MuiFormLabel: {
      root: {
        color: "#fff",
      },
    },
    MuiSelect: {
      icon: {
        color: "#fff",
      },
      select: {
        "&:focus": {
          backgroundColor: "transparent",
        },
      },
    },
  },
});
