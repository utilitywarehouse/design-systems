import { styled, AsForwarder } from '@gluestack-ui/themed';

const AlertCloseButtonIcon = styled(
  AsForwarder,
  {
    width: 16,
    height: 16,
  },
  {
    componentName: 'AlertIconButtonChevron',
    descendantStyle: [],
    ancestorStyle: ['_closeIcon'],
  } as const
);
export default AlertCloseButtonIcon;
