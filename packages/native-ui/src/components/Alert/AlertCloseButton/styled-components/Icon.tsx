import { styled, AsForwarder } from '@gluestack-ui/themed';
import { CloseSmallIcon } from '@utilitywarehouse/react-native-icons';

const AlertCloseButtonIcon = styled(
  AsForwarder,
  {
    width: 16,
    height: 16,
    props: {
      as: CloseSmallIcon,
    },
  },
  {
    componentName: 'AlertIconButtonChevron',
    descendantStyle: [],
    ancestorStyle: ['_closeIcon'],
  } as const
);
export default AlertCloseButtonIcon;
