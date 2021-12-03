import {
  Theme as CustomerUITheme,
  CardVariant,
} from "@utilitywarehouse/customer-ui-theme";
import { styled } from "@mui/material/styles";
import React from "react";
import { BackgroundContext, Box, BoxProps } from "..";
import BackgroundProvider from "./BackgroundProvider";

interface StyledCardProps {
  customerUITheme: CustomerUITheme;
  variant: CardVariant;
}

const StyledCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== "customerUITheme" && prop !== "variant",
})<StyledCardProps>(({ theme, customerUITheme, variant }) => ({
  ...customerUITheme.components.card[variant].mobile,
  [theme.breakpoints.up("tablet")]: {
    ...customerUITheme.components.card[variant].tablet,
  },
  [theme.breakpoints.up("desktop")]: {
    ...customerUITheme.components.card[variant].desktop,
  },
}));

export interface CardProps extends BoxProps {
  variant?: CardVariant;
  forwardedRef?: React.Ref<HTMLDivElement>;
}

const CardComponent: React.FC<CardProps> = ({
  children,
  variant = "opaque",
  forwardedRef,
  ...props
}) => {
  const { theme } = React.useContext(BackgroundContext);
  return (
    <StyledCard
      {...props}
      variant={variant}
      customerUITheme={theme}
      ref={forwardedRef}
    >
      {children}
    </StyledCard>
  );
};

const Card: React.FunctionComponent<CardProps> = (props) => {
  const { theme } = React.useContext(BackgroundContext);
  const backdropLevel = theme.backdropLevel;
  const backgroundColor = React.useMemo(() => {
    if (props.variant === "transparent") {
      return backdropLevel;
    }

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
      <CardComponent {...props} />
    </BackgroundProvider>
  );
};

export default Card;
