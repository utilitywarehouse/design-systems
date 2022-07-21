import { styled } from "@mui/material/styles";
import React from "react";
import { BackdropLevel, Box, BoxProps } from "..";
import { helpers, colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { isBrandBackdropLevel } from "../utils";
import { BackgroundProvider, useBackground } from "./Background";

const { px } = helpers;

export type CardVariant = "transparent" | "opaque";

const getCardPalette = (backdropLevel: BackdropLevel, variant: CardVariant) => {
  // TODO: ensure this naming convention follows what is decided for Backdrop &
  // Design Token naming
  const neutralBackdropLevelPalette = {
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
  const brandBackdropLevelPalette = {
    opaque: {
      backgroundColor: colors.purple,
      borderColor: colors.purple,
    },
    transparent: {
      borderColor: colors.white,
      backgroundColor: "transparent",
    },
  };

  if (isBrandBackdropLevel(backdropLevel)) {
    return brandBackdropLevelPalette[variant];
  }

  return neutralBackdropLevelPalette[variant];
};

interface StyledCardProps {
  variant: CardVariant;
  backdropLevel: BackdropLevel;
}

const StyledCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "variant" && prop !== "backdropLevel",
})<StyledCardProps>(({ theme, backdropLevel, variant }) => {
  const palette = getCardPalette(backdropLevel, variant);
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
  const { backdropLevel } = useBackground();

  const backgroundColor: BackdropLevel = React.useMemo(() => {
    if (variant === "transparent") {
      return backdropLevel as BackdropLevel;
    }
    const color = backdropLevel === "level5" ? "level1" : "level5";
    return color as BackdropLevel;
  }, [backdropLevel]);

  return (
    <BackgroundProvider backgroundColor={backgroundColor}>
      <StyledCard
        {...rest}
        variant={variant}
        ref={forwardedRef}
        backdropLevel={backgroundColor}
      />
    </BackgroundProvider>
  );
};

export default Card;
