import React from 'react';

import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
    boxContainer: {
      margin: "20px",
      textAlign: "left",
    },
    cardContainer: {
        borderRadius: "10px !important" 
    }
  });

const card = (
  <React.Fragment>
    <CardContent>
        <Typography variant="subtitle1">Your Number</Typography>
        <Typography sx={{mb: 2}} variant="h3" component="h3">9999</Typography>
        <Typography variant="subtitle1">Your Queue</Typography>
        <Typography sx={{mb: 2}} variant="h3" component="h3">Name of Queue</Typography>
        <Typography variant="subtitle1">Average waiting time</Typography>
        <Typography sx={{mb: 2}} variant="h3" component="h3">8 minutes</Typography>
        <Typography variant="subtitle1">Waiting since</Typography>
        <Typography variant="h3" component="h3">14:34</Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
    const classes = useStyles();
  return (
    <Box className={classes.boxContainer}>
      <Card className={classes.cardContainer}>{card}</Card>
    </Box>
  );
}