import { styled, AsForwarder } from '@gluestack-ui/themed';

const AlertLinkChevron = styled(
  AsForwarder,
  {
    width: 16,
    height: 16,
  },
  {
    componentName: 'AlertLinkChevron',
    descendantStyle: [],
    ancestorStyle: ['_chevron'],
  } as const
);

export default AlertLinkChevron;
