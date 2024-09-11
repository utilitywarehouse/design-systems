import * as React from 'react';
import { forwardRef } from 'react';

import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { Flex } from '../Flex';
import { HelperText } from '../HelperText';
import { BaseRadioGroupProvider } from './BaseRadioGroup.context';
import { BaseRadioGroupProps } from './BaseRadioGroup.props';

import { useIds } from '../hooks';
import { PropsWithSx } from '../types';
import { mergeIds } from '../utils';
import { Root } from '@radix-ui/react-radio-group';

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
    const showTopHelperText = helperText && helperTextPosition === 'top';
    const showBottomHelperText = helperText && helperTextPosition === 'bottom';

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

          <BaseRadioGroupProvider value={value}>{children}</BaseRadioGroupProvider>

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
      </Root>
    );
  }
);

BaseRadioGroup.displayName = componentName;
