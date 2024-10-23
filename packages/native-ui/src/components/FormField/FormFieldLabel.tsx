import React, { FC } from 'react';
import { useFormFieldContext } from './FormField.context';
import { Label } from '../Label';
import LabelProps from '../Label/Label.props';

const FormFieldLabel: FC<Omit<LabelProps, 'disabled'>> = ({ children }) => {
  const { disabled } = useFormFieldContext();
  return <Label disabled={disabled}>{children}</Label>;
};

export default FormFieldLabel;
