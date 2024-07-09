import * as React from 'react';
import { DATA_ATTRIBUTE_SELECTORS, pxToRem } from '../utils';
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
  [DATA_ATTRIBUTE_SELECTORS.disableUserSelect]: {
    userSelect: 'none',
  },
});

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
      component={component}
      data-disabled={disabled ? '' : undefined}
      data-nested={nested ? '' : undefined}
      data-disable-user-select={disableUserSelect ? '' : undefined}
      {...props}
    />
  );
});

Label.displayName = componentName;
