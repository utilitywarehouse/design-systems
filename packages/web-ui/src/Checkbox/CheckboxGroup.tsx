import * as React from 'react';
import * as RovingFocusGroup from '@radix-ui/react-roving-focus';
import { createRovingFocusGroupScope } from '@radix-ui/react-roving-focus';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { HelperText } from '../HelperText';
import { styled } from '../theme';
import { Flex } from '../Flex';
import { mergeIds } from '../utils';
import { CheckboxGroupContext } from './CheckboxGroup.context';
import { useIds } from '../hooks';
import { CheckboxGroupProps } from './CheckboxGroup.props';

const checkboxGroupName = 'CheckboxGroup';

export const useRovingFocusGroupScope = createRovingFocusGroupScope();

const StyledContentContainer = styled(Flex)({
  minWidth: 'fit-content',
  flexWrap: 'wrap',
  ':where([data-orientation="horizontal"] &)': {
    flexDirection: 'row',
  },
  ':where([data-orientation="vertical"] &)': {
    flexDirection: 'column',
  },
});

const CheckboxGroup = React.forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  (
    {
      name,
      defaultValue,
      value: valueProp,
      required = false,
      disabled = false,
      // orientation,
      // dir: direction,
      onValueChange,
      id: providedId,
      label,
      helperText,
      helperTextPosition = 'top',
      showHelperTextIcon,
      error,
      errorMessage,
      showErrorMessageIcon,
      contentWidth = 'fit-content',
      direction = 'column',
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      'aria-errormessage': ariaErrorMessage,
      children,
      ...props
    },
    ref
  ) => {
    const checkboxGroupScope = { [checkboxGroupName]: [CheckboxGroupContext] };
    const rovingFocusGroupScope = useRovingFocusGroupScope(checkboxGroupScope);

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
      <CheckboxGroupContext.Provider value={providerValue}>
        <RovingFocusGroup.Root asChild {...rovingFocusGroupScope}>
          <Fieldset
            ref={ref}
            {...props}
            disabled={disabled}
            id={id}
            data-disabled={disabled ? '' : undefined}
            data-orientation={direction === 'column' ? 'vertical' : 'horizontal'}
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

              <StyledContentContainer width={contentWidth} gap={2}>
                {children}
              </StyledContentContainer>
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
        </RovingFocusGroup.Root>
      </CheckboxGroupContext.Provider>
    );
  }
);

CheckboxGroup.displayName = checkboxGroupName;

export { CheckboxGroup };
export type { CheckboxGroupProps };
