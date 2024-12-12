import * as React from 'react';

import clsx from 'clsx';

import { CheckboxGroupProps } from './CheckboxGroup.props';
import { CheckboxGroupRoot } from './CheckboxGroupRoot';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import type { ElementRef } from 'react';
import { FormFieldGroup } from '../FormFieldGroup/FormFieldGroup';

const componentName = 'CheckboxGroup';
const componentClassName = withGlobalPrefix(componentName);

type CheckboxGroupElement = ElementRef<'fieldset'>;

/**
 * Set of interactive buttons where multiple options can be selected at a time.
 * The `CheckboxGroup` uses a fieldset to group related `Checkbox` controls.
 * The `CheckboxGroup` is responsible for handling the value, label, helper
 * text, error state, error message, and disabled state, as well as determining
 * the presentation and selection of the items in the list.
 */
export const CheckboxGroup = React.forwardRef<CheckboxGroupElement, CheckboxGroupProps>(
  (
    {
      contentWidth,
      disabled,
      required,
      label,
      helperText,
      helperTextPosition,
      showHelperTextIcon,
      error,
      errorMessage,
      showErrorMessageIcon,
      direction,
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
    const checkboxGroupRootProps = {
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
        <CheckboxGroupRoot {...checkboxGroupRootProps} />
      </FormFieldGroup>
    );
  }
);

CheckboxGroup.displayName = componentName;
