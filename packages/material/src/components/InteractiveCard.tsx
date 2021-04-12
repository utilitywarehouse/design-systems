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
import { clsx } from "../utils";

interface BaseInteractiveCardProps {
  Background?: React.ComponentType;
  backgroundColor?: BackdropLevel;
  size?: InteractiveCardSize;
  variant?: InteractiveCardVariant;
  containerProps?: BoxProps;
}

interface ForwardedRefProps<T extends HTMLElement> {
  forwardedRef?: React.Ref<T>;
}

type InteractiveCardButtonProps = BaseInteractiveCardProps &
  Omit<
    React.ComponentPropsWithoutRef<"button">,
    keyof BaseInteractiveCardProps
  > &
  ForwardedRefProps<HTMLButtonElement>;

type InteractiveCardAnchorProps = BaseInteractiveCardProps &
  Omit<React.ComponentPropsWithoutRef<"a">, keyof BaseInteractiveCardProps> &
  ForwardedRefProps<HTMLAnchorElement> & { href: string };

export type InteractiveCardProps =
  | InteractiveCardButtonProps
  | InteractiveCardAnchorProps;

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

const InteractiveCardComponent: React.FunctionComponent<InteractiveCardProps> = ({
  children,
  Background,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  backgroundColor,
  variant = "primary",
  size = "regular",
  containerProps,
  forwardedRef,
  ...props
}) => {
  const { theme } = React.useContext(BackgroundContext);
  const { rootHover: rootHoverClass } = useRootHoverStyles();
  const classes = useStyles({
    theme,
    rootHoverClass: `a${rootHoverClass}`,
    variant,
    size,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const href = (props as any).href as string | undefined;
  return (
    <Box
      {...containerProps}
      className={clsx(classes.root, containerProps?.className)}
      overflow="hidden"
      position="relative"
    >
      <Box
        className={`a${rootHoverClass}`}
        position="absolute"
        left="0"
        top="0"
        right="0"
        bottom="0"
      />
      <ButtonBase
        {...props}
        component={href ? "a" : "button"}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={(forwardedRef as unknown) as any}
        className={clsx(classes.buttonBase, props.className)}
      >
        <Box
          position="relative"
          overflow="hidden"
          minHeight="100%"
          minWidth="100%"
        >
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
>(InteractiveCardComponent, "level4");

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
