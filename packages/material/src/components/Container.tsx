import React from "react";
import { MuiTheme } from "../lib/theme";
import { makeStyles, Theme } from "..";

const useStyles = makeStyles<MuiTheme>((theme: Theme) => ({
  container: {
    display: "block",
    width: "100%",
    padding: `0 ${theme.spacing(2)}`,
    margin: "0 auto",
    boxSizing: "border-box",
    maxWidth: `calc(343px + ${theme.spacing(4)})`,
    [theme.breakpoints.up("tablet")]: {
      maxWidth: `calc(720px + ${theme.spacing(6)})`,
      padding: `0 ${theme.spacing(3)}`,
    },
    [theme.breakpoints.up("desktop")]: {
      maxWidth: `calc(1021px + ${theme.spacing(6)})`,
    },
  },
}));

const Container: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default Container;
