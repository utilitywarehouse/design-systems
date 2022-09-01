import { styled } from "@mui/material/styles";
import React from "react";
import { helpers, colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { isBrandBackgroundColor } from "../utils";
import {
  BackgroundColor,
  BackgroundProvider,
  useBackground,
} from "./Background";
import Box, { BoxProps } from "./Box";

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
    padding: theme.spacing(3), // 24px
    borderRadius: px(14),
    borderWidth: px(2),
    borderStyle: variant === "transparent" ? "dashed" : "solid",
  };
});

export interface CardProps
  extends Pick<BoxProps, "ref" | "sx" | "component" | "classes"> {
  /**
   * @deprecated in v2. The variant prop will be removed in v3 and the opaque variant will be the default.
   */
  variant?: CardVariant;
  forwardedRef?: React.Ref<HTMLDivElement>;
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  const { variant = "opaque", forwardedRef, ...rest } = props;
  const { backgroundColor } = useBackground();

  if (variant === "transparent") {
    console.warn(
      "The variant prop is deprecated in v2 and will be removed in v3. The opaque variant will be the default."
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
        {...rest}
        variant={variant}
        ref={forwardedRef}
        backgroundColor={cardBackgroundColor}
      />
    </BackgroundProvider>
  );
};

export default Card;
