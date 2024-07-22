import { styled, View } from '@gluestack-ui/themed';

const LeadingContent = styled(
  View,
  {},
  {
    componentName: 'ListItemLeadingContent',
    descendantStyle: ['_icon'],
    ancestorStyle: ['_leadingContent'],
  }
);

export default LeadingContent;
