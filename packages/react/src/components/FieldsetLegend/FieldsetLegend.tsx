import * as React from 'react';
import type { ElementRef } from 'react';

import clsx from 'clsx';

import { FieldsetLegendProps } from './FieldsetLegend.props';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';

const componentName = 'FieldsetLegend';
const componentClassName = withGlobalPrefix(componentName);

type FieldsetLegendElement = ElementRef<'legend'>;

/**
 * The `FieldsetLegend` should be used with the `Fieldset` component to label
 * grouped form inputs.
 */
export const FieldsetLegend = React.forwardRef<FieldsetLegendElement, FieldsetLegendProps>(
  ({ disabled, className, ...props }, ref) => {
    return (
      <legend
        ref={ref}
        className={clsx(componentClassName, className)}
        data-disabled={disabled ? '' : undefined}
        {...props}
      />
    );
  }
);

FieldsetLegend.displayName = componentName;
