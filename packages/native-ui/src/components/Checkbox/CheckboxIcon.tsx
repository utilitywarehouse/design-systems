import { TickSmallIcon } from '@utilitywarehouse/react-native-icons';
import { useTheme } from '../../hooks';
import { Icon } from '../Icon';
import IconProps from '../Icon/Icon.props';

const CheckboxIcon = ({ style, ...props }: IconProps) => {
  const { colorMode } = useTheme();

  return (
    <Icon
      as={TickSmallIcon}
      {...props}
      color={colorMode === 'light' ? '$white' : '$cyan50'}
      style={style}
    />
  );
};

CheckboxIcon.displayName = 'CheckboxIcon';

export default CheckboxIcon;
