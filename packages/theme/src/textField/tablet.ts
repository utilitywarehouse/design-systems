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

export const tabletDefaultIdle: TextFieldElementsStyles = {
  ...(commonDefaultIdleStyles as TextFieldElementsStyles),
};

export const tabletDefaultHover: TextFieldElementsStyles = {
  ...(commonDefaultHoverStyles as TextFieldElementsStyles),
};

export const tabletDefaultFocus: TextFieldElementsStyles = {
  ...(commonDefaultFocusStyles as TextFieldElementsStyles),
};

export const tabletSuccessIdle: TextFieldElementsStyles = {
  ...(commonSuccessIdleStyles as TextFieldElementsStyles),
};

export const tabletSuccessHover: TextFieldElementsStyles = {
  ...(commonSuccessHoverStyles as TextFieldElementsStyles),
};

export const tabletSuccessFocus: TextFieldElementsStyles = {
  ...(commonSuccessFocusStyles as TextFieldElementsStyles),
};

export const tabletErrorIdle: TextFieldElementsStyles = {
  ...(commonErrorIdleStyles as TextFieldElementsStyles),
};

export const tabletErrorHover: TextFieldElementsStyles = {
  ...(commonErrorHoverStyles as TextFieldElementsStyles),
};

export const tabletErrorFocus: TextFieldElementsStyles = {
  ...(commonErrorFocusStyles as TextFieldElementsStyles),
};

export const tabletDisabledIdle: TextFieldElementsStyles = {
  ...(commonDisabledIdleStyles as TextFieldElementsStyles),
};

export const tabletDisabledHover: TextFieldElementsStyles = {
  ...(commonDisabledHoverStyles as TextFieldElementsStyles),
};

export const tabletDisabledFocus: TextFieldElementsStyles = {
  ...(commonDisabledFocusStyles as TextFieldElementsStyles),
};
