import { styled, AsForwarder } from '@gluestack-ui/themed';

const Icon = styled(
  AsForwarder,
  {
    width: 24,
    height: 24,
  },
  {
    componentName: 'ListItemIcon',
    descendantStyle: [],
    ancestorStyle: ['_icon'],
  } as const
);
export default Icon;
