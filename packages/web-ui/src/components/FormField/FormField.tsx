import * as React from 'react';

import clsx from 'clsx';

import { FormFieldContextValue, FormFieldProvider } from './FormField.context';
import { FormFieldProps } from './FormField.props';

import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { Flex } from '../Flex';
import { HelperText } from '../HelperText';

import { mergeIds } from '../../helpers';
import { useIds } from '../../hooks';
import { PropsWithSx } from '../../types';
import { withGlobalPrefix } from '../../utils';

const componentName = 'FormField';
const componentClassName = withGlobalPrefix(componentName);

/**
 * TODO: Document the FormField component.
 */
export const FormField = React.forwardRef<
  React.ElementRef<'fieldset'>,
  React.PropsWithChildren<PropsWithSx<FormFieldProps>>
>(
  (
    {
      name,
      className,
      children,
      id: providedId,
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
    const componentPrefix = name ? `${name}-formfield` : 'formfield';
    const { id, labelId, helperTextId, errorMessageId } = useIds({ providedId, componentPrefix });

    const showErrorMessage = Boolean(error && errorMessage);
    const showTopHelperText = helperText && helperTextPosition === 'top';
    const showBottomHelperText = helperText && helperTextPosition === 'bottom';

    const ariaDescribedbyValue = mergeIds(
      ariaDescribedby || !!helperText ? helperTextId : undefined,
      ariaErrorMessage || showErrorMessage ? errorMessageId : undefined
    );

    const providerValue: FormFieldContextValue = {
      name,
      disabled,
      helperText,
      'aria-describedby': ariaDescribedbyValue,
    };

    return (
      <Fieldset
        ref={ref}
        className={clsx(componentClassName, className)}
        disabled={disabled}
        id={id}
        data-disabled={disabled ? '' : undefined}
        aria-errormessage={ariaErrorMessage || showErrorMessage ? errorMessageId : undefined}
        aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
        aria-invalid={showErrorMessage}
        aria-describedby={ariaDescribedbyValue}
        {...props}
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

        <FormFieldProvider value={providerValue}>{children}</FormFieldProvider>

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

FormField.displayName = componentName;
