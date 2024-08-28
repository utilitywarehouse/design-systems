import { styled, AsForwarder } from '@gluestack-ui/themed';

const TrailingIcon = styled(
  AsForwarder,
  {
    width: 24,
    height: 24,
  },
  {
    componentName: 'ListItemTrailingIcon',
    descendantStyle: [],
    ancestorStyle: ['_trailingIcon'],
  } as const
);
export default TrailingIcon;
