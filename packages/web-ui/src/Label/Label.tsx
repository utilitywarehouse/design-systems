import * as React from 'react';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { withGlobalPrefix, pxToRem, DATA_ATTRIBUTE_SELECTORS, DATA_ATTRIBUTES } from '../utils';
import { colors } from '@utilitywarehouse/colour-system';
import { PropsWithSx } from '../types';
import { LabelProps } from './Label.props';
import { Typography } from '../Typography';
import clsx from 'clsx';
import { styled } from '../theme';
import { fontWeights } from '../tokens';

const componentName = 'Label';
const componentClassName = withGlobalPrefix(componentName);

const StyledElement = styled(Typography)({
  '--label-color': colors.grey1000,
  '--label-color-disabled': colors.grey400,
  '--label-font-weight': fontWeights.secondary.semibold,
  '--label-font-weight-nested': fontWeights.secondary.regular,
  color: 'var(--label-color)',
  fontWeight: 'var(--label-font-weight)',
  [DATA_ATTRIBUTE_SELECTORS.disabled]: {
    '--label-color': 'var(--label-color-disabled)',
  },
  [DATA_ATTRIBUTE_SELECTORS.nested]: {
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
export const Label = forwardRef<ElementRef<'label'>, PropsWithChildren<PropsWithSx<LabelProps>>>(
  ({ component = 'label', disabled, nested, className, ...props }, ref) => {
    const dataAttributeProps = {
      [DATA_ATTRIBUTES.disabled]: disabled ? '' : undefined,
      [DATA_ATTRIBUTES.nested]: nested ? '' : undefined,
    };
    return (
      <StyledElement
        ref={ref}
        component={component}
        className={clsx(componentClassName, className)}
        fontFamily="secondary"
        fontSize={pxToRem(16)}
        lineHeight={pxToRem(24)}
        {...dataAttributeProps}
        {...props}
      />
    );
  }
);

Label.displayName = componentName;
