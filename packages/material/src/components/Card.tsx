import * as React from "react";
import { styled } from "@mui/material/styles";
import { helpers, colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { isBrandBackgroundColor } from "../utils";
import {
  BackgroundColor,
  BackgroundProvider,
  useBackground,
} from "./Background";
import Box, { BoxProps } from "./Box";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { BoxTypeMap } from "@mui/material/Box";

const { px } = helpers;

export type CardVariant = "transparent" | "opaque";

const getCardPalette = (
  backgroundColor: BackgroundColor,
  variant: CardVariant
) => {
  const neutralBackgroundColorPalette = {
    opaque: {
      backgroundColor: colors.white,
      borderColor: colors.white,
    },
    transparent: {
      borderColor: colors.purple,
      backgroundColor: "transparent",
    },
  };

  const brandBackgroundColorPalette = {
    opaque: {
      backgroundColor: colors.purple,
      borderColor: colors.purple,
    },
    transparent: {
      borderColor: colors.white,
      backgroundColor: "transparent",
    },
  };

  if (isBrandBackgroundColor(backgroundColor)) {
    return brandBackgroundColorPalette[variant];
  }

  return neutralBackgroundColorPalette[variant];
};

interface StyledCardProps {
  variant: CardVariant;
  backgroundColor: BackgroundColor;
}

const StyledCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant" && prop !== "backgroundColor",
})<StyledCardProps>(({ theme, backgroundColor, variant }) => {
  const palette = getCardPalette(backgroundColor, variant);
  return {
    ...palette,
    padding: theme.spacing(3),
    borderRadius: px(14),
    borderWidth: px(2),
    borderStyle: variant === "transparent" ? "dashed" : "solid",
  };
});

export interface CardProps
  extends Pick<BoxProps, "sx" | "component" | "classes"> {
  children?: React.ReactNode;
  /**
   * @deprecated in v2. The variant prop will be removed in v3 and the opaque variant will be the default.
   */
  variant?: CardVariant;
  /**
   * @deprecated in v2. forwardedRef is deprecated in v2, and will be removed in v3.
   */
  forwardedRef?: React.Ref<HTMLElement>;
}

export interface CardTypeMap<P = {}, D extends React.ElementType = "div"> {
  props: P & CardProps;
  defaultComponent: D;
}

const Card = React.forwardRef(function Card(
  { variant = "opaque", forwardedRef, ...props },
  ref
) {
  const { backgroundColor } = useBackground();

  if (variant === "transparent") {
    console.warn(
      "The variant prop on the Card component is deprecated in v2 and will be removed in v3. The opaque variant will be the default."
    );
  }

  if (forwardedRef !== undefined) {
    console.warn(
      "forwardedRef on the Card component is deprecated in v2 and will be removed in v3. Please use ref instead."
    );
  }

  const cardBackgroundColor =
    variant === "transparent"
      ? backgroundColor
      : backgroundColor === "white"
      ? "purple"
      : "white";

  return (
    <BackgroundProvider backgroundColor={cardBackgroundColor}>
      <StyledCard
        {...props}
        variant={variant}
        ref={forwardedRef || ref}
        backgroundColor={cardBackgroundColor}
      />
    </BackgroundProvider>
  );
}) as OverridableComponent<CardTypeMap>;

export default Card;
