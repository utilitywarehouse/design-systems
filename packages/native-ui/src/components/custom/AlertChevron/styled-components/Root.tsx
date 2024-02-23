import { styled, AsForwarder } from '@gluestack-ui/themed';

const AlertChevron = styled(
  AsForwarder,
  {
    width: 24,
    height: 24,
  },
  {
    componentName: 'AlertChevron',
    descendantStyle: [],
    ancestorStyle: ['_chevron'],
  } as const
);

export default AlertChevron;
