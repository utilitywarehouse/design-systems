import { styled, AsForwarder } from '@gluestack-ui/themed';

const AlertIconButtonChevron = styled(
  AsForwarder,
  {
    width: 24,
    height: 24,
  },
  {
    componentName: 'AlertIconButtonChevron',
    descendantStyle: [],
    ancestorStyle: ['_buttonIcon'],
  } as const
);
export default AlertIconButtonChevron;
