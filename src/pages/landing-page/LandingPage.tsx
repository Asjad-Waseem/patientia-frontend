import React from "react";

import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

import { CommonStyle } from "utils/CommonStyle";

import Card from 'components/cards/Card';

import Patientia_Logo from 'assets/images/patientia/Patientia_Logo.png';

const useStyles = makeStyles({
  landingPage: {
    ...CommonStyle.page,
    position: "relative",
    textAlign: "center",
    paddingTop: "20px"  
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
    marginLeft: "50px"
},
patientiaLogo: {
    height: "93px",
    width: "85px"
}
});

export const LandingPage: React.FC = () => {

  const classes = useStyles();

  return (
    <div className={classes.landingPage}>

        <div className={classes.landingHeader}>
        <img className={classes.patientiaLogo} src={Patientia_Logo} alt="patientia-logo" />
        <div className={classes.headerContainer}>
        <Typography variant="h1" component="h1">Patientia</Typography>
        <Typography variant="h2" component="h2">Mobile Waiting</Typography>
        </div>
        </div>

        <Card />

    </div>
  );
};

export default LandingPage;
