import { styled } from "@mui/material/styles";
import React from "react";
import { BackgroundColor, Box, BoxProps } from "..";
import { helpers, colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { isBrandBackgroundColor } from "../utils";
import { BackgroundProvider, useBackground } from "./Background";

const { px } = helpers;

export type CardVariant = "transparent" | "opaque";

const getCardPalette = (
  backgroundColor: BackgroundColor,
  variant: CardVariant
) => {
  // TODO: ensure this naming convention follows what is decided for Backdrop &
  // Design Token naming
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

  // TODO: ensure this naming convention follows what is decided for Backdrop &
  // Design Token naming
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
    padding: theme.spacing(3), // 24px
    borderRadius: px(14),
    borderWidth: px(2),
    borderStyle: variant === "transparent" ? "dashed" : "solid",
  };
});

export interface CardProps
  extends Pick<BoxProps, "ref" | "sx" | "component" | "classes"> {
  variant?: CardVariant;
  forwardedRef?: React.Ref<HTMLDivElement>;
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  const { variant = "opaque", forwardedRef, ...rest } = props;
  const { backgroundColor } = useBackground();

  const cardBackgroundColor =
    variant === "transparent"
      ? backgroundColor
      : backgroundColor === "white"
      ? "purple"
      : "white";

  return (
    <BackgroundProvider backgroundColor={cardBackgroundColor}>
      <StyledCard
        {...rest}
        variant={variant}
        ref={forwardedRef}
        backgroundColor={cardBackgroundColor}
      />
    </BackgroundProvider>
  );
};

export default Card;
