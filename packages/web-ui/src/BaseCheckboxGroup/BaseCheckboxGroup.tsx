import * as React from 'react';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { HelperText } from '../HelperText';
import { Flex } from '../Flex';
import { mergeIds } from '../utils';
import { useIds } from '../hooks';
import { BaseCheckboxGroupProps } from './BaseCheckboxGroup.props';
import { CheckboxGroupContext, CheckboxGroupProps } from '../CheckboxGroup';

const componentName = 'BaseCheckboxGroup';

const BaseCheckboxGroup = React.forwardRef<HTMLFieldSetElement, BaseCheckboxGroupProps>(
  (
    {
      name,
      defaultValue,
      value: valueProp,
      required = false,
      disabled = false,
      onValueChange,
      id: providedId,
      label,
      helperText,
      helperTextPosition = 'top',
      showHelperTextIcon,
      error,
      errorMessage,
      showErrorMessageIcon,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      'aria-errormessage': ariaErrorMessage,
      children,
      ...props
    },
    ref
  ) => {
    const { id, labelId, helperTextId, errorMessageId } = useIds({
      providedId,
      componentPrefix: 'checkboxgroup',
    });
    const showErrorMessage = Boolean(error && errorMessage);
    const fieldDirection = helperTextPosition === 'top' ? 'column' : 'column-reverse';

    // With useControllableState, you can pass an initial state (using
    // defaultValue) implying the component is uncontrolled, or you can pass a
    // controlled value (using value) implying the component is controlled.
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

    const providerValue = {
      name,
      required,
      disabled,
      value,
      onItemCheck: handleItemCheck,
      onItemUncheck: handleItemUncheck,
      hasGroupHelperText: !!helperText,
      'aria-describedby': mergeIds(
        ariaDescribedby || !!helperText ? helperTextId : undefined,
        ariaErrorMessage || showErrorMessage ? errorMessageId : undefined
      ),
    };

    return (
      <Fieldset
        ref={ref}
        {...props}
        disabled={disabled}
        id={id}
        data-disabled={disabled ? '' : undefined}
        aria-errormessage={ariaErrorMessage || showErrorMessage ? errorMessageId : undefined}
        aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
        aria-invalid={showErrorMessage}
      >
        {label ? (
          <FieldsetLegend id={labelId} disabled={disabled}>
            {label}
          </FieldsetLegend>
        ) : null}
        <Flex gap={2} direction={fieldDirection}>
          {helperText ? (
            <HelperText id={helperTextId} disabled={disabled} showIcon={showHelperTextIcon}>
              {helperText}
            </HelperText>
          ) : null}

          <CheckboxGroupContext.Provider value={providerValue}>
            {children}
          </CheckboxGroupContext.Provider>
        </Flex>
        {showErrorMessage ? (
          <HelperText
            validationStatus="invalid"
            showIcon={showErrorMessageIcon}
            id={errorMessageId}
          >
            {errorMessage}
          </HelperText>
        ) : null}
      </Fieldset>
    );
  }
);

BaseCheckboxGroup.displayName = componentName;

export { BaseCheckboxGroup };
export type { CheckboxGroupProps };
