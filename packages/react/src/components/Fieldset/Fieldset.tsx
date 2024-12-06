import * as React from 'react';

import clsx from 'clsx';

import type { FieldsetProps } from './Fieldset.props';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import type { ElementRef } from 'react';
import { Flex } from '../Flex/Flex';

const componentName = 'Fieldset';
const componentClassName = withGlobalPrefix(componentName);

type FieldsetElement = ElementRef<'fieldset'>;

/**
 * The `Fieldset` component should be used to group related form inputs, and
 * should be used with the `FieldsetLegend` component
 */
export const Fieldset = React.forwardRef<FieldsetElement, FieldsetProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <fieldset className={clsx(componentClassName, className)} ref={ref} {...props}>
        <Flex direction="column" gap="200">
          {children}
        </Flex>
      </fieldset>
    );
  }
);

Fieldset.displayName = componentName;
