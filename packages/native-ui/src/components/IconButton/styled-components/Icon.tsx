import { styled, AsForwarder } from '@gluestack-ui/themed';

const AlertIconButtonChevron = styled(AsForwarder, {}, {
  componentName: 'IconButtonIcon',
  ancestorStyle: ['_icon'],
} as const);
export default AlertIconButtonChevron;
