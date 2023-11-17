import * as React from 'react';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { getPrefixedName, pxToRem } from '../utils';
import { colors } from '@utilitywarehouse/colour-system';
import { PropsWithSx } from '../types';
import { LabelProps } from './Label.props';
import { Typography } from '../Typography';
import clsx from 'clsx';

const displayName = 'Label';
const componentClassName = getPrefixedName(displayName);

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI.
 *
 * The Label component is used for labelling form elements, such as radio inputs.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Label = forwardRef<ElementRef<'label'>, PropsWithChildren<PropsWithSx<LabelProps>>>(
  ({ component = 'label', disabled, nested, className, ...props }, ref) => {
    return (
      <Typography
        ref={ref}
        component={component}
        className={clsx(componentClassName, className)}
        fontFamily="secondary"
        weight={nested ? 'regular' : 'semibold'}
        fontSize={pxToRem(16)}
        lineHeight={pxToRem(24)}
        color={disabled ? colors.grey400 : colors.grey1000}
        {...props}
      />
    );
  }
);

Label.displayName = displayName;
