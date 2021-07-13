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

export const desktopDefaultIdle: TextFieldElementsStyles = {
  ...(commonDefaultIdleStyles as TextFieldElementsStyles),
};

export const desktopDefaultHover: TextFieldElementsStyles = {
  ...(commonDefaultHoverStyles as TextFieldElementsStyles),
};

export const desktopDefaultFocus: TextFieldElementsStyles = {
  ...(commonDefaultFocusStyles as TextFieldElementsStyles),
};

export const desktopSuccessIdle: TextFieldElementsStyles = {
  ...(commonSuccessIdleStyles as TextFieldElementsStyles),
};

export const desktopSuccessHover: TextFieldElementsStyles = {
  ...(commonSuccessHoverStyles as TextFieldElementsStyles),
};

export const desktopSuccessFocus: TextFieldElementsStyles = {
  ...(commonSuccessFocusStyles as TextFieldElementsStyles),
};

export const desktopErrorIdle: TextFieldElementsStyles = {
  ...(commonErrorIdleStyles as TextFieldElementsStyles),
};

export const desktopErrorHover: TextFieldElementsStyles = {
  ...(commonErrorHoverStyles as TextFieldElementsStyles),
};

export const desktopErrorFocus: TextFieldElementsStyles = {
  ...(commonErrorFocusStyles as TextFieldElementsStyles),
};

export const desktopDisabledIdle: TextFieldElementsStyles = {
  ...(commonDisabledIdleStyles as TextFieldElementsStyles),
};

export const desktopDisabledHover: TextFieldElementsStyles = {
  ...(commonDisabledHoverStyles as TextFieldElementsStyles),
};

export const desktopDisabledFocus: TextFieldElementsStyles = {
  ...(commonDisabledFocusStyles as TextFieldElementsStyles),
};
