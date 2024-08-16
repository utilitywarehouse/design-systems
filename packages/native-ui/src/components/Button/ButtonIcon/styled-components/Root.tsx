import { styled, AsForwarder } from '@gluestack-ui/themed';

import type { ButtonIcon as GSButtonIcon } from '@gluestack-ui/themed';
import type { ComponentProps } from 'react';

const ButtonIcon = styled(
  AsForwarder,
  {},
  {
    componentName: 'ButtonIcon',
    descendantStyle: [],
    ancestorStyle: ['_icon'],
  }
) as React.ForwardRefExoticComponent<ComponentProps<typeof GSButtonIcon> & object> & {
  displayName: string;
};
export default ButtonIcon;
