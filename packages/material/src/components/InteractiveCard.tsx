import React from "react";
import { styled } from "@mui/material/styles";
import {
  helpers,
  transitions,
  colors,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { TinyColor } from "@ctrl/tinycolor";
import { customerUiPrefix } from "../utils";
import {
  BackgroundColor,
  BackgroundProvider,
  useBackground,
} from "./Background";
import Box, { BoxProps } from "./Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "./Typography";

const { px } = helpers;

export type InteractiveCardSize = "small" | "regular" | "large";

export type InteractiveCardVariant = "primary" | "secondary";

interface BaseInteractiveCardProps extends Pick<BoxProps, "sx"> {
  Background?: React.ComponentType;
  backgroundColor?: BackgroundColor;
  size?: InteractiveCardSize;
  containerProps?: BoxProps;
  children?: React.ReactNode;
  href?: string;
  /**
   * @deprecated in v2. forwardedRef is deprecated in v2, and will be removed in v3.
   */
  forwardedRef?: React.Ref<HTMLButtonElement>;
  /**
   * @deprecated in v2. This prop has no effect on the component
   */
  variant?: InteractiveCardVariant;
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
}

const PREFIX = `${customerUiPrefix}-InteractiveCard`;
export const interactiveCardClasses = { rootHover: `${PREFIX}-rootHover` };

const StyledRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "size",
})<StyledRootProps>(({ size }) => {
  const { backgroundColor } = useBackground();

  const interactiveCardPalette = {
    midnight: {
      default: colors.midnight,
      hover: new TinyColor(colors.white).setAlpha(0.1).toString(),
    },
    purple: {
      default: colors.purple,
      hover: new TinyColor(colors.white).setAlpha(0.1).toString(),
    },
    lightTint: {
      default: colors.lightTint,
      hover: new TinyColor(colors.midnight).setAlpha(0.1).toString(),
    },
    whiteOwl: {
      default: colors.whiteOwl,
      hover: new TinyColor(colors.midnight).setAlpha(0.1).toString(),
    },
    white: {
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
    backgroundColor: interactiveCardPalette[backgroundColor].default,
    "&:hover": {
      [`& .${interactiveCardClasses.rootHover}`]: {
        backgroundColor: interactiveCardPalette[backgroundColor].hover,
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

const InteractiveCardComponent = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  Omit<InteractiveCardProps, "forwardedRef">
>(
  (
    { children, Background, size = "regular", containerProps, href, ...props },
    ref
  ) => {
    const component = href ? "a" : "button";

    return (
      <StyledRoot size={size} {...containerProps}>
        <Box
          className={interactiveCardClasses.rootHover}
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          component={component as any}
          ref={ref}
          disableRipple={true}
          sx={{ width: "100%" }}
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
  }
);

InteractiveCardComponent.displayName = "InteractiveCardComponent";

const InteractiveCard = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  InteractiveCardProps
>(({ forwardedRef, ...props }, ref) => {
  if (forwardedRef !== undefined) {
    console.warn(
      "forwardedRef on the InteractiveCard component is deprecated in v2 and will be removed in v3. Please use ref instead."
    );
  }
  const { backgroundColor } = useBackground();
  const interactiveCardBackgroundColor =
    backgroundColor === "white" ? "purple" : "white";

  return (
    <BackgroundProvider
      backgroundColor={props.backgroundColor || interactiveCardBackgroundColor}
    >
      <InteractiveCardComponent ref={forwardedRef || ref} {...props} />
    </BackgroundProvider>
  );
});

InteractiveCard.displayName = "InteractiveCard";

export default InteractiveCard;
