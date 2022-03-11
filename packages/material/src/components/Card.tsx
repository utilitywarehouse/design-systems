import { styled } from "@mui/material/styles";
import React from "react";
import { BackdropLevel, Box, BoxProps, ColorScheme } from "..";
import BackgroundProvider, { useTheme } from "./BackgroundProvider";
import { helpers, colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { isBrandBackdropLevel, isDarkColorScheme } from "../utils";

const { px } = helpers;

export type CardVariant = "transparent" | "opaque";

const getCardPalette = (
  colorScheme: ColorScheme,
  backdropLevel: BackdropLevel,
  variant: CardVariant
) => {
  const darkModePalette = {
    opaque: {
      backgroundColor: colors.codGray,
      borderColor: colors.codGray,
    },
    transparent: {
      borderColor: colors.white,
      backgroundColor: "transparent",
    },
  };

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

  if (isDarkColorScheme(colorScheme)) {
    return darkModePalette[variant];
  }

  if (isBrandBackdropLevel(backdropLevel)) {
    return brandBackdropLevelPalette[variant];
  }

  return neutralBackdropLevelPalette[variant];
};

interface StyledCardProps {
  variant: CardVariant;
  backdropLevel: BackdropLevel;
  colorScheme: ColorScheme;
}

const StyledCard = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "colorScheme" && prop !== "variant" && prop !== "backdropLevel",
})<StyledCardProps>(({ theme, backdropLevel, colorScheme, variant }) => {
  const palette = getCardPalette(colorScheme, backdropLevel, variant);
  return {
    ...palette,
    padding: theme.spacing(3), // 24px
    borderRadius: px(14),
    borderWidth: px(2),
    borderStyle: variant === "transparent" ? "dashed" : "solid",
  };
});

export interface CardProps extends BoxProps {
  variant?: CardVariant;
  forwardedRef?: React.Ref<HTMLDivElement>;
}

const Card: React.FunctionComponent<CardProps> = (props) => {
  const { variant = "opaque", forwardedRef, ...rest } = props;
  const { backdropLevel, colorScheme } = useTheme();

  const backgroundColor = React.useMemo(() => {
    if (variant === "transparent") {
      return backdropLevel;
    }
    return backdropLevel === "level5" ? "level1" : "level5";
  }, [backdropLevel]);

  return (
    <BackgroundProvider backgroundColor={backgroundColor}>
      <StyledCard
        {...rest}
        variant={variant}
        ref={forwardedRef}
        backdropLevel={backgroundColor}
        colorScheme={colorScheme}
      />
    </BackgroundProvider>
  );
};

export default Card;
