import { styled, VStack } from '@gluestack-ui/themed';

const Content = styled(
  VStack,
  {
    props: {
      gap: '$1',
      flex: 1,
    },
  },
  {
    componentName: 'ListItemContent',
    descendantStyle: ['_text', '_supportingText'],
    ancestorStyle: ['_content'],
  }
);

export default Content;
