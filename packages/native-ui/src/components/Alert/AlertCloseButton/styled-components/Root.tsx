import { styled, Pressable } from '@gluestack-ui/themed';

const AlertCloseButton = styled(
  Pressable,
  {
    width: 24,
    height: 24,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    _closeIcon: {
      alignSelf: 'center',
    },
  },
  {
    componentName: 'AlertCloseButton',
    descendantStyle: ['_closeIcon'],
    ancestorStyle: ['_closeButton'],
  } as const
) as React.ForwardRefExoticComponent<import('react-native').PressableProps & {}> & {
  displayName: string;
};
export default AlertCloseButton;
