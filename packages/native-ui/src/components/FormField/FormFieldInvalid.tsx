import React, { FC, PropsWithChildren } from 'react';
import Invalid from './styled-components/Invalid';
import { useFormFieldContext } from './FormField';

const FormFieldInvalid: FC<PropsWithChildren> = ({ children }) => {
  const formFieldContext = useFormFieldContext();
  return formFieldContext?.validationStatus === 'invalid' ? <Invalid> {children} </Invalid> : null;
};

export default FormFieldInvalid;
