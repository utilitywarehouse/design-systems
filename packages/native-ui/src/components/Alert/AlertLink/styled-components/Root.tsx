import { styled, Pressable } from '@gluestack-ui/themed';

const AlertLink = styled(
  Pressable,
  {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  {
    componentName: 'AlertLink',
    descendantStyle: ['_text', '_chevron'],
    ancestorStyle: ['_link'],
  } as const
) as React.ForwardRefExoticComponent<import('react-native').PressableProps & {}> & {
  displayName: string;
};

export default AlertLink;
