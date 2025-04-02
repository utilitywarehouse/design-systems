import React from 'react';
import { createTextarea } from '@gluestack-ui/textarea';
import type TextareaProps from './Textarea.props';

import TextareaRoot from './TextareaRoot';
import TextareaSlot from './TextareaSlot';
import TextareaIcon from './TextareaIcon';
import TextareaFieldComponent from './TextareaField';
import TextareaValidationIcon from './TextareaValidationIcon';
import { useFormFieldContext } from '../FormField';

export const TextareaComponent = createTextarea({
  Root: TextareaRoot,
  Input: TextareaFieldComponent,
});

export const TextareaField = TextareaComponent.Input;

const Textarea: React.FC<TextareaProps> = ({
  validationStatus = 'initial',
  showValidationIcon = true,
  children,
  disabled,
  focused,
  readonly,
  leadingIcon,
  trailingIcon,
  ...props
}) => {
  const formFieldContext = useFormFieldContext();
  const validationStatusFromContext = formFieldContext?.validationStatus ?? validationStatus;
  return (
    <TextareaComponent
      {...(children ? props : {})}
      validationStatus={validationStatusFromContext}
      isInvalid={validationStatusFromContext === 'invalid'}
      isReadOnly={readonly}
      isDisabled={disabled}
      isFocused={focused}
    >
      {children ? (
        <>
          {children}
          {showValidationIcon && validationStatusFromContext !== 'initial' && (
            <TextareaSlot>
              <TextareaValidationIcon />
            </TextareaSlot>
          )}
        </>
      ) : (
        <>
          {leadingIcon && (
            <TextareaSlot>
              <TextareaIcon as={leadingIcon} />
            </TextareaSlot>
          )}
          <TextareaField {...props} />
          {showValidationIcon && validationStatusFromContext !== 'initial' && (
            <TextareaSlot>
              <TextareaValidationIcon />
            </TextareaSlot>
          )}
          {trailingIcon && (
            <TextareaSlot>
              <TextareaIcon as={trailingIcon} />
            </TextareaSlot>
          )}
        </>
      )}
    </TextareaComponent>
  );
};

export default Textarea;
