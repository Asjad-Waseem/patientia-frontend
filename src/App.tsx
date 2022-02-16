import React from "react";
import "assets/css/App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Link,
  LinkProps,
} from "react-router-dom";

import { Routes as PatientiaRoutes } from "utils/Routes";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";

import LandingPage from "pages/landing-page/LandingPage";

const LinkBehavior = React.forwardRef<
  any,
  Omit<LinkProps, "to"> & { href: LinkProps["to"] }
>(({ href, ...other }, ref) => (
  // Map href (MUI) -> to (react-router)
  <Link ref={ref} to={href} {...other} />
));

const headerFontFamily = "IBM Plex Mono, sans-serif";
const subHeadingFontFamily = "Plus Jakarta Sans";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#333333",
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
    },
    typography: {
      h1: {
        fontFamily: headerFontFamily,
        fontSize: 60,
        fontWeight: 700,
      },
      h2: {
        fontFamily: subHeadingFontFamily,
        fontSize: 32,
        fontWeight: 400,
      },
      h3: {
        fontFamily: subHeadingFontFamily,
        fontSize: 28,
        fontWeight: 700,
      },
      subtitle1: {
        fontFamily: subHeadingFontFamily,
        fontSize: 20,
        fontWeight: 400,
      },
      overline: {
        fontFamily: headerFontFamily,
        fontSize: 16,
        fontWeight: 400,
      },
    },
  })
);

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={PatientiaRoutes.landing} element={<LandingPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
