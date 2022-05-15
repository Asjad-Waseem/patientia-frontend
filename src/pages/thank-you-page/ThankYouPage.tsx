import React from "react";

import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

import { CommonStyle } from "utils/CommonStyle";
import { LocaleEnglish, LocaleGerman } from "utils/LocaleEn";

import { ToggleButtonComponent } from 'components/toggle-button/ToggleButton';

import Patientia_Logo from 'assets/images/patientia/Patientia_Logo.png';
import Patientia_Logo_White from 'assets/images/patientia/Patientia2_White_Logo.png';

import { useAppSelector } from 'redux/hooks';
import { darkMode, language } from 'redux/slices/landing/landingSlice';

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
    justifyContent: "center"
},
headerContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "30px"
},
patientiaLogo: {
    height: "93px",
    width: "85px"
}
});

export const ThankYouPage: React.FC = () => {

  const darkModeStatus = useAppSelector(darkMode);
  const currentLanguageSelected = useAppSelector(language);

  const classes = useStyles();

  return (
    <div className={classes.landingPage} style={!darkModeStatus ? {background: "#e9e8f1"} : {background: "rgba(32,32,32)"}}>

        <div className={classes.landingHeader}>
        <img className={classes.patientiaLogo} src={ !darkModeStatus ? Patientia_Logo : Patientia_Logo_White } alt="patientia-logo" />
        <div className={classes.headerContainer}>
        <Typography variant="h1" component="h1" style={!darkModeStatus ? {color: "#000000"} : {color: "#ffffff"}}> { currentLanguageSelected === "English" ? LocaleEnglish.landing.heading : LocaleGerman.landing.heading }</Typography>
        <Typography variant="h2" component="h2" style={!darkModeStatus ? {color: "#000000"} : {color: "#ffffff"}}>{ currentLanguageSelected === "English" ? LocaleEnglish.landing.subHeading : LocaleGerman.landing.subHeading }</Typography>
        </div>

        </div>

        <ToggleButtonComponent />

        <Typography variant="h3" component="h3" style={!darkModeStatus ? {color: "#000000", marginTop: "150px", marginBottom: "15px"} : {color: "#ffffff", marginTop: "150px", marginBottom: "15px"}}>{ currentLanguageSelected === "English" ? LocaleEnglish.thankYou.thankYouLine1 : LocaleGerman.thankYou.thankYouLine1 }</Typography>
        <Typography variant="subtitle1" style={!darkModeStatus ? {color: "#000000"} : {color: "#ffffff"}}>{ currentLanguageSelected === "English" ? LocaleEnglish.thankYou.thankYouLine2 : LocaleGerman.thankYou.thankYouLine2 }</Typography>
    </div>
  );
};

export default ThankYouPage;
