import * as React from 'react';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-radio-group';
import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { HelperText } from '../HelperText';
import { useIds } from '../hooks';
import { PropsWithSx } from '../types';
import { mergeIds } from '../utils';
import { Flex } from '../Flex';
import { BaseRadioGroupProps } from './BaseRadioGroup.props';
import { BaseRadioGroupProvider } from './BaseRadioGroup.context';

const componentName = 'BaseRadioGroup';

export const BaseRadioGroup = forwardRef<HTMLDivElement, PropsWithSx<BaseRadioGroupProps>>(
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
    const ariaDescribedbyValue = mergeIds(
      ariaDescribedby || !!helperText ? helperTextId : undefined,
      ariaErrorMessage || showErrorMessage ? errorMessageId : undefined
    );
    const value = {
      hasGroupHelperText: !!helperText,
      'aria-describedby': ariaDescribedbyValue,
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
        aria-describedby={ariaDescribedbyValue}
      >
        <Fieldset sx={sx}>
          <Flex direction="column" gap={0.5}>
            {label ? (
              <FieldsetLegend id={labelId} disabled={disabled}>
                {label}
              </FieldsetLegend>
            ) : null}
            {helperText && helperTextPosition === 'top' ? (
              <HelperText id={helperTextId} disabled={disabled} showIcon={showHelperTextIcon}>
                {helperText}
              </HelperText>
            ) : null}
          </Flex>

          <BaseRadioGroupProvider value={value}>{children}</BaseRadioGroupProvider>

          <Flex direction="column" gap={1}>
            {helperText && helperTextPosition === 'bottom' ? (
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
        </Fieldset>
      </Root>
    );
  }
);

BaseRadioGroup.displayName = componentName;
