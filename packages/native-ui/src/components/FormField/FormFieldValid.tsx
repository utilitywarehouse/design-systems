import React, { FC, PropsWithChildren } from 'react';
import Valid from './styled-components/Valid';
import { useFormFieldContext } from './FormField';

const FormFieldValid: FC<PropsWithChildren> = ({ children }) => {
  const formFieldContext = useFormFieldContext();
  return formFieldContext?.validationStatus === 'valid' ? <Valid>{children}</Valid> : null;
};

export default FormFieldValid;
