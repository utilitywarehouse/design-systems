import * as React from 'react';
import { forwardRef } from 'react';
import { Box } from '../Box';
import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { HelperText } from '../HelperText';
import { PropsWithSx } from '../types';
import { mergeIds } from '../utils';
import { CheckboxGroupProps } from './CheckboxGroup.props';
import { useIds } from '../hooks';
import { CheckboxGroupContext } from './CheckboxGroup.context';
import { styled } from '../theme';
import { Flex } from '../Flex';

const componentName = 'CheckboxGroup';

const StyledElement = styled(Flex)({
  minWidth: 'fit-content',
  flexWrap: 'wrap',
  ':where([data-orientation="horizontal"] &)': {
    flexDirection: 'row',
  },
  ':where([data-orientation="vertical"] &)': {
    flexDirection: 'column',
  },
});

export const CheckboxGroup = forwardRef<HTMLFieldSetElement, PropsWithSx<CheckboxGroupProps>>(
  (
    {
      id: providedId,
      children,
      label,
      helperText,
      helperTextPosition = 'top',
      showHelperTextIcon,
      error,
      errorMessage,
      showErrorMessageIcon,
      disabled,
      contentWidth = 'fit-content',
      direction = 'column',
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      'aria-errormessage': ariaErrorMessage,
      ...props
    },
    ref
  ) => {
    const { id, labelId, helperTextId, errorMessageId } = useIds({
      providedId,
      componentPrefix: 'checkboxgroup',
    });
    const showErrorMessage = Boolean(error && errorMessage);
    const dir = helperTextPosition === 'top' ? 'column' : 'column-reverse';
    const value = {
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

        <Box display="flex" gap={2} flexDirection={dir}>
          {helperText ? (
            <HelperText id={helperTextId} disabled={disabled} showIcon={showHelperTextIcon}>
              {helperText}
            </HelperText>
          ) : null}
          <CheckboxGroupContext.Provider value={value}>
            <StyledElement width={contentWidth} gap={2}>
              {children}
            </StyledElement>
          </CheckboxGroupContext.Provider>
        </Box>

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

CheckboxGroup.displayName = componentName;
