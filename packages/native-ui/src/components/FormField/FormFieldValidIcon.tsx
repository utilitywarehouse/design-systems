import React, { forwardRef } from 'react';
import { HelperIcon } from '../Helper';
import IconProps from '../Icon/Icon.props';
import { SvgRef } from '../../types';
import { TickMediumContainedIcon } from '@utilitywarehouse/react-native-icons';

const FormFieldValidIcon = forwardRef<SvgRef, Omit<IconProps, 'as'>>(props => {
  return <HelperIcon as={TickMediumContainedIcon} {...props} />;
});

FormFieldValidIcon.displayName = 'FormFieldValidIcon';

export default FormFieldValidIcon;
