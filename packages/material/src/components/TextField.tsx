import React from "react";
import FilledInput, { FilledInputProps } from "@mui/material/FilledInput";
import {
  colors,
  fonts,
  fontWeights,
  transitions,
} from "@utilitywarehouse/customer-ui-design-tokens";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  styled,
  Box,
} from "../material/core";
import SuccessOutlined from "@utilitywarehouse/customer-ui-react-icons/24x24/SuccessOutlined";
import WarningOutlined from "@utilitywarehouse/customer-ui-react-icons/24x24/WarningOutlined";
import { customerUiPrefix, getHexOpacity } from "../utils";
import { Theme, Components } from "@mui/material/styles";
import { useBackground } from "./Background";

const PREFIX = `${customerUiPrefix}-TextField`;
export const textfieldClasses = {
  success: `${PREFIX}-success`,
  multiline: `${PREFIX}-multiline`,
};

const isSuccessStatus = (status?: string): boolean => status === "success";
const isErrorStatus = (status?: string): boolean => status === "error";

export interface TextFieldProps
  extends Omit<FilledInputProps, "hiddenLabel" | "error"> {
  status?: "success" | "error";
  label?: React.ReactNode;
  labelProps?: {
    id: string;
  };
  helperText?: React.ReactNode;
  helperTextProps?: {
    id: string;
  };
  multiline?: boolean;
}

const SuccessIcon = styled(SuccessOutlined)({ fill: colors.jewel });
const WarningIcon = styled(WarningOutlined)({ fill: colors.maroonFlush });
const IconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginLeft: theme.spacing(0.5),
}));

const TextFieldInput: React.FunctionComponent<TextFieldProps> = ({
  status,
  endAdornment,
  ...props
}) => {
  const showIcon = !props.disabled;
  const getClassName = () => {
    const classNames = [props.className];
    if (!props.disabled && isSuccessStatus(status)) {
      classNames.push(textfieldClasses.success);
    }
    if (props.multiline) {
      classNames.push(textfieldClasses.multiline);
    }
    return classNames.join(" ");
  };

  return (
    <FilledInput
      className={getClassName()}
      endAdornment={
        <>
          {showIcon && isErrorStatus(status) ? (
            <IconContainer>
              <WarningIcon />
            </IconContainer>
          ) : isSuccessStatus(status) ? (
            <IconContainer>
              <SuccessIcon />
            </IconContainer>
          ) : null}
          {endAdornment ? <IconContainer>{endAdornment}</IconContainer> : null}
        </>
      }
      {...props}
    />
  );
};

const TextField = (props: TextFieldProps): JSX.Element => {
  const { label, labelProps, helperText, helperTextProps, multiline, ...rest } =
    props;
  const { status, disabled } = rest;
  const hasErrorStatus = !disabled && isErrorStatus(status);
  const formControlProps = { error: hasErrorStatus, disabled };
  const { backgroundColor } = useBackground();

  // should only be used on white, light tint & cod grey backgrounds
  const validBackgroundColors = ["lightTint", "whiteOwl", "white"];
  if (!validBackgroundColors.includes(backgroundColor)) {
    console.warn(
      `Invalid backdrop level for the TextField component. The TextField component should only be used on the following backdrop levels [${validBackgroundColors
        .map((l) => `'${l}'`)
        .join(", ")}]`
    );
  }

  return (
    <FormControl fullWidth={true} {...formControlProps}>
      {label ? (
        <InputLabel shrink id={labelProps?.id} htmlFor={props.id}>
          {label}
        </InputLabel>
      ) : null}

      <TextFieldInput
        {...rest}
        multiline={multiline}
        aria-describedby={helperTextProps?.id}
      />

      {helperText ? (
        <FormHelperText id={helperTextProps?.id}>{helperText}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default TextField;

export const getTextFieldTheme = (theme: Theme): Components => {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          transition: `${transitions.duration}ms ${transitions.easingFunction}`,
          transitionProperty: "color",
          position: "relative",
          transform: "none",
          fontFamily: fonts.secondary,
          fontWeight: fontWeights.secondary.semibold,
          fontSize: theme.typography.pxToRem(16),
          lineHeight: 1,
          marginBottom: theme.spacing(1),
          color: colors.midnight,
          "&.Mui-disabled": {
            color: colors.codGray70,
          },
          "&.Mui-error": {
            color: colors.midnight,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: fonts.secondary,
          fontWeight: fontWeights.secondary.regular,
          fontSize: theme.typography.pxToRem(13),
          margin: 0,
          marginTop: theme.spacing(1),
          color: colors.midnight,
          "&.Mui-error": {
            color: colors.maroonFlush,
          },
        },
      },
    },
    MuiFilledInput: {
      defaultProps: {
        hiddenLabel: true,
      },
      styleOverrides: {
        root: {
          fontFamily: fonts.secondary,
          fontSize: theme.typography.pxToRem(18),
          fontWeight: fontWeights.secondary.regular,
          height: 58,
          borderRadius: 0,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderStyle: "solid",
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
          borderBottom: 0,
          color: colors.midnight,
          backgroundColor: colors.white,
          borderColor: `${colors.midnight}${getHexOpacity(0.1)}`,
          borderBottomColor: colors.purple,
          borderWidth: 2,
          transition: `border ${transitions.duration}ms ${transitions.easingFunction}`,
          ":hover": {
            backgroundColor: colors.white,
            borderBottomColor: colors.blueRibbon,
            "&:not(.Mui-disabled)": {
              "&:before": {
                borderWidth: 2,
                transition: `border ${transitions.duration}ms ${transitions.easingFunction}`,
                borderBottomColor: colors.blueRibbon,
              },
            },
          },
          "&:before": {
            borderColor: colors.purple,
            borderWidth: 2,
            transition: `border ${transitions.duration}ms ${transitions.easingFunction}`,
          },
          "&:after": {
            borderColor: colors.blueRibbon,
            borderWidth: 2,
            transition: `border ${transitions.duration}ms ${transitions.easingFunction}`,
          },
          "&.Mui-focused": {
            backgroundColor: colors.white,
            borderColor: colors.blueRibbon,
          },
          "&.Mui-disabled": {
            color: colors.midnight,
            backgroundColor: `${colors.midnight}05`,
            borderColor: "transparent",
            borderBottomColor: `${colors.purple}05`,
            transition: `all ${transitions.duration}ms ${transitions.easingFunction}`,
            "&:before": {
              borderColor: `${colors.purple}05`,
              borderBottomStyle: "solid",
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
          [`&.${textfieldClasses.success}`]: {
            ":before": {
              borderBottomColor: colors.jewel,
            },
            "&:after": {
              borderBottomColor: colors.jewel,
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
            "&:not(.Mui-disabled)": {
              borderBottomColor: colors.jewel,
            },
          },
          [`&.${textfieldClasses.multiline}`]: {
            // padding values differ slightly from non-multiline since a `textarea` is rendered rather than an `input`.
            paddingTop: 15,
            paddingBottom: 14,
            // height is overridden to allow the input to expand with any number of lines
            height: "auto",
            minHeight: 58,
          },
        },
        input: {
          padding: 0,
        },
      },
    },
  };
};
