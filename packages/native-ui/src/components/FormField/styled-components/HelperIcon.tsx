import { styled } from '@gluestack-style/react';
import { AsForwarder } from '@gluestack-ui/themed';
import { InformationMediumContainedIcon } from '@utilitywarehouse/react-native-icons';

export default styled(
  AsForwarder,
  {
    props: {
      as: InformationMediumContainedIcon,
    },
  },
  {
    componentName: 'FormFieldHelperIcon',
    ancestorStyle: ['_helperIcon'],
  } as const
);
