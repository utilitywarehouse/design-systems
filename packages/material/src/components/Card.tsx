import {
  BackdropLevel,
  Theme as CustomerUITheme,
  CardVariant,
} from "@utilitywarehouse/customer-ui-theme";
import React from "react";
import { BackgroundContext, Box, BoxProps, makeStyles, Theme } from "..";
import withBackground from "../hocs/withBackground";
import clsx from "clsx";

export interface CardProps extends BoxProps {
  variant?: CardVariant;
}

interface InternalCardProps extends CardProps {
  backgroundColor?: BackdropLevel;
}

interface StyleProps {
  theme: CustomerUITheme;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    ...props.theme.components.card.opaque.mobile,
    [theme.breakpoints.up("tablet")]: {
      ...props.theme.components.card.opaque.tablet,
    },
    [theme.breakpoints.up("desktop")]: {
      ...props.theme.components.card.opaque.desktop,
    },
  }),
  rootTransparent: (props) => ({
    ...props.theme.components.card.transparent.mobile,
    [theme.breakpoints.up("tablet")]: {
      ...props.theme.components.card.transparent.tablet,
    },
    [theme.breakpoints.up("desktop")]: {
      ...props.theme.components.card.transparent.desktop,
    },
  }),
}));

const CardComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  InternalCardProps
> = ({ children, className, variant, ...props }, ref) => {
  const { theme } = React.useContext(BackgroundContext);
  const classes = useStyles({ theme });
  const rootClass = variant === "transparent" ? "rootTransparent" : "root";

  return (
    <Box className={clsx(classes[rootClass], className)} {...props} ref={ref}>
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
    if (props.variant === "transparent") {
      return backdropLevel;
    }

    switch (backdropLevel) {
      case "level0":
      case "level1":
      case "level2":
      case "level3":
      case "level4":
        return "level5";

      case "level5":
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
