import { TextProps } from 'react-native';
import { Text } from '../../components';

export const AccordionContentText = ({ children, ...props }: TextProps) => {
  return <Text {...props}>{children}</Text>;
};

AccordionContentText.displayName = 'AccordionContentText';

export default AccordionContentText;
