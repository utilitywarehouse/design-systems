import type { ReactNode, LabelHTMLAttributes } from 'react';
import { Box, BoxProps } from '../Box';
import { pxToRem } from '../utils';
import { fonts, fontWeights } from '../tokens';
import { colors } from '@utilitywarehouse/colour-system';
import { SxProps } from '../types';

export interface LabelProps extends SxProps, LabelHTMLAttributes<HTMLLabelElement> {
  /** Sets the disabled prop, when true sets the label colour to grey */
  disabled?: boolean;
  /**
   * Sets the nested prop, when true will set the font-weight to regular. Use
   * this when nesting the labelled element inside a Fieldset, for instance if
   * labelling a Radio inside a RadioGroup.
   */
  nested?: boolean;
  /**
   * Sets the HTML component that is rendered.
   * @default label
   */
  component?: BoxProps['component'];
  children: ReactNode;
}

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * The Label component is used for labelling form elements, such as radio inputs.
 */
export const Label = ({ component = 'label', disabled, nested, sx, ...props }: LabelProps) => {
  const defaultColor = colors.grey1000;
  const disabledColor = colors.grey400;
  return (
    <Box
      component={component}
      color={disabled ? disabledColor : defaultColor}
      fontFamily={fonts.secondary}
      fontWeight={fontWeights.secondary[nested ? 'regular' : 'semibold']}
      fontSize={pxToRem(16)}
      lineHeight={pxToRem(24)}
      sx={{
        color: defaultColor,
        '[data-disabled] &': {
          color: disabledColor,
        },
        ...sx,
      }}
      {...props}
    />
  );
};

Label.displayName = 'Label';
