import React from 'react';

import { makeStyles } from "@mui/styles";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import clsx from 'clsx';
interface CardProps {
    card?: object,
    optionalClass?: any
}

var useStyles = makeStyles({
    boxContainer: {
      margin: "20px",
      textAlign: "left",
    },
    cardContainer: {
        borderRadius: "10px !important" 
    }
  });

    export const CardComponent: React.FC<CardProps> = ( { card, optionalClass } ) => {
    
    const classes = useStyles();
  return (
    <Box className={clsx(classes.boxContainer, optionalClass)}>
      <Card className={classes.cardContainer}>{card}</Card>
    </Box>
  );
}
