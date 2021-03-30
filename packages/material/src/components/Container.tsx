import React from "react";
import { MuiTheme } from "../lib/theme";
import { useDeviceSize, makeStyles } from "..";
import { BackgroundContext } from "./Background";

interface StyleProps {
  maxWidth: number;
  offset: number;
}

const useStyles = makeStyles<MuiTheme, StyleProps>(() => ({
  root: {
    display: "block",
    width: "100%",
    margin: "0 auto",
    maxWidth: (props) => `${props.offset * 2 + props.maxWidth}px`,
  },
  container: {
    display: "block",
    width: "100%",
    padding: (props) => `0 ${props.offset}px`,
    margin: "0 auto",
    boxSizing: "border-box",
    maxWidth: (props) => `${props.maxWidth}px`,
  },
}));

const Container: React.FC = ({ children }) => {
  const { theme } = React.useContext(BackgroundContext);
  const deviceSize = useDeviceSize();
  let maxWidth: number;
  let offset: number;
  switch (deviceSize) {
    case "mobile":
      maxWidth = 343;
      offset = theme.spacing(2);
      break;

    case "tablet":
      maxWidth = 720;
      offset = theme.spacing(3);
      break;

    case "desktop":
      maxWidth = 1021;
      offset = theme.spacing(3);
      break;
  }

  const classes = useStyles({ maxWidth, offset });
  return <div className={classes.container}>{children}</div>;
};

export default Container;
