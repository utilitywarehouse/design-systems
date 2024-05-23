import { styled, AsForwarder } from '@gluestack-ui/themed';

const AlertIconButtonChevron = styled(
  AsForwarder,
  {
    width: 24,
    height: 24,
  },
  {
    componentName: 'IconButtonIcon',
    ancestorStyle: ['_icon'],
  } as const
);
export default AlertIconButtonChevron;
