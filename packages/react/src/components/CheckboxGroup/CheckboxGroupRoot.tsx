import * as React from 'react';

import clsx from 'clsx';

import { CheckboxGroupRootProps } from './CheckboxGroupRoot.props';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import { Flex } from '../Flex/Flex';
import { CheckboxGroupBase } from '../CheckboxGroupBase/CheckboxGroupBase';
import type { ElementRef } from 'react';

const componentName = 'CheckboxGroupRoot';
const componentClassName = withGlobalPrefix(componentName);

type CheckboxGroupRootElement = ElementRef<'div'>;

/**
 * Set of interactive buttons where multiple options can be selected at a time.
 */
export const CheckboxGroupRoot = React.forwardRef<CheckboxGroupRootElement, CheckboxGroupRootProps>(
  (
    {
      name,
      disabled,
      value,
      defaultValue,
      onValueChange,
      width = 'fit-content',
      direction = 'column',
      children,
      className,
      ...props
    },
    ref
  ) => {
    const checkboxGroupBaseProps = { name, value, defaultValue, onValueChange, children };
    return (
      <Flex
        ref={ref}
        {...props}
        className={clsx(componentClassName, className)}
        data-orientation={direction === 'column' ? 'vertical' : 'horizontal'}
        data-disabled={disabled ? '' : undefined}
        width={width}
        gap="200"
      >
        <CheckboxGroupBase {...checkboxGroupBaseProps} />
      </Flex>
    );
  }
);

CheckboxGroupRoot.displayName = componentName;
