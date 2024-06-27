import { styled, AsForwarder } from '@gluestack-ui/themed';
import { ChevronRightMediumIcon } from '@utilitywarehouse/react-native-icons';

const AlertIconButtonChevron = styled(
  AsForwarder,
  {
    width: 24,
    height: 24,
    props: {
      as: ChevronRightMediumIcon,
    },
  },
  {
    componentName: 'AlertIconButtonChevron',
    descendantStyle: [],
    ancestorStyle: ['_buttonIcon'],
  } as const
);
export default AlertIconButtonChevron;
