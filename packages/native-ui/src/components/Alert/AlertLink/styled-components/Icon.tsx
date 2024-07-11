import { styled, AsForwarder } from '@gluestack-ui/themed';
import { ChevronRightSmallIcon } from '@utilitywarehouse/react-native-icons';

const AlertLinkChevron = styled(
  AsForwarder,
  {
    width: 16,
    height: 16,
    props: {
      as: ChevronRightSmallIcon,
    },
  },
  {
    componentName: 'AlertLinkChevron',
    descendantStyle: [],
    ancestorStyle: ['_chevron'],
  } as const
);

export default AlertLinkChevron;
