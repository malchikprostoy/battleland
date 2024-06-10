import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#181818",
    },
    secondary: {
      main: "#181818",
    },
    error: {
      main: red.A400,
    },
    contrast: {
      main: "#181818",
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

export default theme;
