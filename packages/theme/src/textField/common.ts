import {
  fonts,
  fontWeights,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { TextFieldElementsStyles } from "./types";
import { duration, easingFunction } from "../transitions";
import spacing from "../spacing";

const commonStyles = {
  wrapper: {
    marginBottom: spacing(3),
  },
  input: {
    fontFamily: fonts.secondary,
    fontSize: "1.125rem",
    fontWeight: fontWeights.secondary.regular,
    height: 58,
    borderRadius: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderStyle: "solid",
    borderWidth: 2,
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
    transition: `border ${duration}ms ${easingFunction}`,
  },
  label: {
    fontFamily: fonts.primary,
    fontWeight: fontWeights.primary,
    fontSize: "0.875rem",
    marginBottom: spacing(1),
  },
  helperText: {
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.secondary.regular,
    fontSize: "0.8125rem",
    margin: 0,
    marginTop: spacing(1),
  },
};

export const commonDefaultIdleStyles: TextFieldElementsStyles = {
  ...commonStyles,
};

export const commonDefaultHoverStyles: Partial<TextFieldElementsStyles> = {
  ...commonStyles,
};

export const commonDefaultFocusStyles: Partial<TextFieldElementsStyles> = {
  ...commonStyles,
};

export const commonSuccessIdleStyles: TextFieldElementsStyles = {
  ...commonStyles,
};

export const commonSuccessHoverStyles: Partial<TextFieldElementsStyles> = {
  ...commonStyles,
};

export const commonSuccessFocusStyles: Partial<TextFieldElementsStyles> = {
  ...commonStyles,
};

export const commonErrorIdleStyles: TextFieldElementsStyles = {
  ...commonStyles,
};

export const commonErrorHoverStyles: Partial<TextFieldElementsStyles> = {
  ...commonStyles,
};

export const commonErrorFocusStyles: Partial<TextFieldElementsStyles> = {
  ...commonStyles,
};

export const commonDisabledIdleStyles: TextFieldElementsStyles = {
  ...commonStyles,
};

export const commonDisabledHoverStyles: Partial<TextFieldElementsStyles> = {
  ...commonStyles,
};

export const commonDisabledFocusStyles: Partial<TextFieldElementsStyles> = {
  ...commonStyles,
};
