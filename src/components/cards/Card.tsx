import React from "react";

import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import clsx from "clsx";
interface CardProps {
  card?: object;
  optionalClassBox?: string | null;
  optionalClassCard?: string | null;
  borderRadiusClass?: string;
}

var useStyles = makeStyles({
  boxContainer: {
    margin: "20px",
    textAlign: "left",
  }
});

export const CardComponent: React.FC<CardProps> = ({
  card,
  optionalClassBox,
  optionalClassCard,
  borderRadiusClass,
}) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.boxContainer, optionalClassBox)}>
      <Card className={clsx(borderRadiusClass, optionalClassCard)}>{card}</Card>
    </Box>
  );
};
