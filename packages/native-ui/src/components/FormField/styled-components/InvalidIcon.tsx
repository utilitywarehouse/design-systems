import { styled } from '@gluestack-style/react';
import { AsForwarder } from '@gluestack-ui/themed';
import { WarningMediumContainedIcon } from '@utilitywarehouse/react-native-icons';

export default styled(
  AsForwarder,
  {
    props: {
      as: WarningMediumContainedIcon,
    },
  },
  {
    componentName: 'FormFieldInvalidIcon',
    ancestorStyle: ['_invalidIcon'],
  } as const
);
