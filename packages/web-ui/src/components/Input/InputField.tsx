import * as React from 'react';

import clsx from 'clsx';

import { Input } from './Input';
import { InputFieldProps } from './InputField.props';

import { FormField } from '../FormField';

import { PropsWithSx } from '../../types';
import { withGlobalPrefix } from '../../utils';

const componentName = 'InputField';
const componentClassName = withGlobalPrefix(componentName);

export const InputField = React.forwardRef<HTMLInputElement, PropsWithSx<InputFieldProps>>(
  (
    {
      className,
      children,
      label,
      helperText,
      helperTextPosition,
      showHelperTextIcon,
      error,
      errorMessage,
      showErrorMessageIcon,
      required,
      ...inputProps
    },
    ref
  ) => {
    const formFieldProps = {
      label,
      helperText,
      helperTextPosition,
      showHelperTextIcon,
      error,
      errorMessage,
      showErrorMessageIcon,
      required,
    };
    return (
      <FormField className={clsx(componentClassName, className)} {...formFieldProps}>
        <Input ref={ref} {...inputProps}>
          {children}
        </Input>
      </FormField>
    );
  }
);

InputField.displayName = componentName;
