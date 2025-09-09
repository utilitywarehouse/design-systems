import { WarningMediumContainedIcon } from '@utilitywarehouse/react-native-icons';
import { HelperIcon } from '../Helper';
import IconProps from '../Icon/Icon.props';

const FormFieldInvalidIcon = (props: Omit<IconProps, 'as'>) => {
  return <HelperIcon as={WarningMediumContainedIcon} {...props} />;
};

FormFieldInvalidIcon.displayName = 'FormFieldInvalidIcon';

export default FormFieldInvalidIcon;
