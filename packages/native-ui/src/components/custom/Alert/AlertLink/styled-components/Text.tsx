import { styled } from '@gluestack-ui/themed';
import { Text } from 'react-native';

const AlertLinkText = styled(
  Text,
  {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'WorkSans-SemiBold',
  },
  {
    componentName: 'AlertLinkText',
    descendantStyle: [],
    ancestorStyle: ['_text'],
  } as const
);

export default AlertLinkText;
