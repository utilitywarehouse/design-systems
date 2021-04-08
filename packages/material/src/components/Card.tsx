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
    ...props.theme.components.card.mobile,
    [theme.breakpoints.up("tablet")]: {
      ...props.theme.components.card.tablet,
    },
    [theme.breakpoints.up("desktop")]: {
      ...props.theme.components.card.desktop,
    },
  }),
}));

const CardComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CardProps
> = ({ children, className, ...props }, ref) => {
  const { theme } = React.useContext(BackgroundContext);
  const classes = useStyles({ theme });
  return (
    <Box className={clsx(classes.root, className)} {...props} ref={ref}>
      {children}
    </Box>
  );
};

const CardWithBackground = withBackground(
  React.forwardRef(CardComponent),
  "level4"
);

const Card: React.ForwardRefRenderFunction<HTMLDivElement, CardProps> = (
  props,
  ref
) => {
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

  return (
    <CardWithBackground
      backgroundColor={backgroundColor}
      {...props}
      ref={ref}
    />
  );
};

export default React.forwardRef(Card);
