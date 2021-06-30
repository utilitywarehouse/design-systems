import React from "react";
import { MuiTheme } from "../lib/theme";
import { BoxProps, makeStyles, Theme } from "..";
import { Box } from "@material-ui/core";
import { clsx } from "../utils";

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

interface ContainerProps extends BoxProps {
  forwardedRef?: React.Ref<unknown>;
}

const Container: React.FunctionComponent<ContainerProps> = ({
  children,
  className,
  forwardedRef,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Box
      ref={forwardedRef}
      className={clsx(classes.container, className)}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Container;
