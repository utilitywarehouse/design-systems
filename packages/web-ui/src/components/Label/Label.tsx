import * as React from 'react';

import { components as componentTokens } from '@utilitywarehouse/design-tokens';

import type { LabelProps } from './Label.props';

import { createBox } from '../Box';

import { DATA_ATTRIBUTE_SELECTORS } from '../../helpers';
import { styled } from '../../theme';
import type { PropsWithSx } from '../../types';

const componentName = 'Label';
const BaseBox = createBox<'label'>({ componentName });

// const {
//   light: {
//     label: { fontFamily, fontSize, fontWeight, fontWeightNested, lineHeight, color, colorDisabled },
//   },
// } = componentTokens;

// const StyledElement = styled(BaseBox)({
//   fontFamily,
//   fontSize,
//   lineHeight,
//   color,
//   fontWeight,
//   ':where([data-disabled],[data-disabled] &)': {
//     color: colorDisabled,
//   },
//   ':where([data-nested])': {
//     fontWeight: fontWeightNested,
//   },
//   [DATA_ATTRIBUTE_SELECTORS.disableUserSelect]: {
//     userSelect: 'none',
//   },
// });

const {
  light: { label },
} = componentTokens;

const StyledElement = styled(BaseBox)({
  fontFamily: label.fontFamily,
  fontSize: label.fontSize,
  fontWeight: label.fontWeight,
  // fontWeight: label.fontWeight.default,
  lineHeight: label.lineHeight,
  color: label.color,
  // color: label.color.default,
  ':where([data-disabled],[data-disabled] &)': {
    color: label.colorDisabled,
    // color: label.color.disabled,
    // color: label.disabled.color,
  },
  ':where([data-nested])': {
    fontWeight: label.fontWeightNested,
    // fontWeight: label.fontWeight.nested,
    // fontWeight: label.nested.fontWeight,
  },
  [DATA_ATTRIBUTE_SELECTORS.disableUserSelect]: {
    userSelect: 'none',
  },
});

// const tokens = {
//   fontWeightSemibold: 600,
//   labelFontFamily: fontFamily,
//   labelFontSize: fontSize,
//   labelFontWeight: fontWeight,
// };
//
// const StyledElement = styled(BaseBox)({
//   fontFamily: tokens.labelFontFamily,
//   fontSize: tokens.labelFontSize,
//   fontWeight: tokens.labelFontWeight,
//   lineHeight,
//   color,
//   ':where([data-disabled],[data-disabled] &)': {
//     color: colorDisabled,
//   },
//   ':where([data-nested])': {
//     fontWeight: fontWeightNested,
//   },
//   [DATA_ATTRIBUTE_SELECTORS.disableUserSelect]: {
//     userSelect: 'none',
//   },
// });

// const labelTokens = {
//   'label-font-weight-nested': 400,
//   'label-font-weight': 600,
//   'label-color': '#121212',
//   'label-letter-spacing': 0,
//   'label-line-height': 1.5,
//   'label-color-disabled': '#a0a0a0',
//   'label-font-family': "'Work Sans', Arial, sans-serif",
//   'label-font-size': '1rem',
// };
// const StyledElement = styled(BaseBox)({
//   fontFamily: labelTokens['label-font-family'],
//   fontSize:labelTokens['label-font-size'],
//   lineHeight,
//   color,
//   fontWeight,
//   ':where([data-disabled],[data-disabled] &)': {
//     color: colorDisabled,
//   },
//   ':where([data-nested])': {
//     fontWeight: fontWeightNested,
//   },
//   [DATA_ATTRIBUTE_SELECTORS.disableUserSelect]: {
//     userSelect: 'none',
//   },
// });

/**
 * The Label component is used for labelling form elements, such as radio inputs.
 */
export const Label = React.forwardRef<
  React.ElementRef<'label'>,
  React.PropsWithChildren<PropsWithSx<LabelProps>>
>(({ component = 'label', disabled, nested, disableUserSelect, ...props }, ref) => {
  return (
    <StyledElement
      ref={ref}
      as={component}
      data-disabled={disabled ? '' : undefined}
      data-nested={nested ? '' : undefined}
      data-disable-user-select={disableUserSelect ? '' : undefined}
      {...props}
    />
  );
});

Label.displayName = componentName;
