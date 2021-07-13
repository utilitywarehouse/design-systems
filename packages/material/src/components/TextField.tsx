import React from "react";
import FilledInput, { FilledInputProps } from "@material-ui/core/FilledInput";
import { GetComponentThemeConfiguration } from "../lib/theme.types";
import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  styled,
} from "../material/core";
import { useTheme } from "..";
import assert from "assert";
import SuccessOutlined from "@utilitywarehouse/customer-ui-react-icons/24x24/SuccessOutlined";
import WarningOutlined from "@utilitywarehouse/customer-ui-react-icons/24x24/WarningOutlined";

const isSuccessStatus = (status?: string): boolean => "success" === status;
const isErrorStatus = (status?: string): boolean => "error" === status;

export interface TextFieldProps extends Omit<FilledInputProps, "hiddenLabel"> {
  status?: "success" | "error";
  label?: React.ReactNode;
  labelProps?: {
    id: string;
  };
  helperText?: React.ReactNode;
  helperTextProps?: {
    id: string;
  };
}

const SuccessIcon = styled(SuccessOutlined)({ fill: colors.jewel });
const WarningIcon = styled(WarningOutlined)({ fill: colors.maroonFlush });

const TextFieldInput: React.FunctionComponent<TextFieldProps> = ({
  status,
  ...props
}) => {
  const shouldShowTheIcon = !props.disabled;
  return (
    <FilledInput
      className={
        !props.disabled && isSuccessStatus(status) && !isErrorStatus(status)
          ? "successState"
          : undefined
      }
      endAdornment={
        shouldShowTheIcon &&
        (isErrorStatus(status) ? (
          <WarningIcon />
        ) : isSuccessStatus(status) ? (
          <SuccessIcon />
        ) : null)
      }
      {...props}
    />
  );
};

const TextField = (props: TextFieldProps): JSX.Element => {
  const { label, labelProps, helperText, helperTextProps, ...rest } = props;
  const { status, disabled } = rest;
  const hasErrorStatus = !disabled && isErrorStatus(status);
  const hasSuccessStatus =
    !disabled && isSuccessStatus(status) && !hasErrorStatus;
  const formControlProps = { error: hasErrorStatus, disabled };
  const { backdropLevel } = useTheme();

  // only allow use on white, light tint & cod grey backgrounds
  const validBackgroundLevels = ["level3", "level4", "level5"];
  assert(
    validBackgroundLevels.includes(backdropLevel),
    `Invalid background color: '${backdropLevel}'. Should be one of [${validBackgroundLevels
      .map((l) => `'${l}'`)
      .join(", ")}]`
  );

  return (
    <FormControl fullWidth={true} {...formControlProps}>
      {label ? (
        <InputLabel
          shrink
          id={labelProps?.id}
          htmlFor={props.id}
          className={hasSuccessStatus ? "successState" : undefined}
        >
          {label}
        </InputLabel>
      ) : null}

      <TextFieldInput
        {...rest}
        error={hasErrorStatus}
        aria-describedby={helperTextProps?.id}
      />

      <FormHelperText
        filled={!!helperText}
        id={helperTextProps?.id}
        className={hasSuccessStatus ? "successState" : undefined}
      >
        {helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default TextField;

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = (
  theme,
  muiTheme
) => {
  console.log(theme.components.textField.mobile.default, "kurde theme");
  return {
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom:
            theme.components.textField.mobile.default.idle.input.marginBottom,
          [muiTheme.breakpoints.up("tablet")]: {
            marginBottom:
              theme.components.textField.tablet.default.idle.input.marginBottom,
          },
          [muiTheme.breakpoints.up("desktop")]: {
            marginBottom:
              theme.components.textField.desktop.default.idle.input
                .marginBottom,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...theme.components.textField.mobile.default.idle.label,
          position: "relative",
          transform: "none",
          [muiTheme.breakpoints.up("tablet")]: {
            ...theme.components.textField.tablet.default.idle.label,
            position: "relative",
            transform: "none",
          },
          [muiTheme.breakpoints.up("desktop")]: {
            ...theme.components.textField.desktop.default.idle.label,
            position: "relative",
            transform: "none",
          },
          "&.Mui-error": {
            ...theme.components.textField.mobile.error.idle.label,
            [muiTheme.breakpoints.up("tablet")]: {
              ...theme.components.textField.tablet.error.idle.label,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              ...theme.components.textField.desktop.error.idle.label,
            },
          },
          "&.successState": {
            ...theme.components.textField.mobile.success.idle.label,
            [muiTheme.breakpoints.up("tablet")]: {
              ...theme.components.textField.tablet.success.idle.label,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              ...theme.components.textField.desktop.success.idle.label,
            },
          },
          "&.Mui-disabled": {
            ...theme.components.textField.mobile.disabled.idle.label,
            [muiTheme.breakpoints.up("tablet")]: {
              ...theme.components.textField.tablet.disabled.idle.label,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              ...theme.components.textField.desktop.disabled.idle.label,
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          ...theme.components.textField.mobile.default.idle.helperText,
          [muiTheme.breakpoints.up("tablet")]: {
            ...theme.components.textField.tablet.default.idle.helperText,
          },
          [muiTheme.breakpoints.up("desktop")]: {
            ...theme.components.textField.desktop.default.idle.helperText,
          },
          "&.Mui-error": {
            ...theme.components.textField.mobile.error.idle.helperText,
            [muiTheme.breakpoints.up("tablet")]: {
              ...theme.components.textField.tablet.error.idle.helperText,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              ...theme.components.textField.desktop.error.idle.helperText,
            },
          },
          "&.successState": {
            ...theme.components.textField.mobile.success.idle.helperText,
            [muiTheme.breakpoints.up("tablet")]: {
              ...theme.components.textField.tablet.success.idle.helperText,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              ...theme.components.textField.desktop.success.idle.helperText,
            },
          },
          "&.Mui-disabled": {
            ...theme.components.textField.mobile.disabled.idle.helperText,
            [muiTheme.breakpoints.up("tablet")]: {
              ...theme.components.textField.tablet.disabled.idle.helperText,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              ...theme.components.textField.desktop.disabled.idle.helperText,
            },
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
          ...theme.components.textField.mobile.default.idle.input,
          borderBottom: 0,
          [muiTheme.breakpoints.up("tablet")]: {
            ...theme.components.textField.tablet.default.idle.input,
            borderBottom: 0,
          },
          [muiTheme.breakpoints.up("desktop")]: {
            ...theme.components.textField.desktop.default.idle.input,
            borderBottom: 0,
          },
          ":hover": {
            backgroundColor:
              theme.components.textField.mobile.default.hover.input
                .backgroundColor,
            [muiTheme.breakpoints.up("tablet")]: {
              backgroundColor:
                theme.components.textField.tablet.default.hover.input
                  .backgroundColor,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              backgroundColor:
                theme.components.textField.desktop.default.hover.input
                  .backgroundColor,
            },
            "&:not(.Mui-disabled)": {
              "&:before": {
                transition:
                  theme.components.textField.mobile.default.hover.input
                    .transition,
                borderWidth:
                  theme.components.textField.mobile.default.hover.input
                    .borderWidth,
                borderBottomColor:
                  theme.components.textField.mobile.default.hover.input
                    .borderBottomColor,
                [muiTheme.breakpoints.up("tablet")]: {
                  transition:
                    theme.components.textField.tablet.default.hover.input
                      .transition,
                  borderWidth:
                    theme.components.textField.tablet.default.hover.input
                      .borderWidth,
                  borderBottomColor:
                    theme.components.textField.tablet.default.hover.input
                      .borderBottomColor,
                },
                [muiTheme.breakpoints.up("desktop")]: {
                  transition:
                    theme.components.textField.desktop.default.hover.input
                      .transition,
                  borderWidth:
                    theme.components.textField.desktop.default.hover.input
                      .borderWidth,
                  borderBottomColor:
                    theme.components.textField.desktop.default.hover.input
                      .borderBottomColor,
                },
              },
            },
          },
          "&:before": {
            borderWidth:
              theme.components.textField.mobile.default.idle.input.borderWidth,
            borderColor:
              theme.components.textField.mobile.default.idle.input
                .borderBottomColor,
            transition:
              theme.components.textField.mobile.default.idle.input.transition,
            [muiTheme.breakpoints.up("tablet")]: {
              borderWidth:
                theme.components.textField.tablet.default.idle.input
                  .borderWidth,
              borderColor:
                theme.components.textField.tablet.default.idle.input
                  .borderBottomColor,
              transition:
                theme.components.textField.tablet.default.idle.input.transition,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              borderWidth:
                theme.components.textField.desktop.default.idle.input
                  .borderWidth,
              borderColor:
                theme.components.textField.desktop.default.idle.input
                  .borderBottomColor,
              transition:
                theme.components.textField.desktop.default.idle.input
                  .transition,
            },
          },
          "&:after": {
            borderWidth:
              theme.components.textField.mobile.default.hover.input.borderWidth,
            borderColor:
              theme.components.textField.mobile.default.hover.input
                .borderBottomColor,
            transition:
              theme.components.textField.mobile.default.hover.input.transition,
            [muiTheme.breakpoints.up("tablet")]: {
              borderWidth:
                theme.components.textField.tablet.default.hover.input
                  .borderWidth,
              borderColor:
                theme.components.textField.tablet.default.hover.input
                  .borderBottomColor,
              transition:
                theme.components.textField.tablet.default.hover.input
                  .transition,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              borderWidth:
                theme.components.textField.desktop.default.hover.input
                  .borderWidth,
              borderColor:
                theme.components.textField.desktop.default.hover.input
                  .borderBottomColor,
              transition:
                theme.components.textField.desktop.default.hover.input
                  .transition,
            },
          },
          "&.Mui-focused": {
            backgroundColor:
              theme.components.textField.mobile.default.focus.input
                .backgroundColor,
            borderColor:
              theme.components.textField.mobile.default.focus.input.borderColor,
            [muiTheme.breakpoints.up("tablet")]: {
              backgroundColor:
                theme.components.textField.tablet.default.focus.input
                  .backgroundColor,
              borderColor:
                theme.components.textField.tablet.default.focus.input
                  .borderColor,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              backgroundColor:
                theme.components.textField.desktop.default.focus.input
                  .backgroundColor,
              borderColor:
                theme.components.textField.desktop.default.focus.input
                  .borderColor,
            },
          },
          "&.Mui-disabled": {
            backgroundColor:
              theme.components.textField.mobile.disabled.idle.input
                .backgroundColor,
            borderColor:
              theme.components.textField.mobile.disabled.idle.input.borderColor,
            [muiTheme.breakpoints.up("tablet")]: {
              backgroundColor:
                theme.components.textField.tablet.disabled.idle.input
                  .backgroundColor,
              borderColor:
                theme.components.textField.tablet.disabled.idle.input
                  .borderColor,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              backgroundColor:
                theme.components.textField.desktop.disabled.idle.input
                  .backgroundColor,
              borderColor:
                theme.components.textField.desktop.disabled.idle.input
                  .borderColor,
            },
            "&:before": {
              borderColor:
                theme.components.textField.mobile.disabled.idle.input
                  .borderBottomColor,
              borderBottomStyle:
                theme.components.textField.mobile.disabled.idle.input
                  .borderStyle,
              [muiTheme.breakpoints.up("tablet")]: {
                borderColor:
                  theme.components.textField.tablet.disabled.idle.input
                    .borderBottomColor,
                borderBottomStyle:
                  theme.components.textField.tablet.disabled.idle.input
                    .borderStyle,
              },
              [muiTheme.breakpoints.up("desktop")]: {
                borderColor:
                  theme.components.textField.desktop.disabled.idle.input
                    .borderBottomColor,
                borderBottomStyle:
                  theme.components.textField.desktop.disabled.idle.input
                    .borderStyle,
              },
            },
            "&:after": {
              borderColor:
                theme.components.textField.mobile.disabled.idle.input
                  .borderBottomColor,
              [muiTheme.breakpoints.up("tablet")]: {
                borderColor:
                  theme.components.textField.tablet.disabled.idle.input
                    .borderBottomColor,
              },
              [muiTheme.breakpoints.up("desktop")]: {
                borderColor:
                  theme.components.textField.desktop.disabled.idle.input
                    .borderBottomColor,
              },
            },
          },
          "&.Mui-error": {
            "&.Mui-focused": {
              borderColor:
                theme.components.textField.mobile.error.focus.input.borderColor,
              [muiTheme.breakpoints.up("tablet")]: {
                borderColor:
                  theme.components.textField.tablet.error.focus.input
                    .borderColor,
              },
              [muiTheme.breakpoints.up("desktop")]: {
                borderColor:
                  theme.components.textField.desktop.error.focus.input
                    .borderColor,
              },
            },
            "&:not(.Mui-disabled)": {
              "&:after": {
                borderColor:
                  theme.components.textField.mobile.error.idle.input
                    .borderBottomColor,
                [muiTheme.breakpoints.up("tablet")]: {
                  borderColor:
                    theme.components.textField.tablet.error.idle.input
                      .borderBottomColor,
                },
                [muiTheme.breakpoints.up("desktop")]: {
                  borderColor:
                    theme.components.textField.desktop.error.idle.input
                      .borderBottomColor,
                },
              },
            },
          },
          "&.successState": {
            ":before": {
              borderBottomColor:
                theme.components.textField.mobile.success.idle.input
                  .borderBottomColor,
              [muiTheme.breakpoints.up("tablet")]: {
                borderBottomColor:
                  theme.components.textField.tablet.success.idle.input
                    .borderBottomColor,
              },
              [muiTheme.breakpoints.up("desktop")]: {
                borderBottomColor:
                  theme.components.textField.desktop.success.idle.input
                    .borderBottomColor,
              },
            },
            "&:after": {
              borderBottomColor:
                theme.components.textField.mobile.success.hover.input
                  .borderBottomColor,
              [muiTheme.breakpoints.up("tablet")]: {
                borderBottomColor:
                  theme.components.textField.tablet.success.hover.input
                    .borderBottomColor,
              },
              [muiTheme.breakpoints.up("desktop")]: {
                borderBottomColor:
                  theme.components.textField.desktop.success.hover.input
                    .borderBottomColor,
              },
            },
            ":hover": {
              "&:not(.Mui-disabled)": {
                "&:before": {
                  borderColor:
                    theme.components.textField.mobile.success.hover.input
                      .borderBottomColor,
                  [muiTheme.breakpoints.up("tablet")]: {
                    borderColor:
                      theme.components.textField.tablet.success.hover.input
                        .borderBottomColor,
                  },
                  [muiTheme.breakpoints.up("desktop")]: {
                    borderColor:
                      theme.components.textField.desktop.success.hover.input
                        .borderBottomColor,
                  },
                },
              },
            },
            "&.Mui-focused": {
              borderColor:
                theme.components.textField.mobile.success.focus.input
                  .borderBottomColor,
              [muiTheme.breakpoints.up("tablet")]: {
                borderColor:
                  theme.components.textField.tablet.success.focus.input
                    .borderBottomColor,
              },
              [muiTheme.breakpoints.up("desktop")]: {
                borderColor:
                  theme.components.textField.desktop.success.focus.input
                    .borderBottomColor,
              },
            },
            "&:not(.Mui-disabled)": {
              borderBottomColor:
                theme.components.textField.mobile.success.idle.input
                  .borderBottomColor,
              [muiTheme.breakpoints.up("tablet")]: {
                borderBottomColor:
                  theme.components.textField.tablet.success.idle.input
                    .borderBottomColor,
              },
              [muiTheme.breakpoints.up("desktop")]: {
                borderBottomColor:
                  theme.components.textField.desktop.success.idle.input
                    .borderBottomColor,
              },
            },
          },
        },
        input: {
          padding: 0,
        },
      },
    },
  };
};
