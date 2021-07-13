import { TextFieldElementsStyles } from "./types";
import {
  commonDefaultIdleStyles,
  commonDefaultHoverStyles,
  commonDefaultFocusStyles,
  commonSuccessIdleStyles,
  commonSuccessHoverStyles,
  commonSuccessFocusStyles,
  commonErrorIdleStyles,
  commonErrorHoverStyles,
  commonErrorFocusStyles,
  commonDisabledIdleStyles,
  commonDisabledHoverStyles,
  commonDisabledFocusStyles,
} from "./common";

export const mobileDefaultIdle: TextFieldElementsStyles = {
  ...(commonDefaultIdleStyles as TextFieldElementsStyles),
};

export const mobileDefaultHover: TextFieldElementsStyles = {
  ...(commonDefaultHoverStyles as TextFieldElementsStyles),
};

export const mobileDefaultFocus: TextFieldElementsStyles = {
  ...(commonDefaultFocusStyles as TextFieldElementsStyles),
};

export const mobileSuccessIdle: TextFieldElementsStyles = {
  ...(commonSuccessIdleStyles as TextFieldElementsStyles),
};

export const mobileSuccessHover: TextFieldElementsStyles = {
  ...(commonSuccessHoverStyles as TextFieldElementsStyles),
};

export const mobileSuccessFocus: TextFieldElementsStyles = {
  ...(commonSuccessFocusStyles as TextFieldElementsStyles),
};

export const mobileErrorIdle: TextFieldElementsStyles = {
  ...(commonErrorIdleStyles as TextFieldElementsStyles),
};

export const mobileErrorHover: TextFieldElementsStyles = {
  ...(commonErrorHoverStyles as TextFieldElementsStyles),
};

export const mobileErrorFocus: TextFieldElementsStyles = {
  ...(commonErrorFocusStyles as TextFieldElementsStyles),
};

export const mobileDisabledIdle: TextFieldElementsStyles = {
  ...(commonDisabledIdleStyles as TextFieldElementsStyles),
};

export const mobileDisabledHover: TextFieldElementsStyles = {
  ...(commonDisabledHoverStyles as TextFieldElementsStyles),
};

export const mobileDisabledFocus: TextFieldElementsStyles = {
  ...(commonDisabledFocusStyles as TextFieldElementsStyles),
};
