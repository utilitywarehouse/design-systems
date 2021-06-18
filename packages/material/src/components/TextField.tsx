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
        borderColor: colors.jewel,
        transition: "border 120ms ease-out",
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

const TextFieldLabel = styled(InputLabel)(({ theme }) => ({
  position: "relative",
  transform: "none",
  fontWeight: fontWeights.secondary.semibold,
  fontSize: "0.875rem",
  color: colors.midnight,
  paddingBottom: theme.spacing(0.5),
  "&.Mui-error": {
    color: colors.midnight,
  },
}));

const TextFieldHelperText = styled(FormHelperText)(({ theme }) => ({
  fontWeight: fontWeights.secondary.regular,
  fontSize: "0.75rem",
  color: colors.midnight,
  margin: 0,
  paddingTop: theme.spacing(0.5),
  "&.Mui-error": {
    color: colors.maroonFlush,
  },
}));

const TextField = (props: TextFieldProps): JSX.Element => {
  const { label, labelId, helperText, helperTextId, ...rest } = props;
  const { error, disabled } = rest;
  const formControlProps = { error, disabled };

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
          backgroundColor: colors.white,
          borderRadius: 0,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderStyle: "solid",
          borderWidth: 2,
          borderBottom: 0,
          borderColor: colors.lightTint,
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
            "&:before": {
              borderColor: colors.whiteOwl,
            },
          },
          "&.Mui-error": {
            "&.Mui-focused": {
              borderColor: colors.maroonFlush,
            },
            "&:after": {
              borderColor: colors.maroonFlush,
            },
          },
        },
        input: {
          height: 27, // + padding = 60px
          paddingTop: 16,
          paddingRight: 12,
          paddingBottom: 17,
          paddingLeft: 12,
          fontFamily: fonts.secondary,
        },
      },
    },
  };
};
