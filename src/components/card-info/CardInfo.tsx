import React from "react";

import { Typography } from "@mui/material";

interface CardInfoProps {
    infoHeading: string | null;
    infoValue: string;
    infoValueColor?: string;
    marginBottom?: number;
}
  
export const CardInfo: React.FC<CardInfoProps> = ( { infoHeading, infoValue, infoValueColor, marginBottom } ) => {

  return (
    <>
    <Typography variant="subtitle1">{infoHeading}</Typography>
    <Typography sx={{mb: marginBottom, color: infoValueColor}} variant="h3" component="h3">{infoValue}</Typography>
    </>
  );
};

export default CardInfo;
