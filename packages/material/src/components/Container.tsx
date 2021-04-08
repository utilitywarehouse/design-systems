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

// eslint-disable-next-line @typescript-eslint/ban-types
type ContainerProps = React.PropsWithChildren<{}>;

const Container: React.ForwardRefRenderFunction<
  HTMLDivElement,
  ContainerProps
> = ({ children }, ref) => {
  const classes = useStyles();
  return (
    <div ref={ref} className={classes.container}>
      {children}
    </div>
  );
};

export default React.forwardRef(Container);
