import { TickMediumContainedIcon } from '@utilitywarehouse/react-native-icons';
import { HelperIcon } from '../Helper';
import IconProps from '../Icon/Icon.props';

const FormFieldValidIcon = (props: Omit<IconProps, 'as'>) => {
  return <HelperIcon as={TickMediumContainedIcon} {...props} />;
};

FormFieldValidIcon.displayName = 'FormFieldValidIcon';

export default FormFieldValidIcon;
