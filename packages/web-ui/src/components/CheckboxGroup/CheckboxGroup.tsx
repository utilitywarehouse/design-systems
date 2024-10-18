import * as React from 'react';

import clsx from 'clsx';

import { CheckboxGroupProps } from './CheckboxGroup.props';
import { CheckboxGroupRoot } from './CheckboxGroupRoot';

import { FormFieldGroup } from '../FormFieldGroup';

import { PropsWithSx } from '../../types';
import { withGlobalPrefix } from '../../utils';

const componentName = 'CheckboxGroup';
const componentClassName = withGlobalPrefix(componentName);

/**
 * Set of interactive buttons where multiple options can be selected at a time.
 * The `CheckboxGroup` uses a fieldset to group related `Checkbox` controls.
 * The `CheckboxGroup` is responsible for handling the value, helper text,
 * error state, error message, and disabled state, as well as determining the
 * presentation and selection of the items in the list.
 */
export const CheckboxGroup = React.forwardRef<
  HTMLFieldSetElement,
  React.PropsWithChildren<PropsWithSx<CheckboxGroupProps>>
>(
  (
    {
      contentWidth = 'fit-content',
      disabled,
      required,
      label,
      helperText,
      helperTextPosition,
      showHelperTextIcon,
      error,
      errorMessage,
      showErrorMessageIcon,
      direction = 'column',
      value,
      defaultValue,
      onValueChange,
      children,
      className,
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
      defaultValue,
      value,
      onValueChange,
      children,
    };
    return (
      <FormFieldGroup
        ref={ref}
        className={clsx(componentClassName, className)}
        {...formFieldGroupProps}
      >
        <CheckboxGroupRoot {...radioGroupRootProps} />
      </FormFieldGroup>
    );
  }
);

CheckboxGroup.displayName = componentName;
