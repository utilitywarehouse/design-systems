import React, { forwardRef } from 'react';
import { HelperIcon } from '../Helper';
import IconProps from '../Icon/Icon.props';
import { SvgRef } from '../../types';
import { WarningMediumContainedIcon } from '@utilitywarehouse/react-native-icons';

const FormFieldInvalidIcon = forwardRef<SvgRef, Omit<IconProps, 'as'>>((props, ref) => {
  return <HelperIcon ref={ref} as={WarningMediumContainedIcon} {...props} />;
});

FormFieldInvalidIcon.displayName = 'FormFieldInvalidIcon';

export default FormFieldInvalidIcon;
