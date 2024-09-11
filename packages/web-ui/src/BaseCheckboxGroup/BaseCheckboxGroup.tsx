import * as React from 'react';

import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { Flex } from '../Flex';
import { HelperText } from '../HelperText';
import { BaseCheckboxGroupProvider } from './BaseCheckboxGroup.context';
import { BaseCheckboxGroupProps } from './BaseCheckboxGroup.props';

import { useIds } from '../hooks';
import { mergeIds } from '../utils';
import { useControllableState } from '@radix-ui/react-use-controllable-state';

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
    const showTopHelperText = helperText && helperTextPosition === 'top';
    const showBottomHelperText = helperText && helperTextPosition === 'bottom';

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
        {label || showTopHelperText ? (
          <Flex direction="column" gap={0.5}>
            {label ? (
              <FieldsetLegend id={labelId} disabled={disabled}>
                {label}
              </FieldsetLegend>
            ) : null}
            {showTopHelperText ? (
              <HelperText id={helperTextId} disabled={disabled} showIcon={showHelperTextIcon}>
                {helperText}
              </HelperText>
            ) : null}
          </Flex>
        ) : null}

        <BaseCheckboxGroupProvider value={providerValue}>{children}</BaseCheckboxGroupProvider>

        {showBottomHelperText || showErrorMessage ? (
          <Flex direction="column" gap={1}>
            {showBottomHelperText ? (
              <HelperText id={helperTextId} disabled={disabled} showIcon={showHelperTextIcon}>
                {helperText}
              </HelperText>
            ) : null}
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
        ) : null}
      </Fieldset>
    );
  }
);

BaseCheckboxGroup.displayName = componentName;

export { BaseCheckboxGroup };
