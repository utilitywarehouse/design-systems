import * as React from 'react';
import type { ElementRef } from 'react';

import { FormFieldGroupProvider } from './FormFieldGroup.context';
import { FormFieldGroupProps } from './FormFieldGroup.props';
import { useIds } from '../../hooks/use-ids';
import { mergeIds } from '../../helpers/merge-ids';
import { Fieldset } from '../Fieldset/Fieldset';
import { Flex } from '../Flex/Flex';
import { FieldsetLegend } from '../FieldsetLegend/FieldsetLegend';
import { HelperText } from '../HelperText/HelperText';

const componentName = 'FormFieldGroup';

type FormFieldGroupElement = ElementRef<'fieldset'>;

/**
 * The `FormFieldGroup` component should be used to group related form inputs.
 * It renders an HTML `fieldset` and is responsible for handling the value,
 * label, helper text, error state, error message, and disabled state.
 */
export const FormFieldGroup = React.forwardRef<FormFieldGroupElement, FormFieldGroupProps>(
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
          <Flex direction="column" gap="4px">
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
          <Flex direction="column" gap="8px">
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
