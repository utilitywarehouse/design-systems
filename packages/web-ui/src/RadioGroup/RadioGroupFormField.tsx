import * as React from 'react';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-radio-group';
import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { HelperText } from '../HelperText';
import { useIds } from '../hooks';
import { PropsWithSx } from '../types';
import { mergeIds } from '../utils';
import { BaseRadioGroupProps } from './RadioGroup.props';
import { RadioGroupContext } from './RadioGroup.context';
import {Flex} from '../Flex';

const componentName = 'RadioGroupFormField';

export const RadioGroupFormField = forwardRef<HTMLDivElement, PropsWithSx<BaseRadioGroupProps>>(
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
      sx,
      disabled,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedby,
      'aria-errormessage': ariaErrorMessage,
      ...props
    },
    ref
  ) => {
    const { id, labelId, helperTextId, errorMessageId } = useIds({
      providedId,
      componentPrefix: 'radiogroup',
    });
    const showErrorMessage = Boolean(error && errorMessage);
    const direction = helperTextPosition === 'top' ? 'column' : 'column-reverse';
    const value = {
      hasGroupHelperText: !!helperText,
      'aria-describedby': mergeIds(
        ariaDescribedby || !!helperText ? helperTextId : undefined,
        ariaErrorMessage || showErrorMessage ? errorMessageId : undefined
      ),
    };

    return (
      <Root
        ref={ref}
        asChild
        {...props}
        disabled={disabled}
        id={id}
        aria-errormessage={ariaErrorMessage || showErrorMessage ? errorMessageId : undefined}
        aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
        aria-invalid={showErrorMessage}
      >
        <Fieldset sx={sx}>
          {label ? (
            <FieldsetLegend id={labelId} disabled={disabled}>
              {label}
            </FieldsetLegend>
          ) : null}

          <Flex gap={2} direction={direction}>
            {helperText ? (
              <HelperText id={helperTextId} disabled={disabled} showIcon={showHelperTextIcon}>
                {helperText}
              </HelperText>
            ) : null}
            <RadioGroupContext.Provider value={value}>{children}</RadioGroupContext.Provider>
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
      </Root>
    );
  }
);

RadioGroupFormField.displayName = componentName;
