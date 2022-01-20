import {
  BackdropLevel,
  Theme as CustomerUITheme,
  InteractiveCardSize,
  InteractiveCardVariant,
} from "@utilitywarehouse/customer-ui-theme";
import React from "react";
import { ButtonBase, Box, Typography, BackgroundContext, BoxProps } from "..";
import BackgroundProvider from "./BackgroundProvider";
import { styled } from "@mui/material/styles";

interface BaseInteractiveCardProps {
  Background?: React.ComponentType;
  backgroundColor?: BackdropLevel;
  size?: InteractiveCardSize;
  variant?: InteractiveCardVariant;
  containerProps?: BoxProps;
  forwardedRef?: React.Ref<unknown>;
}

type InteractiveCardButtonProps = BaseInteractiveCardProps &
  Omit<
    React.ComponentPropsWithoutRef<"button">,
    keyof BaseInteractiveCardProps
  >;

type InteractiveCardAnchorProps = BaseInteractiveCardProps &
  Omit<React.ComponentPropsWithoutRef<"a">, keyof BaseInteractiveCardProps>;

export type InteractiveCardProps =
  | InteractiveCardButtonProps
  | InteractiveCardAnchorProps;

interface StyledRootProps {
  customerUITheme: CustomerUITheme;
  size: InteractiveCardSize;
  variant: InteractiveCardVariant;
}

const PREFIX = "InteractiveCard";
const classes = { rootHover: `${PREFIX}-rootHover` };

const StyledRoot = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "customerUITheme" && prop !== "size" && prop !== "variant",
})<StyledRootProps>(({ theme, customerUITheme, size, variant }) => ({
  width: "100%",
  overflow: "hidden",
  position: "relative",
  backgroundColor:
    customerUITheme.components.interactiveCard.mobile[variant][size].idle
      .backgroundColor,
  borderRadius:
    customerUITheme.components.interactiveCard.mobile[variant][size].idle
      .borderRadius,
  [theme.breakpoints.up("tablet")]: {
    backgroundColor:
      customerUITheme.components.interactiveCard.tablet[variant][size].idle
        .backgroundColor,
    borderRadius:
      customerUITheme.components.interactiveCard.tablet[variant][size].idle
        .borderRadius,
  },
  [theme.breakpoints.up("desktop")]: {
    backgroundColor:
      customerUITheme.components.interactiveCard.desktop[variant][size].idle
        .backgroundColor,
    borderRadius:
      customerUITheme.components.interactiveCard.desktop[variant][size].idle
        .borderRadius,
  },
  "&:hover": {
    borderRadius:
      customerUITheme.components.interactiveCard.mobile[variant][size].active
        .borderRadius,
    [theme.breakpoints.up("tablet")]: {
      borderRadius:
        customerUITheme.components.interactiveCard.tablet[variant][size].active
          .borderRadius,
    },
    [theme.breakpoints.up("desktop")]: {
      borderRadius:
        customerUITheme.components.interactiveCard.desktop[variant][size].active
          .borderRadius,
    },
    [`& .${classes.rootHover}`]: {
      transition:
        customerUITheme.components.interactiveCard.mobile[variant][size].active
          .transition,
      transitionProperty:
        customerUITheme.components.interactiveCard.mobile[variant][size].active
          .transitionProperty,
      backgroundColor:
        customerUITheme.components.interactiveCard.mobile[variant][size].active
          .backgroundColor,
      [theme.breakpoints.up("tablet")]: {
        transition:
          customerUITheme.components.interactiveCard.tablet[variant][size]
            .active.transition,
        transitionProperty:
          customerUITheme.components.interactiveCard.tablet[variant][size]
            .active.transitionProperty,
        backgroundColor:
          customerUITheme.components.interactiveCard.tablet[variant][size]
            .active.backgroundColor,
      },
      [theme.breakpoints.up("desktop")]: {
        transition:
          customerUITheme.components.interactiveCard.desktop[variant][size]
            .active.transition,
        transitionProperty:
          customerUITheme.components.interactiveCard.desktop[variant][size]
            .active.transitionProperty,
        backgroundColor:
          customerUITheme.components.interactiveCard.desktop[variant][size]
            .active.backgroundColor,
      },
    },
  },
}));

const StyledWrapper = styled(Box)<StyledRootProps>(
  ({ theme, customerUITheme, size, variant }) => ({
    zIndex: 1,
    position: "relative",
    padding:
      customerUITheme.components.interactiveCard.mobile[variant][size].idle
        .padding,
    [theme.breakpoints.up("tablet")]: {
      padding:
        customerUITheme.components.interactiveCard.tablet[variant][size].idle
          .padding,
    },
    [theme.breakpoints.up("desktop")]: {
      padding:
        customerUITheme.components.interactiveCard.desktop[variant][size].idle
          .padding,
    },
    "&:hover": {
      padding:
        customerUITheme.components.interactiveCard.mobile[variant][size].active
          .padding,
      [theme.breakpoints.up("tablet")]: {
        padding:
          customerUITheme.components.interactiveCard.tablet[variant][size]
            .active.padding,
      },
      [theme.breakpoints.up("desktop")]: {
        padding:
          customerUITheme.components.interactiveCard.desktop[variant][size]
            .active.padding,
      },
    },
  })
);

const InteractiveCardComponent: React.FunctionComponent<
  InteractiveCardProps
> = ({
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const href = (props as any).href as string | undefined;
  return (
    <StyledRoot
      customerUITheme={theme}
      size={size}
      variant={variant}
      {...containerProps}
    >
      <Box
        className={classes.rootHover}
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <ButtonBase
        {...props}
        disableRipple={true}
        component={href ? "a" : "button"}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={forwardedRef as unknown as any}
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            minHeight: "100%",
            minWidth: "100%",
          }}
        >
          {Background && (
            <Box
              sx={{
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <Background />
            </Box>
          )}
          <StyledWrapper customerUITheme={theme} size={size} variant={variant}>
            <Typography component="div">{children}</Typography>
          </StyledWrapper>
        </Box>
      </ButtonBase>
    </StyledRoot>
  );
};

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
      case "level4":
        return "level5";

      case "level5":
        return "level1";
    }
  }, [backdropLevel]);

  return (
    <BackgroundProvider backgroundColor={backgroundColor}>
      <InteractiveCardComponent {...props} />
    </BackgroundProvider>
  );
};

export default InteractiveCard;
