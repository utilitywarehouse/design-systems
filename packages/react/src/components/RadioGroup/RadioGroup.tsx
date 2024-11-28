import * as React from 'react';

import clsx from 'clsx';

import { Root } from '@radix-ui/react-radio-group';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import type { ElementRef } from 'react';
import { RadioGroupProps, RadioGroupRootProps } from './RadioGroup.props';
import { Flex } from '../Flex/Flex';
import { FormFieldGroup } from '../FormFieldGroup/FormFieldGroup';

const rootComponentName = 'RadioGroupRoot';
const rootComponentClassName = withGlobalPrefix(rootComponentName);

type RadioGroupRootElement = ElementRef<'div'>;

export const RadioGroupRoot = React.forwardRef<RadioGroupRootElement, RadioGroupRootProps>(
  ({ id, disabled, children, direction = 'column', width, className, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        asChild
        {...props}
        disabled={disabled}
        id={id}
        orientation={direction === 'column' ? 'vertical' : 'horizontal'}
        className={clsx(rootComponentClassName, className)}
      >
        <Flex width={width} gap="16px">
          {children}
        </Flex>
      </Root>
    );
  }
);

RadioGroupRoot.displayName = rootComponentName;

const componentName = 'RadioGroup';
const componentClassName = withGlobalPrefix(componentName);

type RadioGroupElement = ElementRef<'fieldset'>;

/**
 * The `RadioGroup` provides an accessible way to group and control a set of
 * `Radio` or `RadioTile` components, allowing the user to select one option
 * from a set. The `RadioGroup` is responsible for handling the value, helper
 * text, error state, error message, and disabled state, as well as determining
 * the presentation and selection of the items in the list. Follows the
 * [WAI-ARIA Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) for radio
 * groups not contained in a toolbar.
 */
export const RadioGroup = React.forwardRef<RadioGroupElement, RadioGroupProps>(
  (
    {
      children,
      contentWidth = 'fit-content',
      direction = 'column',
      className,
      label,
      helperText,
      helperTextPosition,
      showHelperTextIcon,
      error,
      errorMessage,
      showErrorMessageIcon,
      required,
      disabled,
      loop,
      defaultValue,
      value,
      onValueChange,
      name,
      ...props
    },
    ref
  ) => {
    const formFieldGroupProps = {
      ...props,
      disabled,
      required,
      label,
      helperText,
      helperTextPosition,
      showHelperTextIcon,
      error,
      errorMessage,
      showErrorMessageIcon,
    };
    const radioGroupRootProps = {
      width: contentWidth,
      direction,
      name,
      required,
      disabled,
      loop,
      defaultValue,
      value,
      onValueChange,
    };

    return (
      <FormFieldGroup
        ref={ref}
        className={clsx(componentClassName, className)}
        {...formFieldGroupProps}
      >
        <RadioGroupRoot {...radioGroupRootProps}>{children}</RadioGroupRoot>
      </FormFieldGroup>
    );
  }
);

RadioGroup.displayName = componentName;
