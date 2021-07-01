import React from "react";
import FilledInput, { FilledInputProps } from "@material-ui/core/FilledInput";
import { GetComponentThemeConfiguration } from "../lib/theme.types";
import {
  colors,
  fonts,
  fontWeights,
} from "@utilitywarehouse/customer-ui-design-tokens";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  styled,
} from "../material/core";
import { useTheme } from "..";
import assert from "assert";

export interface TextFieldProps extends Omit<FilledInputProps, "hiddenLabel"> {
  success?: boolean;
  label?: React.ReactNode;
  labelId?: string;
  helperText?: React.ReactNode;
  helperTextId?: string;
}

const TextFieldInput = styled(FilledInput, {
  shouldForwardProp: (prop) => prop !== "success",
})<TextFieldProps>(({ success, error }) => ({
  ...(success && !error
    ? {
        transition: "border 120ms ease-out",
        "&:not(.Mui-disabled)": {
          borderColor: colors.jewel,
        },
        ":before": {
          borderColor: colors.jewel,
        },
        ":hover": {
          "&:not(.Mui-disabled)": {
            "&:before": {
              borderColor: colors.jewel,
            },
          },
        },
        "&.Mui-focused": {
          borderColor: colors.jewel,
        },
        "&:after": {
          borderColor: colors.jewel,
        },
      }
    : {}),
}));

const TextFieldLabel = styled(InputLabel)({
  position: "relative",
  transform: "none",
  fontFamily: fonts.primary,
  fontWeight: fontWeights.primary,
  fontSize: "0.875rem",
  color: colors.midnight,
  "&.Mui-error": {
    color: colors.midnight,
  },
  "&.Mui-disabled": {
    color: `${colors.midnight}40`,
  },
});

const TextFieldHelperText = styled(FormHelperText)({
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.regular,
  fontSize: "0.8125rem",
  color: colors.midnight,
  margin: 0,
  "&.Mui-error": {
    color: colors.maroonFlush,
  },
  "&.Mui-disabled": {
    color: colors.midnight,
  },
});

const TextField = (props: TextFieldProps): JSX.Element => {
  const { label, labelId, helperText, helperTextId, ...rest } = props;
  const { error, disabled } = rest;
  const formControlProps = { error, disabled };
  const { backdropLevel } = useTheme();

  // only allow use on white, light tint & cod grey backgrounds
  const validBackgroundLevels = ["level3", "level4", "level5"];
  assert(
    validBackgroundLevels.includes(backdropLevel),
    `Invalid background color: '${backdropLevel}'. Should be one of [${validBackgroundLevels
      .map((l) => `'${l}'`)
      .join(", ")}]`
  );

  if (label || helperText) {
    return (
      <FormControl {...formControlProps}>
        {label ? (
          <TextFieldLabel shrink id={labelId} htmlFor={props.id}>
            {label}
          </TextFieldLabel>
        ) : null}

        <TextFieldInput {...rest} aria-describedby={helperTextId} />

        {helperText ? (
          <TextFieldHelperText id={helperTextId}>
            {helperText}
          </TextFieldHelperText>
        ) : null}
      </FormControl>
    );
  }

  return <TextFieldInput {...rest} />;
};

export default TextField;

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = () => {
  return {
    MuiFilledInput: {
      defaultProps: {
        hiddenLabel: true,
      },
      styleOverrides: {
        root: {
          height: 58,
          backgroundColor: colors.white,
          borderRadius: 0,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderStyle: "solid",
          borderWidth: 2,
          borderBottom: 0,
          borderColor: `${colors.midnight}10`,
          transition: "border 120ms ease-out",
          ":hover": {
            backgroundColor: colors.white,
            "&:not(.Mui-disabled)": {
              "&:before": {
                borderBottom: `2px solid ${colors.blueRibbon}`,
              },
            },
          },
          "&:before": {
            borderBottom: "2px solid ",
            borderColor: colors.purple,
            transition: "border 120ms ease-out",
          },
          "&:after": {
            borderBottom: "2px solid ",
            borderColor: colors.blueRibbon,
            transition: "border 120ms ease-out",
          },
          "&.Mui-focused": {
            backgroundColor: colors.white,
            borderColor: colors.blueRibbon,
          },
          "&.Mui-disabled": {
            backgroundColor: `${colors.midnight}05`,
            borderColor: "transparent",
            "&:before": {
              borderBottomStyle: "solid",
              borderColor: `${colors.purple}05`,
            },
            "&:after": {
              borderColor: `${colors.purple}05`,
            },
          },
          "&.Mui-error": {
            "&.Mui-focused": {
              borderColor: colors.maroonFlush,
            },
            "&:not(.Mui-disabled)": {
              "&:after": {
                borderColor: colors.maroonFlush,
              },
            },
          },
        },
        input: {
          paddingTop: 0,
          paddingRight: 16,
          paddingBottom: 2, // vertically align the input text
          paddingLeft: 16,
          fontFamily: fonts.secondary,
          fontSize: "1.125rem",
          fontWeight: fontWeights.secondary.regular,
          color: colors.midnight,
          "::placeholder": {
            font: "inherit",
            opacity: 0.4,
          },
        },
      },
    },
  };
};
