import * as React from 'react';

import { useControllableState } from '@radix-ui/react-use-controllable-state';

import { BaseCheckboxGroupProvider } from './BaseCheckboxGroup.context';
import { BaseCheckboxGroupProps } from './BaseCheckboxGroup.props';

import { FormField } from '../FormField';

import { mergeIds } from '../../helpers';
import { useIds } from '../../hooks';

const componentName = 'BaseCheckboxGroup';

const BaseCheckboxGroup = React.forwardRef<HTMLFieldSetElement, BaseCheckboxGroupProps>(
  (
    {
      name,
      defaultValue,
      value: valueProp,
      required = false,
      onValueChange,
      label,
      helperText,
      helperTextPosition = 'top',
      showHelperTextIcon,
      error,
      errorMessage,
      showErrorMessageIcon,
      id: providedId,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      'aria-errormessage': ariaErrorMessage,
      children,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const { id, labelId, helperTextId, errorMessageId } = useIds({
      providedId,
      componentPrefix: 'checkboxgroup',
    });

    // useControllableState will handle whether controlled or uncontrolled
    const [value = [], setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue,
      onChange: onValueChange,
    });

    const handleItemCheck = React.useCallback(
      (itemValue: string) => setValue((prevValue = []) => [...prevValue, itemValue]),
      [setValue]
    );

    const handleItemUncheck = React.useCallback(
      (itemValue: string) =>
        setValue((prevValue = []) => prevValue.filter(value => value !== itemValue)),
      [setValue]
    );

    const showErrorMessage = Boolean(error && errorMessage);

    const ariaDescribedbyValue = mergeIds(
      ariaDescribedby || !!helperText ? helperTextId : undefined,
      ariaErrorMessage || showErrorMessage ? errorMessageId : undefined
    );

    // TODO: move these context items into a `useFormField` context/hook?
    const providerValue = {
      name,
      required,
      disabled,
      value,
      onItemCheck: handleItemCheck,
      onItemUncheck: handleItemUncheck,
      hasGroupHelperText: !!helperText,
      'aria-describedby': ariaDescribedbyValue,
    };

    return (
      <FormField
        ref={ref}
        {...props}
        disabled={disabled}
        id={id}
        data-disabled={disabled ? '' : undefined}
        aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
        label={label}
        helperText={helperText}
        helperTextPosition={helperTextPosition}
        showErrorMessageIcon={showErrorMessageIcon}
        showHelperTextIcon={showHelperTextIcon}
      >
        <BaseCheckboxGroupProvider value={providerValue}>{children}</BaseCheckboxGroupProvider>
      </FormField>
    );
  }
);

BaseCheckboxGroup.displayName = componentName;

export { BaseCheckboxGroup };
