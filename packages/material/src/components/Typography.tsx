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
    small: React.CSSProperties;
    label: React.CSSProperties;
    headline: React.CSSProperties;
    subheading: React.CSSProperties;
    footnote: React.CSSProperties;
    interactive: React.CSSProperties;
    inherit: React.CSSProperties;
  }

  // allow configuration using material-ui's `createTheme`
  interface TypographyVariantsOptions {
    default?: React.CSSProperties;
    small?: React.CSSProperties;
    label?: React.CSSProperties;
    headline?: React.CSSProperties;
    subheading?: React.CSSProperties;
    footnote?: React.CSSProperties;
    interactive?: React.CSSProperties;
    inherit?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@material-ui/core/Typography" {
  interface TypographyPropsVariantOverrides {
    default: true;
    small: true;
    label: true;
    headline: true;
    subheading: true;
    footnote: true;
    interactive: true;
    inherit: true;
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
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        default: "p",
        small: "p",
        inherit: "p",
        label: "label",
        headline: "p",
        subheading: "p",
        caption: "caption",
        footnote: "p",
        interactive: "span",
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
          "&.MuiTypography-h5": {
            ...resolveStyles("h5", "default"),
            "&.MuiTypography-stateError": {
              ...resolveStyles("h5", "error"),
            },
            "&.MuiTypography-stateSuccess": {
              ...resolveStyles("h5", "success"),
            },
          },
          "&.MuiTypography-small": {
            ...resolveStyles("bodySmall", "default"),
            "&.MuiTypography-stateError": {
              ...resolveStyles("bodySmall", "error"),
            },
            "&.MuiTypography-stateSuccess": {
              ...resolveStyles("bodySmall", "success"),
            },
          },
          "&.MuiTypography-label": {
            ...resolveStyles("label", "default"),
            "&.MuiTypography-stateError": {
              ...resolveStyles("label", "error"),
            },
            "&.MuiTypography-stateSuccess": {
              ...resolveStyles("label", "success"),
            },
          },
          "&.MuiTypography-headline": {
            ...resolveStyles("headline", "default"),
            "&.MuiTypography-stateError": {
              ...resolveStyles("headline", "error"),
            },
            "&.MuiTypography-stateSuccess": {
              ...resolveStyles("headline", "success"),
            },
          },
          "&.MuiTypography-subheading": {
            ...resolveStyles("subheading", "default"),
            "&.MuiTypography-stateError": {
              ...resolveStyles("subheading", "error"),
            },
            "&.MuiTypography-stateSuccess": {
              ...resolveStyles("subheading", "success"),
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
          "&.MuiTypography-footnote": {
            ...resolveStyles("footnote", "default"),
            "&.MuiTypography-stateError": {
              ...resolveStyles("footnote", "error"),
            },
            "&.MuiTypography-stateSuccess": {
              ...resolveStyles("footnote", "success"),
            },
          },
          "&.MuiTypography-interactive": {
            ...resolveStyles("interactive", "default"),
            "&.MuiTypography-stateError": {
              ...resolveStyles("interactive", "error"),
            },
            "&.MuiTypography-stateSuccess": {
              ...resolveStyles("interactive", "success"),
            },
          },
        },
      },
    },
  };
};
