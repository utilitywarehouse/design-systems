import React from "react";
import MuiTypography, {
  TypographyPropsVariantOverrides,
} from "@mui/material/Typography";
import { OverridableStringUnion } from "@mui/types";
import { CSSProperties } from "@mui/styles/withStyles";
import {
  TypographyColor,
  TypographyVariant,
} from "@utilitywarehouse/customer-ui-theme";
import { GetComponentThemeConfiguration } from "../lib/theme.types";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    default: React.CSSProperties;
    displayHeading: React.CSSProperties;
    subtitle: React.CSSProperties;
    body: React.CSSProperties;
    legalNote: React.CSSProperties;
    caption: React.CSSProperties;
  }

  // allow configuration using material-ui's `createTheme`
  interface TypographyVariantsOptions {
    default?: React.CSSProperties;
    displayHeading?: React.CSSProperties;
    subtitle?: React.CSSProperties;
    body?: React.CSSProperties;
    legalNote?: React.CSSProperties;
    caption?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    default: true;
    displayHeading: true;
    subtitle: true;
    body: true;
    legalNote: true;
    caption: true;
    h6: false;
    body1: false;
    body2: false;
    button: false;
    overline: false;
    subtitle1: false;
    subtitle2: false;
  }
}

export interface TypographyProps
  extends React.ComponentPropsWithoutRef<"span"> {
  color?: TypographyColor;
  variant?: OverridableStringUnion<
    TypographyVariant | "inherit",
    TypographyPropsVariantOverrides
  >;
  gutterBottom?: boolean;
  paragraph?: boolean;
  component?: React.ElementType;
  forwardedRef?: React.Ref<unknown>;
}

const Typography: React.FunctionComponent<TypographyProps> = ({
  color = "primary",
  variant = "body",
  gutterBottom = false,
  paragraph = false,
  forwardedRef,
  ...props
}) => {
  const classNames = (props.className ?? "").split(" ");
  switch (color) {
    case "success":
      classNames.unshift(`MuiTypography-colorSuccess`);
      break;

    case "error":
      classNames.unshift(`MuiTypography-colorError`);
      break;

    case "primary":
      classNames.unshift(`MuiTypography-colorPrimary`);
      break;

    case "secondary":
      classNames.unshift(`MuiTypography-colorSecondary`);
      break;
  }

  return (
    <MuiTypography
      {...props}
      className={classNames.join(" ")}
      variant={variant}
      gutterBottom={gutterBottom}
      paragraph={paragraph}
      variantMapping={{
        displayHeading: "h1",
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        subtitle: "p",
        body: "p",
        legalNote: "p",
        caption: "caption",
      }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={(forwardedRef as unknown) as any}
    />
  );
};

export default Typography;

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = (
  theme,
  muiTheme
) => {
  const resolveStyles = (
    variant: TypographyVariant,
    color: TypographyColor
  ): CSSProperties => {
    return {
      ...theme.components.typography.mobile[variant][color],
      fill: theme.components.typography.mobile[variant][color].color,
      stroke: theme.components.typography.mobile[variant][color].color,
      [muiTheme.breakpoints.up("tablet")]: {
        ...theme.components.typography.tablet[variant][color],
        fill: theme.components.typography.tablet[variant][color].color,
        stroke: theme.components.typography.tablet[variant][color].color,
      },
      [muiTheme.breakpoints.up("desktop")]: {
        ...theme.components.typography.desktop[variant][color],
        fill: theme.components.typography.desktop[variant][color].color,
        stroke: theme.components.typography.desktop[variant][color].color,
      },
    } as CSSProperties;
  };

  return {
    MuiTypography: {
      defaultProps: {
        variant: "body",
      },
      styleOverrides: {
        root: {
          ...resolveStyles("body", "primary"),
          "&.MuiTypography-colorSecondary": {
            ...resolveStyles("body", "secondary"),
          },
          "&.MuiTypography-colorError": {
            ...resolveStyles("body", "error"),
          },
          "&.MuiTypography-colorSuccess": {
            ...resolveStyles("body", "success"),
          },
          "&.MuiTypography-inherit": {
            fontSize: "inherit",
            fontFamily: "inherit",
            fontWeight: "inherit",
            lineHeight: "inherit",
            color: "inherit",
          },
          "&.MuiTypography-displayHeading": {
            ...resolveStyles("displayHeading", "primary"),
            "&.MuiTypography-colorSecondary": {
              ...resolveStyles("displayHeading", "secondary"),
            },
            "&.MuiTypography-colorError": {
              ...resolveStyles("displayHeading", "error"),
            },
            "&.MuiTypography-colorSuccess": {
              ...resolveStyles("displayHeading", "success"),
            },
          },
          "&.MuiTypography-h1": {
            ...resolveStyles("h1", "primary"),
            "&.MuiTypography-colorSecondary": {
              ...resolveStyles("h1", "secondary"),
            },
            "&.MuiTypography-colorError": {
              ...resolveStyles("h1", "error"),
            },
            "&.MuiTypography-colorSuccess": {
              ...resolveStyles("h1", "success"),
            },
          },
          "&.MuiTypography-h2": {
            ...resolveStyles("h2", "primary"),
            "&.MuiTypography-colorSecondary": {
              ...resolveStyles("h2", "secondary"),
            },
            "&.MuiTypography-colorError": {
              ...resolveStyles("h2", "error"),
            },
            "&.MuiTypography-colorSuccess": {
              ...resolveStyles("h2", "success"),
            },
          },
          "&.MuiTypography-h3": {
            ...resolveStyles("h3", "primary"),
            "&.MuiTypography-colorSecondary": {
              ...resolveStyles("h3", "secondary"),
            },
            "&.MuiTypography-colorError": {
              ...resolveStyles("h3", "error"),
            },
            "&.MuiTypography-colorSuccess": {
              ...resolveStyles("h3", "success"),
            },
          },
          "&.MuiTypography-h4": {
            ...resolveStyles("h4", "primary"),
            "&.MuiTypography-colorSecondary": {
              ...resolveStyles("h4", "secondary"),
            },
            "&.MuiTypography-colorError": {
              ...resolveStyles("h4", "error"),
            },
            "&.MuiTypography-colorSuccess": {
              ...resolveStyles("h4", "success"),
            },
          },
          "&.MuiTypography-subtitle": {
            ...resolveStyles("subtitle", "primary"),
            "&.MuiTypography-colorSecondary": {
              ...resolveStyles("subtitle", "secondary"),
            },
            "&.MuiTypography-colorError": {
              ...resolveStyles("subtitle", "error"),
            },
            "&.MuiTypography-colorSuccess": {
              ...resolveStyles("subtitle", "success"),
            },
          },
          "&.MuiTypography-body": {
            ...resolveStyles("body", "primary"),
            "&.MuiTypography-colorSecondary": {
              ...resolveStyles("body", "secondary"),
            },
            "&.MuiTypography-colorError": {
              ...resolveStyles("body", "error"),
            },
            "&.MuiTypography-colorSuccess": {
              ...resolveStyles("body", "success"),
            },
          },
          "&.MuiTypography-legalNote": {
            ...resolveStyles("legalNote", "primary"),
            "&.MuiTypography-colorSecondary": {
              ...resolveStyles("legalNote", "secondary"),
            },
            "&.MuiTypography-colorError": {
              ...resolveStyles("legalNote", "error"),
            },
            "&.MuiTypography-colorSuccess": {
              ...resolveStyles("legalNote", "success"),
            },
          },
          "&.MuiTypography-caption": {
            ...resolveStyles("caption", "primary"),
            "&.MuiTypography-colorSecondary": {
              ...resolveStyles("caption", "secondary"),
            },
            "&.MuiTypography-colorError": {
              ...resolveStyles("caption", "error"),
            },
            "&.MuiTypography-colorSuccess": {
              ...resolveStyles("caption", "success"),
            },
          },
        },
      },
    },
  };
};
