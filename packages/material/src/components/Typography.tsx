import React from "react";
import MuiTypography, {
  TypographyPropsVariantOverrides,
} from "@material-ui/core/Typography";
import { Variant } from "@material-ui/core/styles/createTypography";
import { OverridableStringUnion } from "@material-ui/types";
import { CSSProperties } from "@material-ui/styles/withStyles";
import {
  TypographyState,
  TypographyVariant,
} from "@utilitywarehouse/customer-ui-theme";
import { GetComponentThemeConfiguration } from "../lib/theme.types";

declare module "@material-ui/core/styles" {
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

// Update the Typography's variant prop options
declare module "@material-ui/core/Typography" {
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
  state?: TypographyState;
  variant?: OverridableStringUnion<
    Variant | "inherit",
    TypographyPropsVariantOverrides
  >;
  gutterBottom?: boolean;
  paragraph?: boolean;
  component?: React.ElementType;
  forwardedRef?: React.Ref<unknown>;
}

const Typography: React.FunctionComponent<TypographyProps> = ({
  state = "default",
  variant = "default",
  gutterBottom = false,
  paragraph = false,
  forwardedRef,
  ...props
}) => {
  const classNames = (props.className ?? "").split(" ");
  switch (state) {
    case "success":
      classNames.unshift(`MuiTypography-stateSuccess`);
      break;

    case "error":
      classNames.unshift(`MuiTypography-stateError`);
      break;

    case "default":
      classNames.unshift(`MuiTypography-stateDefault`);
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
    state: TypographyState
  ): CSSProperties => {
    return {
      ...theme.components.typography.mobile[variant][state],
      fill: theme.components.typography.mobile[variant][state].color,
      stroke: theme.components.typography.mobile[variant][state].color,
      [muiTheme.breakpoints.up("tablet")]: {
        ...theme.components.typography.tablet[variant][state],
        fill: theme.components.typography.tablet[variant][state].color,
        stroke: theme.components.typography.tablet[variant][state].color,
      },
      [muiTheme.breakpoints.up("desktop")]: {
        ...theme.components.typography.desktop[variant][state],
        fill: theme.components.typography.desktop[variant][state].color,
        stroke: theme.components.typography.desktop[variant][state].color,
      },
    } as CSSProperties;
  };

  return {
    MuiTypography: {
      defaultProps: {
        variant: "default",
      },
      styleOverrides: {
        root: {
          ...resolveStyles("body", "default"),
          "&.MuiTypography-stateError": {
            ...resolveStyles("body", "error"),
          },
          "&.MuiTypography-stateSuccess": {
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
            ...resolveStyles("displayHeading", "default"),
            "&.MuiTypography-stateError": {
              ...resolveStyles("displayHeading", "error"),
            },
            "&.MuiTypography-stateSuccess": {
              ...resolveStyles("displayHeading", "success"),
            },
          },
          "&.MuiTypography-h1": {
            ...resolveStyles("h1", "default"),
            "&.MuiTypography-stateError": {
              ...resolveStyles("h1", "error"),
            },
            "&.MuiTypography-stateSuccess": {
              ...resolveStyles("h1", "success"),
            },
          },
          "&.MuiTypography-h2": {
            ...resolveStyles("h2", "default"),
            "&.MuiTypography-stateError": {
              ...resolveStyles("h2", "error"),
            },
            "&.MuiTypography-stateSuccess": {
              ...resolveStyles("h2", "success"),
            },
          },
          "&.MuiTypography-h3": {
            ...resolveStyles("h3", "default"),
            "&.MuiTypography-stateError": {
              ...resolveStyles("h3", "error"),
            },
            "&.MuiTypography-stateSuccess": {
              ...resolveStyles("h3", "success"),
            },
          },
          "&.MuiTypography-h4": {
            ...resolveStyles("h4", "default"),
            "&.MuiTypography-stateError": {
              ...resolveStyles("h4", "error"),
            },
            "&.MuiTypography-stateSuccess": {
              ...resolveStyles("h4", "success"),
            },
          },
          "&.MuiTypography-subtitle": {
            ...resolveStyles("subtitle", "default"),
            "&.MuiTypography-stateError": {
              ...resolveStyles("subtitle", "error"),
            },
            "&.MuiTypography-stateSuccess": {
              ...resolveStyles("subtitle", "success"),
            },
          },
          "&.MuiTypography-body": {
            ...resolveStyles("body", "default"),
            "&.MuiTypography-stateError": {
              ...resolveStyles("body", "error"),
            },
            "&.MuiTypography-stateSuccess": {
              ...resolveStyles("body", "success"),
            },
          },
          "&.MuiTypography-legalNote": {
            ...resolveStyles("legalNote", "default"),
            "&.MuiTypography-stateError": {
              ...resolveStyles("legalNote", "error"),
            },
            "&.MuiTypography-stateSuccess": {
              ...resolveStyles("legalNote", "success"),
            },
          },
          "&.MuiTypography-caption": {
            ...resolveStyles("caption", "default"),
            "&.MuiTypography-stateError": {
              ...resolveStyles("caption", "error"),
            },
            "&.MuiTypography-stateSuccess": {
              ...resolveStyles("caption", "success"),
            },
          },
        },
      },
    },
  };
};
