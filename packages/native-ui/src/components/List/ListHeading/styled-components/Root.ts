import { styled, View } from '@gluestack-ui/themed';

const ListHeading = styled(
  View,
  {},
  {
    componentName: 'ListHeading',
    descendantStyle: ['_title', '_supportingText'],
    ancestorStyle: ['_listHeading'],
  }
);

export default ListHeading;
