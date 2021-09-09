import React from "react";
import FilledInput, { FilledInputProps } from "@material-ui/core/FilledInput";
import { GetComponentThemeConfiguration } from "../lib/theme.types";
import {
  colors,
  spacingBase,
} from "@utilitywarehouse/customer-ui-design-tokens";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  styled,
  Box,
} from "../material/core";
import { useTheme } from "..";
import SuccessOutlined from "@utilitywarehouse/customer-ui-react-icons/24x24/SuccessOutlined";
import WarningOutlined from "@utilitywarehouse/customer-ui-react-icons/24x24/WarningOutlined";

export enum Classes {
  SUCCESS_STATE = "successState",
  MULTILINE = "multiline",
}

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
  multiline: boolean;
}

const SuccessIcon = styled(SuccessOutlined)({ fill: colors.jewel });
const WarningIcon = styled(WarningOutlined)({ fill: colors.maroonFlush });
const IconContainer = styled(Box)({
  display: "flex",
  marginLeft: 0.5 * spacingBase,
});

const TextFieldInput: React.FunctionComponent<TextFieldProps> = ({
  status,
  endAdornment,
  ...props
}) => {
  const shouldShowTheIcon = !props.disabled;
  const getClassName = () => {
    const classes = [props.className];

    if (!props.disabled && isSuccessStatus(status)) {
      classes.push(Classes.SUCCESS_STATE);
    }

    if (props.multiline) {
      classes.push(Classes.MULTILINE);
    }

    return classes.join(" ");
  };
  return (
    <FilledInput
      className={getClassName()}
      endAdornment={
        <>
          {shouldShowTheIcon && isErrorStatus(status) ? (
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
  const {
    label,
    labelProps,
    helperText,
    helperTextProps,
    multiline,
    ...rest
  } = props;
  const { status, disabled } = rest;
  const hasErrorStatus = !disabled && isErrorStatus(status);
  const hasSuccessStatus =
    !disabled && isSuccessStatus(status) && !hasErrorStatus;
  const formControlProps = { error: hasErrorStatus, disabled };
  const { backdropLevel, colorScheme } = useTheme();

  // only allow use on white, light tint & cod grey backgrounds
  const validBackdropLevels = ["level3", "level4", "level5"];
  if (colorScheme === "light" && !validBackdropLevels.includes(backdropLevel)) {
    console.warn(
      `Invalid backdrop level for the TextField component. The TextField component should only be used on the following backdrop levels [${validBackdropLevels
        .map((l) => `'${l}'`)
        .join(", ")}]`
    );
  }

  return (
    <FormControl fullWidth={true} {...formControlProps}>
      {label ? (
        <InputLabel
          shrink
          id={labelProps?.id}
          htmlFor={props.id}
          className={hasSuccessStatus ? Classes.SUCCESS_STATE : undefined}
        >
          {label}
        </InputLabel>
      ) : null}

      <TextFieldInput
        {...rest}
        multiline={multiline}
        aria-describedby={helperTextProps?.id}
      />

      {helperText ? (
        <FormHelperText
          id={helperTextProps?.id}
          className={hasSuccessStatus ? Classes.SUCCESS_STATE : undefined}
        >
          {helperText}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default TextField;

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = (
  theme,
  muiTheme
) => {
  const mobileTheme = theme.components.textField.mobile;
  const tabletTheme = theme.components.textField.tablet;
  const desktopTheme = theme.components.textField.desktop;

  return {
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: mobileTheme.default.idle.input.marginBottom,
          [muiTheme.breakpoints.up("tablet")]: {
            marginBottom: tabletTheme.default.idle.input.marginBottom,
          },
          [muiTheme.breakpoints.up("desktop")]: {
            marginBottom: desktopTheme.default.idle.input.marginBottom,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...mobileTheme.default.idle.label,
          position: "relative",
          transform: "none",
          [muiTheme.breakpoints.up("tablet")]: {
            ...tabletTheme.default.idle.label,
            position: "relative",
            transform: "none",
          },
          [muiTheme.breakpoints.up("desktop")]: {
            ...desktopTheme.default.idle.label,
            position: "relative",
            transform: "none",
          },
          "&.Mui-error": {
            ...mobileTheme.error.idle.label,
            [muiTheme.breakpoints.up("tablet")]: {
              ...tabletTheme.error.idle.label,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              ...desktopTheme.error.idle.label,
            },
          },
          [`&.${Classes.SUCCESS_STATE}`]: {
            ...mobileTheme.success.idle.label,
            [muiTheme.breakpoints.up("tablet")]: {
              ...tabletTheme.success.idle.label,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              ...desktopTheme.success.idle.label,
            },
          },
          "&.Mui-disabled": {
            ...mobileTheme.disabled.idle.label,
            [muiTheme.breakpoints.up("tablet")]: {
              ...tabletTheme.disabled.idle.label,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              ...desktopTheme.disabled.idle.label,
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          ...mobileTheme.default.idle.helperText,
          [muiTheme.breakpoints.up("tablet")]: {
            ...tabletTheme.default.idle.helperText,
          },
          [muiTheme.breakpoints.up("desktop")]: {
            ...desktopTheme.default.idle.helperText,
          },
          "&.Mui-error": {
            ...mobileTheme.error.idle.helperText,
            [muiTheme.breakpoints.up("tablet")]: {
              ...tabletTheme.error.idle.helperText,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              ...desktopTheme.error.idle.helperText,
            },
          },
          [`&.${Classes.SUCCESS_STATE}`]: {
            ...mobileTheme.success.idle.helperText,
            [muiTheme.breakpoints.up("tablet")]: {
              ...tabletTheme.success.idle.helperText,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              ...desktopTheme.success.idle.helperText,
            },
          },
          "&.Mui-disabled": {
            ...mobileTheme.disabled.idle.helperText,
            [muiTheme.breakpoints.up("tablet")]: {
              ...tabletTheme.disabled.idle.helperText,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              ...desktopTheme.disabled.idle.helperText,
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
          ...mobileTheme.default.idle.input,
          borderBottom: 0,
          [muiTheme.breakpoints.up("tablet")]: {
            ...tabletTheme.default.idle.input,
            borderBottom: 0,
          },
          [muiTheme.breakpoints.up("desktop")]: {
            ...desktopTheme.default.idle.input,
            borderBottom: 0,
          },
          ":hover": {
            backgroundColor: mobileTheme.default.hover.input.backgroundColor,
            [muiTheme.breakpoints.up("tablet")]: {
              backgroundColor: tabletTheme.default.hover.input.backgroundColor,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              backgroundColor: desktopTheme.default.hover.input.backgroundColor,
            },
            "&:not(.Mui-disabled)": {
              "&:before": {
                transition: mobileTheme.default.hover.input.transition,
                borderWidth: mobileTheme.default.hover.input.borderWidth,
                borderBottomColor:
                  mobileTheme.default.hover.input.borderBottomColor,
                [muiTheme.breakpoints.up("tablet")]: {
                  transition: tabletTheme.default.hover.input.transition,
                  borderWidth: tabletTheme.default.hover.input.borderWidth,
                  borderBottomColor:
                    tabletTheme.default.hover.input.borderBottomColor,
                },
                [muiTheme.breakpoints.up("desktop")]: {
                  transition: desktopTheme.default.hover.input.transition,
                  borderWidth: desktopTheme.default.hover.input.borderWidth,
                  borderBottomColor:
                    desktopTheme.default.hover.input.borderBottomColor,
                },
              },
            },
          },
          "&:before": {
            borderWidth: mobileTheme.default.idle.input.borderWidth,
            borderColor: mobileTheme.default.idle.input.borderBottomColor,
            transition: mobileTheme.default.idle.input.transition,
            [muiTheme.breakpoints.up("tablet")]: {
              borderWidth: tabletTheme.default.idle.input.borderWidth,
              borderColor: tabletTheme.default.idle.input.borderBottomColor,
              transition: tabletTheme.default.idle.input.transition,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              borderWidth: desktopTheme.default.idle.input.borderWidth,
              borderColor: desktopTheme.default.idle.input.borderBottomColor,
              transition: desktopTheme.default.idle.input.transition,
            },
          },
          "&:after": {
            borderWidth: mobileTheme.default.hover.input.borderWidth,
            borderColor: mobileTheme.default.hover.input.borderBottomColor,
            transition: mobileTheme.default.hover.input.transition,
            [muiTheme.breakpoints.up("tablet")]: {
              borderWidth: tabletTheme.default.hover.input.borderWidth,
              borderColor: tabletTheme.default.hover.input.borderBottomColor,
              transition: tabletTheme.default.hover.input.transition,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              borderWidth: desktopTheme.default.hover.input.borderWidth,
              borderColor: desktopTheme.default.hover.input.borderBottomColor,
              transition: desktopTheme.default.hover.input.transition,
            },
          },
          "&.Mui-focused": {
            backgroundColor: mobileTheme.default.focus.input.backgroundColor,
            borderColor: mobileTheme.default.focus.input.borderColor,
            [muiTheme.breakpoints.up("tablet")]: {
              backgroundColor: tabletTheme.default.focus.input.backgroundColor,
              borderColor: tabletTheme.default.focus.input.borderColor,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              backgroundColor: desktopTheme.default.focus.input.backgroundColor,
              borderColor: desktopTheme.default.focus.input.borderColor,
            },
          },
          "&.Mui-disabled": {
            backgroundColor: mobileTheme.disabled.idle.input.backgroundColor,
            borderColor: mobileTheme.disabled.idle.input.borderColor,
            [muiTheme.breakpoints.up("tablet")]: {
              backgroundColor: tabletTheme.disabled.idle.input.backgroundColor,
              borderColor: tabletTheme.disabled.idle.input.borderColor,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              backgroundColor: desktopTheme.disabled.idle.input.backgroundColor,
              borderColor: desktopTheme.disabled.idle.input.borderColor,
            },
            "&:before": {
              borderColor: mobileTheme.disabled.idle.input.borderBottomColor,
              borderBottomStyle: mobileTheme.disabled.idle.input.borderStyle,
              [muiTheme.breakpoints.up("tablet")]: {
                borderColor: tabletTheme.disabled.idle.input.borderBottomColor,
                borderBottomStyle: tabletTheme.disabled.idle.input.borderStyle,
              },
              [muiTheme.breakpoints.up("desktop")]: {
                borderColor: desktopTheme.disabled.idle.input.borderBottomColor,
                borderBottomStyle: desktopTheme.disabled.idle.input.borderStyle,
              },
            },
            "&:after": {
              borderColor: mobileTheme.disabled.idle.input.borderBottomColor,
              [muiTheme.breakpoints.up("tablet")]: {
                borderColor: tabletTheme.disabled.idle.input.borderBottomColor,
              },
              [muiTheme.breakpoints.up("desktop")]: {
                borderColor: desktopTheme.disabled.idle.input.borderBottomColor,
              },
            },
          },
          "&.Mui-error": {
            "&.Mui-focused": {
              borderColor: mobileTheme.error.focus.input.borderColor,
              [muiTheme.breakpoints.up("tablet")]: {
                borderColor: tabletTheme.error.focus.input.borderColor,
              },
              [muiTheme.breakpoints.up("desktop")]: {
                borderColor: desktopTheme.error.focus.input.borderColor,
              },
            },
            "&:not(.Mui-disabled)": {
              "&:after": {
                borderColor: mobileTheme.error.idle.input.borderBottomColor,
                [muiTheme.breakpoints.up("tablet")]: {
                  borderColor: tabletTheme.error.idle.input.borderBottomColor,
                },
                [muiTheme.breakpoints.up("desktop")]: {
                  borderColor: desktopTheme.error.idle.input.borderBottomColor,
                },
              },
            },
          },
          [`&.${Classes.SUCCESS_STATE}`]: {
            ":before": {
              borderBottomColor:
                mobileTheme.success.idle.input.borderBottomColor,
              [muiTheme.breakpoints.up("tablet")]: {
                borderBottomColor:
                  tabletTheme.success.idle.input.borderBottomColor,
              },
              [muiTheme.breakpoints.up("desktop")]: {
                borderBottomColor:
                  desktopTheme.success.idle.input.borderBottomColor,
              },
            },
            "&:after": {
              borderBottomColor:
                mobileTheme.success.hover.input.borderBottomColor,
              [muiTheme.breakpoints.up("tablet")]: {
                borderBottomColor:
                  tabletTheme.success.hover.input.borderBottomColor,
              },
              [muiTheme.breakpoints.up("desktop")]: {
                borderBottomColor:
                  desktopTheme.success.hover.input.borderBottomColor,
              },
            },
            ":hover": {
              "&:not(.Mui-disabled)": {
                "&:before": {
                  borderColor:
                    mobileTheme.success.hover.input.borderBottomColor,
                  [muiTheme.breakpoints.up("tablet")]: {
                    borderColor:
                      tabletTheme.success.hover.input.borderBottomColor,
                  },
                  [muiTheme.breakpoints.up("desktop")]: {
                    borderColor:
                      desktopTheme.success.hover.input.borderBottomColor,
                  },
                },
              },
            },
            "&.Mui-focused": {
              borderColor: mobileTheme.success.focus.input.borderBottomColor,
              [muiTheme.breakpoints.up("tablet")]: {
                borderColor: tabletTheme.success.focus.input.borderBottomColor,
              },
              [muiTheme.breakpoints.up("desktop")]: {
                borderColor: desktopTheme.success.focus.input.borderBottomColor,
              },
            },
            "&:not(.Mui-disabled)": {
              borderBottomColor:
                mobileTheme.success.idle.input.borderBottomColor,
              [muiTheme.breakpoints.up("tablet")]: {
                borderBottomColor:
                  tabletTheme.success.idle.input.borderBottomColor,
              },
              [muiTheme.breakpoints.up("desktop")]: {
                borderBottomColor:
                  desktopTheme.success.idle.input.borderBottomColor,
              },
            },
          },
          [`&.${Classes.MULTILINE}`]: {
            // padding values differ slightly from non-multiline since a `textarea` is rendered rather than an `input`.
            paddingTop: 16,
            paddingBottom: 15,

            // height is overridden to allow the input to expand with any number of lines
            height: "auto",
            minHeight: mobileTheme.default.idle.input.height,
            [muiTheme.breakpoints.up("tablet")]: {
              minHeight: tabletTheme.default.idle.input.height,
            },
            [muiTheme.breakpoints.up("desktop")]: {
              minHeight: desktopTheme.default.idle.input.height,
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
