import { ElementType, LabelHTMLAttributes, PropsWithChildren } from 'react';
import { pxToRem } from '../utils';
import { fonts, fontWeights } from '../tokens';
import { colors } from '@utilitywarehouse/colour-system';
import { PropsWithSx } from '../types';
import styled, { FunctionInterpolation } from '@emotion/styled';
import { unstable_styleFunctionSx as styleFunctionSx } from '@mui/system';

const displayName = 'Label';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
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
  component?: ElementType<any> | undefined;
}

const StyledLabel = styled('label', { label: displayName })<LabelProps>(
  styleFunctionSx as FunctionInterpolation<LabelProps>,
  ({ disabled, nested }) => {
    return {
      color: disabled ? colors.grey400 : colors.grey1000,
      fontFamily: fonts.secondary,
      fontWeight: fontWeights.secondary[nested ? 'regular' : 'semibold'],
      fontSize: pxToRem(16),
      lineHeight: pxToRem(24),
    };
  }
);

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * The Label component is used for labelling form elements, such as radio inputs.
 */
export const Label = ({
  component = 'label',
  ...props
}: PropsWithChildren<PropsWithSx<LabelProps>>) => {
  return <StyledLabel as={component} {...props} />;
};

Label.displayName = 'Label';
