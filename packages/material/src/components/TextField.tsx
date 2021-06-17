import React from "react";
import FilledInput, { FilledInputProps } from "@material-ui/core/FilledInput";
import { GetComponentThemeConfiguration } from "../lib/theme.types";
import { colors, fonts } from "@utilitywarehouse/customer-ui-design-tokens";

export type TextFieldProps = Omit<FilledInputProps, "hiddenLabel">;

const TextField = (props: TextFieldProps): JSX.Element => {
  return <FilledInput hiddenLabel {...props} />;
};

export default TextField;

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = () => {
  return {
    MuiFilledInput: {
      defaultProps: {},
      styleOverrides: {
        root: {
          backgroundColor: colors.white,
          borderRadius: 0,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          borderStyle: "solid",
          borderWidth: 2,
          borderBottom: 0,
          borderColor: colors.lightTint,
          transition: "border 120ms ease-out",
          ":hover": {
            backgroundColor: colors.white,
          },
          "&:before": {
            borderBottom: `2px solid ${colors.purple}`,
          },
          "&:after": {
            borderBottom: `2px solid ${colors.blueRibbon}`,
          },
          "&.Mui-focused": {
            backgroundColor: colors.white,
            borderColor: colors.blueRibbon,
          },
          "&.Mui-disabled": {
            "&:before": {
              borderBottom: `2px solid ${colors.whiteOwl}`,
            },
          },
          "&.Mui-error": {
            "&.Mui-focused": {
              borderColor: colors.maroonFlush,
            },
            "&:before": {
              borderBottom: `2px solid ${colors.maroonFlush}`,
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
        underline: {
          "&:hover": {
            "&:not(.Mui-disabled)": {
              "&:before": {
                borderBottom: `2px solid ${colors.blueRibbon}`,
              },
            },
          },
        },
      },
    },
  };
};
