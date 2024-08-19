import { styled } from '@gluestack-ui/themed';
import { Text } from 'react-native';

const AlertTitle = styled(
  Text,
  {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Work Sans',
    fontWeight: '600',
  },
  {
    componentName: 'AlertTitle',
    descendantStyle: [],
    ancestorStyle: ['_text'],
  } as const
) as React.ForwardRefExoticComponent<import('react-native').TextProps & object> & {
  displayName: string;
};

export default AlertTitle;
