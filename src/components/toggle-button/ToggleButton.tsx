import React from "react";

import { makeStyles } from "@mui/styles";

import Switch from "react-switch";

import { useAppSelector, useAppDispatch } from "redux/hooks";
import { darkMode, updateDarkMode } from "redux/slices/landing/landingSlice";

interface ToggleButtonProps {}

var useStyles = makeStyles({
  reactSwitch: {
    float: "right",
    marginRight: "20px",
    marginTop: "-120px",
  },
});

export const ToggleButtonComponent: React.FC<ToggleButtonProps> = () => {
  const dispatch = useAppDispatch();
  const darkModeState = useAppSelector(darkMode);

  const classes = useStyles();

  return (
    <Switch
      checked={darkModeState}
      onChange={() => dispatch(updateDarkMode())}
      onColor="#ffffff"
      onHandleColor="#ffffff"
      handleDiameter={30}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={20}
      width={48}
      className={classes.reactSwitch}
      id="material-switch"
    />
  );
};
