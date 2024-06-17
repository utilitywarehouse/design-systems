import * as React from 'react';
import { pxToRem } from '../utils';
import { colors } from '@utilitywarehouse/colour-system';
import { PropsWithSx } from '../types';
import { LabelProps } from './Label.props';
import { styled } from '../theme';
import { fontWeights, fonts } from '../tokens';
import { createBox } from '../Box';

const componentName = 'Label';
const BaseBox = createBox<'label'>({ componentName });

const StyledElement = styled(BaseBox)({
  fontFamily: fonts.secondary,
  fontSize: pxToRem(16),
  lineHeight: pxToRem(24),
  '--label-color': colors.grey1000,
  '--label-color-disabled': colors.grey400,
  '--label-font-weight': fontWeights.secondary.semibold,
  '--label-font-weight-nested': fontWeights.secondary.regular,
  color: 'var(--label-color)',
  fontWeight: 'var(--label-font-weight)',
  ':where([data-disabled],[data-disabled] &)': {
    '--label-color': 'var(--label-color-disabled)',
  },
  ':where([data-nested])': {
    '--label-font-weight': 'var(--label-font-weight-nested)',
  },
});

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * The Label component is used for labelling form elements, such as radio inputs.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be
 * > used standalone with other component libraries.
 */
export const Label = React.forwardRef<
  React.ElementRef<'label'>,
  React.PropsWithChildren<PropsWithSx<LabelProps>>
>(({ component = 'label', disabled, nested, ...props }, ref) => {
  return (
    <StyledElement
      ref={ref}
      component={component}
      data-disabled={disabled ? '' : undefined}
      data-nested={nested ? '' : undefined}
      {...props}
    />
  );
});

Label.displayName = componentName;
