import * as React from 'react';
import { forwardRef } from 'react';

import { FormFieldGroupProvider } from './FormFieldGroup.context';
import { FormFieldGroupProps } from './FormFieldGroup.props';

import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { Flex } from '../Flex';
import { HelperText } from '../HelperText';

import { mergeIds } from '../../helpers';
import { useIds } from '../../hooks';
import { PropsWithSx } from '../../types';

const componentName = 'FormFieldGroup';

export const FormFieldGroup = forwardRef<HTMLFieldSetElement, PropsWithSx<FormFieldGroupProps>>(
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
      <Fieldset
        ref={ref}
        {...props}
        disabled={disabled}
        id={id}
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

        <FormFieldGroupProvider value={value}>{children}</FormFieldGroupProvider>

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

FormFieldGroup.displayName = componentName;
