import {
  BackdropLevel,
  Theme as CustomerUITheme,
} from "@utilitywarehouse/customer-ui-theme";
import React from "react";
import {
  ButtonBase,
  Box,
  Typography,
  makeStyles,
  Theme,
  BackgroundContext,
} from "..";
import withBackground from "../hocs/withBackground";

export interface InteractiveCardProps
  extends React.ComponentPropsWithoutRef<"button"> {
  Background?: React.ComponentType;
  backgroundColor?: BackdropLevel;
}

interface StyleProps {
  theme: CustomerUITheme;
  rootHoverClass: string;
}

const useRootHoverStyles = makeStyles(() => ({
  rootHover: {},
}));

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) => ({
  root: (props) => ({
    backgroundColor:
      props.theme.components.interactiveCard.mobile.idle.backgroundColor,
    borderRadius:
      props.theme.components.interactiveCard.mobile.idle.borderRadius,
    [theme.breakpoints.up("tablet")]: {
      backgroundColor:
        props.theme.components.interactiveCard.tablet.idle.backgroundColor,
      borderRadius:
        props.theme.components.interactiveCard.tablet.idle.borderRadius,
    },
    [theme.breakpoints.up("desktop")]: {
      backgroundColor:
        props.theme.components.interactiveCard.desktop.idle.backgroundColor,
      borderRadius:
        props.theme.components.interactiveCard.desktop.idle.borderRadius,
    },
    [`& .${props.rootHoverClass}`]: {
      backgroundColor:
        props.theme.components.interactiveCard.mobile.idle.backgroundColor,
      transition: props.theme.components.interactiveCard.mobile.idle.transition,
      transitionProperty:
        props.theme.components.interactiveCard.mobile.idle.transitionProperty,
      [theme.breakpoints.up("tablet")]: {
        backgroundColor:
          props.theme.components.interactiveCard.tablet.idle.backgroundColor,
        transition:
          props.theme.components.interactiveCard.tablet.idle.transition,
        transitionProperty:
          props.theme.components.interactiveCard.tablet.idle.transitionProperty,
      },
      [theme.breakpoints.up("desktop")]: {
        backgroundColor:
          props.theme.components.interactiveCard.desktop.idle.backgroundColor,
        transition:
          props.theme.components.interactiveCard.desktop.idle.transition,
        transitionProperty:
          props.theme.components.interactiveCard.desktop.idle
            .transitionProperty,
      },
    },
    "&:hover": {
      borderRadius:
        props.theme.components.interactiveCard.mobile.active.borderRadius,
      [theme.breakpoints.up("tablet")]: {
        borderRadius:
          props.theme.components.interactiveCard.tablet.active.borderRadius,
      },
      [theme.breakpoints.up("desktop")]: {
        borderRadius:
          props.theme.components.interactiveCard.desktop.active.borderRadius,
      },
      [`& .${props.rootHoverClass}`]: {
        transition:
          props.theme.components.interactiveCard.mobile.active.transition,
        transitionProperty:
          props.theme.components.interactiveCard.mobile.active
            .transitionProperty,
        backgroundColor:
          props.theme.components.interactiveCard.mobile.active.backgroundColor,
        [theme.breakpoints.up("tablet")]: {
          backgroundColor:
            props.theme.components.interactiveCard.tablet.active
              .backgroundColor,
          transition:
            props.theme.components.interactiveCard.tablet.active.transition,
          transitionProperty:
            props.theme.components.interactiveCard.tablet.active
              .transitionProperty,
        },
        [theme.breakpoints.up("desktop")]: {
          backgroundColor:
            props.theme.components.interactiveCard.desktop.active
              .backgroundColor,
          transition:
            props.theme.components.interactiveCard.desktop.active.transition,
          transitionProperty:
            props.theme.components.interactiveCard.desktop.active
              .transitionProperty,
        },
      },
    },
  }),
  container: (props) => ({
    padding: props.theme.components.interactiveCard.mobile.idle.padding,
    [theme.breakpoints.up("tablet")]: {
      padding: props.theme.components.interactiveCard.tablet.idle.padding,
    },
    [theme.breakpoints.up("desktop")]: {
      padding: props.theme.components.interactiveCard.desktop.idle.padding,
    },
    "&:hover": {
      padding: props.theme.components.interactiveCard.mobile.active.padding,
      [theme.breakpoints.up("tablet")]: {
        padding: props.theme.components.interactiveCard.tablet.active.padding,
      },
      [theme.breakpoints.up("desktop")]: {
        padding: props.theme.components.interactiveCard.desktop.active.padding,
      },
    },
  }),
}));

const InteractiveCardComponent: React.FunctionComponent<InteractiveCardProps> = ({
  children,
  Background,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  backgroundColor,
  ...props
}) => {
  const { theme } = React.useContext(BackgroundContext);
  const { rootHover: rootHoverClass } = useRootHoverStyles();
  const classes = useStyles({ theme, rootHoverClass });
  return (
    <Box className={classes.root} overflow="hidden" position="relative">
      <Box
        className={rootHoverClass}
        position="absolute"
        left="0"
        top="0"
        right="0"
        bottom="0"
      />
      <ButtonBase {...props}>
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

const InteractiveCardWithBackground = withBackground(
  InteractiveCardComponent,
  "level4"
);

const InteractiveCard: React.FunctionComponent<InteractiveCardProps> = (
  props
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
    <InteractiveCardWithBackground
      backgroundColor={backgroundColor}
      {...props}
    />
  );
};

export default InteractiveCard;
