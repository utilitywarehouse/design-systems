import { styled, AsForwarder } from '@gluestack-ui/themed';

const ValidationIcon = styled(AsForwarder, {}, {
  componentName: 'InputValidationIcon',
  descendantStyle: [],
  ancestorStyle: ['_validationIcon'],
} as const);

export default ValidationIcon;
