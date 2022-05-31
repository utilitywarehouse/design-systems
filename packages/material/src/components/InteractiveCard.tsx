import React from "react";
import {
  ButtonBase,
  Box,
  Typography,
  BackgroundContext,
  BoxProps,
  BackdropLevel,
} from "..";
import BackgroundProvider, { useTheme } from "./BackgroundProvider";
import { styled } from "@mui/material/styles";
import {
  helpers,
  transitions,
  colors,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { TinyColor } from "@ctrl/tinycolor";
import { customerUiPrefix } from "../utils";

const { px } = helpers;

export type InteractiveCardSize = "small" | "regular" | "large";

export type InteractiveCardVariant = "primary" | "secondary";

interface BaseInteractiveCardProps extends Pick<BoxProps, "sx"> {
  Background?: React.ComponentType;
  backgroundColor?: BackdropLevel;
  size?: InteractiveCardSize;
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
  size: InteractiveCardSize;
  backdropLevel: BackdropLevel;
}

const PREFIX = `${customerUiPrefix}-InteractiveCard`;
const classes = { rootHover: `${PREFIX}-rootHover` };

const StyledRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "size" && prop !== "backdropLevel",
})<StyledRootProps>(({ size, backdropLevel }) => {
  const interactiveCardPalette = {
    level0: {
      default: colors.midnight,
      hover: new TinyColor(colors.white).setAlpha(0.1).toString(),
    },
    level1: {
      default: colors.purple,
      hover: new TinyColor(colors.white).setAlpha(0.1).toString(),
    },
    level3: {
      default: colors.lightTint,
      hover: new TinyColor(colors.midnight).setAlpha(0.1).toString(),
    },
    level4: {
      default: colors.whiteOwl,
      hover: new TinyColor(colors.midnight).setAlpha(0.1).toString(),
    },
    level5: {
      default: colors.white,
      hover: new TinyColor(colors.midnight).setAlpha(0.1).toString(),
    },
  };

  return {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    borderRadius: size === "small" ? px(8) : px(16),
    transition: `all ${transitions.duration}ms ${transitions.easingFunction}`,
    transitionProperty: "background-color",
    backgroundColor: interactiveCardPalette[backdropLevel].default,
    "&:hover": {
      [`& .${classes.rootHover}`]: {
        backgroundColor: interactiveCardPalette[backdropLevel].hover,
      },
    },
  };
});

const StyledWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "size",
})<{ size: InteractiveCardSize }>(({ theme, size }) => {
  const paddingX = {
    desktop: { small: 2, regular: 2, large: 2 },
    tablet: { small: 2, regular: 2, large: 3 },
    mobile: { small: 2, regular: 2, large: 3 },
  };
  const paddingY = size === "small" ? theme.spacing(1) : theme.spacing(2);

  return {
    zIndex: 1,
    position: "relative",
    paddingLeft: theme.spacing(paddingX.mobile[size]),
    paddingRight: theme.spacing(paddingX.mobile[size]),
    paddingTop: paddingY,
    paddingBottom: paddingY,
    [theme.breakpoints.up("tablet")]: {
      paddingLeft: theme.spacing(paddingX.tablet[size]),
      paddingRight: theme.spacing(paddingX.tablet[size]),
    },
    [theme.breakpoints.up("desktop")]: {
      paddingLeft: theme.spacing(paddingX.desktop[size]),
      paddingRight: theme.spacing(paddingX.desktop[size]),
    },
  };
});

const InteractiveCardComponent: React.FunctionComponent<
  InteractiveCardProps
> = ({
  children,
  Background,
  size = "regular",
  containerProps,
  forwardedRef,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  backgroundColor,
  ...props
}) => {
  const { backdropLevel } = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const href = (props as any).href as string | undefined;

  return (
    <StyledRoot
      size={size}
      backdropLevel={backdropLevel as BackdropLevel}
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
          <StyledWrapper size={size}>
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
      case "level3":
      case "level4":
        return "level5";

      case "level5":
        return "level1";
    }
  }, [backdropLevel]);

  return (
    <BackgroundProvider backgroundColor={backgroundColor as BackdropLevel}>
      <InteractiveCardComponent {...props} />
    </BackgroundProvider>
  );
};

export default InteractiveCard;
