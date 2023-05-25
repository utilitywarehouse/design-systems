import type { ReactNode, LabelHTMLAttributes } from 'react';
import { Box, BoxProps } from '../Box';
import { pxToRem } from '../utils';
import { fonts, fontWeights } from '../tokens';
import { colors } from '@utilitywarehouse/colour-system';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /** Sets the label content */
  children: ReactNode;
  /** Sets the disabled prop, when true sets the label colour to grey */
  disabled?: boolean;
  /**
   * Sets the nested prop, when true will set the font-weight to regular. Use
   * this when nesting the labelled element inside a Fieldset, for instance if
   * labelling a Radio inside a RadioGroup.
   */
  nested?: boolean;
  /**
   * Sets the HTML component that is rendered. While this component is
   * intended to be used as a `label` element, there may be times you need to
   * render a visual label within a larger label element. See the `RadioTile`
   * for an example of this.
   */
  component?: BoxProps['component'];
  sx?: BoxProps['sx'];
}

export const Label = ({ disabled, nested, sx, component = 'label', ...props }: LabelProps) => {
  return (
    <Box
      component={component}
      color={disabled ? colors.grey400 : colors.grey1000}
      fontFamily={fonts.secondary}
      fontWeight={fontWeights.secondary[nested ? 'regular' : 'semibold']}
      fontSize={pxToRem(16)}
      lineHeight={pxToRem(24)}
      sx={{ cursor: disabled ? 'auto' : 'pointer', ...sx }}
      {...props}
    />
  );
};

Label.displayName = 'Label';
