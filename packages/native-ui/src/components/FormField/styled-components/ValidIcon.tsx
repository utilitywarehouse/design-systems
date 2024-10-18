import { styled } from '@gluestack-style/react';
import { AsForwarder } from '@gluestack-ui/themed';
import { TickMediumContainedIcon } from '@utilitywarehouse/react-native-icons';

export default styled(
  AsForwarder,
  {
    props: {
      as: TickMediumContainedIcon,
    },
  },
  {
    componentName: 'FormFieldValidIcon',
    ancestorStyle: ['_validIcon'],
  } as const
);
