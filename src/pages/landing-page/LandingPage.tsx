import React, { useEffect } from "react";

import axios from "axios";

import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

import { CommonStyle } from "utils/CommonStyle";
import { LocaleEnglish, LocaleGerman } from "utils/LocaleEn";

import { ToggleButtonComponent } from "components/toggle-button/ToggleButton";
import { Content } from "components/content/Content";

import Patientia_Logo from "assets/images/patientia/Patientia_Logo.png";
import Patientia_Logo_White from "assets/images/patientia/Patientia2_White_Logo.png";

import { useAppSelector, useAppDispatch } from "redux/hooks";
import { darkMode, language, updateUserInfo } from "redux/slices/landing/landingSlice";

const useStyles = makeStyles({
  landingPage: {
    ...CommonStyle.page,
    position: "relative",
    textAlign: "center",
    paddingTop: "40px",
  },
  landingHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "30px",
  },
  patientiaLogo: {
    height: "93px",
    width: "85px",
  },
});

export const LandingPage: React.FC = () => {
  const darkModeStatus = useAppSelector(darkMode);
  const currentLanguage = useAppSelector(language);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const axiosData = async () => {
      const response = await axios(
        "localhost:5000/api/Patientia/update?kID=1&pin=AB7B"
      );
      dispatch(updateUserInfo(response.data));
    };
    axiosData();
  }, [dispatch]);

  const classes = useStyles();

  return (
    <div
      className={classes.landingPage}
      style={
        !darkModeStatus
          ? { background: "#e9e8f1" }
          : { background: "rgba(32,32,32)" }
      }
    >
      <div className={classes.landingHeader}>
        <img
          className={classes.patientiaLogo}
          src={!darkModeStatus ? Patientia_Logo : Patientia_Logo_White}
          alt="patientia-logo"
        />
        <div className={classes.headerContainer}>
          <Typography
            variant="h1"
            component="h1"
            style={
              !darkModeStatus ? { color: "#000000" } : { color: "#ffffff" }
            }
          >
            {" "}
            {currentLanguage === "English"
              ? LocaleEnglish.landing.heading
              : LocaleGerman.landing.heading}
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            style={
              !darkModeStatus ? { color: "#000000" } : { color: "#ffffff" }
            }
          >
            {currentLanguage === "English"
              ? LocaleEnglish.landing.subHeading
              : LocaleGerman.landing.subHeading}
          </Typography>
        </div>
      </div>

      <ToggleButtonComponent />

      <Content />
    </div>
  );
};

export default LandingPage;
