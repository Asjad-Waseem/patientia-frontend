import React from "react";

import { makeStyles } from "@mui/styles";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import clsx from "clsx";
interface CardProps {
  card?: object;
  optionalClass?: string | null;
  borderRadiusClass?: string | undefined;
}

var useStyles = makeStyles({
  boxContainer: {
    margin: "20px",
    textAlign: "left",
  },
});

export const CardComponent: React.FC<CardProps> = ({
  card,
  optionalClass,
  borderRadiusClass,
}) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.boxContainer, optionalClass)}>
      <Card className={borderRadiusClass}>{card}</Card>
    </Box>
  );
};
