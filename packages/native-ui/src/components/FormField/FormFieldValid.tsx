import React, { FC } from 'react';
import { useFormFieldContext } from './FormField.context';
import { Helper } from '../Helper';
import HelperProps from '../Helper/Helper.props';

const FormFieldValid: FC<Omit<HelperProps, 'validationStatus'>> = ({
  children,
  icon,
  text,
  ...props
}) => {
  const { validationStatus, disabled, showValidationIcon } = useFormFieldContext();
  return validationStatus === 'valid' ? (
    children ? (
      <Helper validationStatus="valid" disabled={disabled} showIcon={showValidationIcon} {...props}>
        {children}
      </Helper>
    ) : (
      <Helper
        validationStatus="valid"
        disabled={disabled}
        showIcon={showValidationIcon}
        icon={icon}
        text={text}
        {...props}
      />
    )
  ) : null;
};

export default FormFieldValid;
