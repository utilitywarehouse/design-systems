import { styled, View } from '@gluestack-ui/themed';

const TrailingContent = styled(
  View,
  {},
  {
    componentName: 'ListItemTrailingContent',
    descendantStyle: ['_icon'],
    ancestorStyle: ['_trailingContent'],
  }
);

export default TrailingContent;
