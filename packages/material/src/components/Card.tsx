import {
  BackdropLevel,
  Theme as CustomerUITheme,
} from "@utilitywarehouse/customer-ui-theme";
import React from "react";
import { BackgroundContext, Box, BoxProps, makeStyles, Theme } from "..";
import withBackground from "../hocs/withBackground";
import clsx from "clsx";

interface CardProps extends BoxProps {
  backgroundColor?: BackdropLevel;
}
interface StyleProps {
  theme: CustomerUITheme;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    backgroundColor: props.theme.components.card.mobile.backgroundColor,
    borderRadius: props.theme.components.card.mobile.borderRadius,
    [theme.breakpoints.up("tablet")]: {
      backgroundColor: props.theme.components.card.tablet.backgroundColor,
      borderRadius: props.theme.components.card.tablet.borderRadius,
    },
    [theme.breakpoints.up("desktop")]: {
      backgroundColor: props.theme.components.card.desktop.backgroundColor,
      borderRadius: props.theme.components.card.desktop.borderRadius,
    },
  }),
  container: (props) => ({
    padding: props.theme.components.card.mobile.padding,
    [theme.breakpoints.up("tablet")]: {
      padding: props.theme.components.card.tablet.padding,
    },
    [theme.breakpoints.up("desktop")]: {
      padding: props.theme.components.card.desktop.padding,
    },
  }),
}));

const CardComponent: React.FunctionComponent<CardProps> = ({
  children,
  className,
  ...props
}) => {
  const { theme } = React.useContext(BackgroundContext);
  const classes = useStyles({ theme });
  return (
    <Box className={clsx(classes.root, className)} {...props}>
      <Box className={classes.container}>{children}</Box>
    </Box>
  );
};

const CardWithBackground = withBackground(CardComponent, "level4");

const Card: React.FunctionComponent<CardProps> = (props) => {
  const { theme } = React.useContext(BackgroundContext);
  const backdropLevel = theme.backdropLevel;
  const backgroundColor = React.useMemo(() => {
    switch (backdropLevel) {
      case "level0":
      case "level1":
      case "level2":
      case "level3":
        return "level4";

      case "level4":
        return "level1";
    }
  }, [backdropLevel]);

  return <CardWithBackground backgroundColor={backgroundColor} {...props} />;
};

export default Card;
