import { styled, Pressable } from '@gluestack-ui/themed';

const AlertIconButton = styled(
  Pressable,
  {
    width: 24,
    height: 24,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    _icon: {
      width: 24,
      height: 24,
    },
  },
  {
    componentName: 'AlertIconButton',
    descendantStyle: ['_icon'],
    ancestorStyle: ['_iconButton'],
  } as const
) as React.ForwardRefExoticComponent<import('react-native').PressableProps & {}> & {
  displayName: string;
};
export default AlertIconButton;
