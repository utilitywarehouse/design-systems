// this is a comment at the beginning of the file
import * as React from 'react';
import { IconButton } from '@utilitywarehouse/web-ui';
import { ChevronRightMediumIcon } from '@utilitywarehouse/react-icons';

const Component = () => (
  <div>
    <IconButton
      label="continue"
      size={{
        mobile: 'small',
        desktop: 'medium',
      }}
    >
      <ChevronRightMediumIcon />
    </IconButton>
    <IconButton
      label="continue"
      size={{
        mobile: 'small',
        tablet: 'medium',
        desktop: 'small',
        wide: 'medium',
      }}
    >
      <ChevronRightMediumIcon />
    </IconButton>
  </div>
);

export default Component;
