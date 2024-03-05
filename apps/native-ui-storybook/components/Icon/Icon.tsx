import React from 'react';

import { Icon, AddIcon, createIcon } from '@utilitywarehouse/native-ui';

const IconBasic = ({ size, ...props }: any) => {
  return <Icon size={size} {...props} as={AddIcon} />;
};

IconBasic.description =
  'This is a basic Icon component example. Icons are used to communicate a state that affects a system, feature or page';

export default IconBasic;

export { Icon, createIcon };
