import * as React from 'react';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { HelperText } from '../HelperText';
import { Flex } from '../Flex';
import { mergeIds } from '../utils';
import { useIds } from '../hooks';
import { BaseCheckboxGroupProps } from './BaseCheckboxGroup.props';
import { CheckboxGroupProps } from '../CheckboxGroup';
import { BaseCheckboxGroupProvider } from './BaseCheckboxGroup.context';

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
    const direction = helperTextPosition === 'top' ? 'column' : 'column-reverse';

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

    const ariaDescribedbyValue = mergeIds(
      ariaDescribedby || !!helperText ? helperTextId : undefined,
      ariaErrorMessage || showErrorMessage ? errorMessageId : undefined
    );
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
      <Fieldset
        ref={ref}
        {...props}
        disabled={disabled}
        id={id}
        data-disabled={disabled ? '' : undefined}
        aria-errormessage={ariaErrorMessage || showErrorMessage ? errorMessageId : undefined}
        aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
        aria-invalid={showErrorMessage}
        aria-describedby={ariaDescribedbyValue}
      >
        {label ? (
          <FieldsetLegend id={labelId} disabled={disabled}>
            {label}
          </FieldsetLegend>
        ) : null}
        <Flex direction="column" gap={helperTextPosition === 'top' ? 2 : 1}>
          <Flex gap={2} direction={direction}>
            {helperText ? (
              <HelperText id={helperTextId} disabled={disabled} showIcon={showHelperTextIcon}>
                {helperText}
              </HelperText>
            ) : null}

            <BaseCheckboxGroupProvider value={providerValue}>{children}</BaseCheckboxGroupProvider>
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
        </Flex>
      </Fieldset>
    );
  }
);

BaseCheckboxGroup.displayName = componentName;

export { BaseCheckboxGroup };
export type { CheckboxGroupProps };
