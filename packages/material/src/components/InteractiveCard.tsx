import {
  BackdropLevel,
  Theme as CustomerUITheme,
  InteractiveCardSize,
  InteractiveCardVariant,
} from "@utilitywarehouse/customer-ui-theme";
import React from "react";
import {
  ButtonBase,
  Box,
  Typography,
  makeStyles,
  Theme,
  BackgroundContext,
  BoxProps,
} from "..";
import withBackground from "../hocs/withBackground";

export interface InteractiveCardProps
  extends React.ComponentPropsWithoutRef<"button"> {
  Background?: React.ComponentType;
  backgroundColor?: BackdropLevel;
  display?: BoxProps["display"];
  size?: InteractiveCardSize;
  variant?: InteractiveCardVariant;
}

interface StyleProps {
  theme: CustomerUITheme;
  rootHoverClass: string;
  size: InteractiveCardSize;
  variant: InteractiveCardVariant;
}

const useRootHoverStyles = makeStyles(() => ({
  rootHover: {},
}));

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  buttonBase: {
    width: "100%",
  },
  root: ({ size, variant, ...props }) => ({
    width: "100%",
    backgroundColor:
      props.theme.components.interactiveCard.mobile[variant][size].idle
        .backgroundColor,
    borderRadius:
      props.theme.components.interactiveCard.mobile[variant][size].idle
        .borderRadius,
    [theme.breakpoints.up("tablet")]: {
      backgroundColor:
        props.theme.components.interactiveCard.tablet[variant][size].idle
          .backgroundColor,
      borderRadius:
        props.theme.components.interactiveCard.tablet[variant][size].idle
          .borderRadius,
    },
    [theme.breakpoints.up("desktop")]: {
      backgroundColor:
        props.theme.components.interactiveCard.desktop[variant][size].idle
          .backgroundColor,
      borderRadius:
        props.theme.components.interactiveCard.desktop[variant][size].idle
          .borderRadius,
    },
    [`& .${props.rootHoverClass}`]: {
      backgroundColor:
        props.theme.components.interactiveCard.mobile[variant][size].idle
          .backgroundColor,
      transition:
        props.theme.components.interactiveCard.mobile[variant][size].idle
          .transition,
      transitionProperty:
        props.theme.components.interactiveCard.mobile[variant][size].idle
          .transitionProperty,
      [theme.breakpoints.up("tablet")]: {
        backgroundColor:
          props.theme.components.interactiveCard.tablet[variant][size].idle
            .backgroundColor,
        transition:
          props.theme.components.interactiveCard.tablet[variant][size].idle
            .transition,
        transitionProperty:
          props.theme.components.interactiveCard.tablet[variant][size].idle
            .transitionProperty,
      },
      [theme.breakpoints.up("desktop")]: {
        backgroundColor:
          props.theme.components.interactiveCard.desktop[variant][size].idle
            .backgroundColor,
        transition:
          props.theme.components.interactiveCard.desktop[variant][size].idle
            .transition,
        transitionProperty:
          props.theme.components.interactiveCard.desktop[variant][size].idle
            .transitionProperty,
      },
    },
    "&:hover": {
      borderRadius:
        props.theme.components.interactiveCard.mobile[variant][size].active
          .borderRadius,
      [theme.breakpoints.up("tablet")]: {
        borderRadius:
          props.theme.components.interactiveCard.tablet[variant][size].active
            .borderRadius,
      },
      [theme.breakpoints.up("desktop")]: {
        borderRadius:
          props.theme.components.interactiveCard.desktop[variant][size].active
            .borderRadius,
      },
      [`& .${props.rootHoverClass}`]: {
        transition:
          props.theme.components.interactiveCard.mobile[variant][size].active
            .transition,
        transitionProperty:
          props.theme.components.interactiveCard.mobile[variant][size].active
            .transitionProperty,
        backgroundColor:
          props.theme.components.interactiveCard.mobile[variant][size].active
            .backgroundColor,
        [theme.breakpoints.up("tablet")]: {
          transition:
            props.theme.components.interactiveCard.tablet[variant][size].active
              .transition,
          transitionProperty:
            props.theme.components.interactiveCard.tablet[variant][size].active
              .transitionProperty,
          backgroundColor:
            props.theme.components.interactiveCard.tablet[variant][size].active
              .backgroundColor,
        },
        [theme.breakpoints.up("desktop")]: {
          transition:
            props.theme.components.interactiveCard.desktop[variant][size].active
              .transition,
          transitionProperty:
            props.theme.components.interactiveCard.desktop[variant][size].active
              .transitionProperty,
          backgroundColor:
            props.theme.components.interactiveCard.desktop[variant][size].active
              .backgroundColor,
        },
      },
    },
  }),
  container: ({ size, variant, ...props }) => ({
    padding:
      props.theme.components.interactiveCard.mobile[variant][size].idle.padding,
    [theme.breakpoints.up("tablet")]: {
      padding:
        props.theme.components.interactiveCard.tablet[variant][size].idle
          .padding,
    },
    [theme.breakpoints.up("desktop")]: {
      padding:
        props.theme.components.interactiveCard.desktop[variant][size].idle
          .padding,
    },
    "&:hover": {
      padding:
        props.theme.components.interactiveCard.mobile[variant][size].active
          .padding,
      [theme.breakpoints.up("tablet")]: {
        padding:
          props.theme.components.interactiveCard.tablet[variant][size].active
            .padding,
      },
      [theme.breakpoints.up("desktop")]: {
        padding:
          props.theme.components.interactiveCard.desktop[variant][size].active
            .padding,
      },
    },
  }),
}));

const InteractiveCardComponent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  InteractiveCardProps
> = (
  {
    children,
    Background,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    backgroundColor,
    display,
    variant = "primary",
    size = "regular",
    ...props
  },
  ref
) => {
  const { theme } = React.useContext(BackgroundContext);
  const { rootHover: rootHoverClass } = useRootHoverStyles();
  const classes = useStyles({
    theme,
    rootHoverClass: `a${rootHoverClass}`,
    variant,
    size,
  });

  return (
    <Box
      className={classes.root}
      overflow="hidden"
      position="relative"
      display={display}
      ref={ref}
    >
      <Box
        className={`a${rootHoverClass}`}
        position="absolute"
        left="0"
        top="0"
        right="0"
        bottom="0"
      />
      <ButtonBase className={classes.buttonBase} {...props}>
        <Box position="relative" overflow="hidden">
          {Background && (
            <Box position="absolute" left="0" top="0" right="0" bottom="0">
              <Background />
            </Box>
          )}
          <Box className={classes.container} zIndex={1} position="relative">
            <Typography variant="interactive" component="div">
              {children}
            </Typography>
          </Box>
        </Box>
      </ButtonBase>
    </Box>
  );
};

const InteractiveCardWithBackground = withBackground<
  InteractiveCardProps,
  HTMLDivElement
>(React.forwardRef(InteractiveCardComponent), "level4");

const InteractiveCard: React.ForwardRefRenderFunction<
  HTMLDivElement,
  InteractiveCardProps
> = (props, ref) => {
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
    <InteractiveCardWithBackground
      backgroundColor={backgroundColor}
      {...props}
      ref={ref}
    />
  );
};

export default React.forwardRef(InteractiveCard);
