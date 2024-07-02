import { styled } from '@gluestack-ui/themed';
import { Text } from 'react-native';
import type { ButtonText as GSButtonText } from '@gluestack-ui/themed';
import type { ComponentProps } from 'react';

const ButtonText = styled(
  Text,
  {
    fontSize: '$md',
    lineHeight: '$2xs',
    fontFamily: '$body',
    fontWeight: '$medium',
  },
  {
    componentName: 'ButtonText',
    descendantStyle: [],
    ancestorStyle: ['_text'],
  } as const
) as React.ForwardRefExoticComponent<ComponentProps<typeof GSButtonText> & object> & {
  displayName: string;
};

export default ButtonText;
