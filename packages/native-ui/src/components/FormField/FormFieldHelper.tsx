import React, { FC } from 'react';
import { useFormFieldContext } from './FormField.context';
import { Helper } from '../Helper';
import HelperProps from '../Helper/Helper.props';

const FormFieldHelper: FC<Omit<HelperProps, 'validationStatus'>> = ({
  children,
  icon,
  text,
  ...props
}) => {
  const { showValidationIcon, disabled } = useFormFieldContext();
  return children ? (
    <Helper showIcon={showValidationIcon} disabled={disabled} {...props}>
      {children}
    </Helper>
  ) : (
    <Helper showIcon={showValidationIcon} disabled={disabled} icon={icon} text={text} {...props} />
  );
};

export default FormFieldHelper;
