// this is a comment at the beginning of the file
import * as React from 'react';
import { Button } from '@utilitywarehouse/web-ui/dist/lab';
import { IconButton } from '@utilitywarehouse/web-ui';

const Component = () => (
  <div>
    <Button
      size={{
        mobile: 'small',
        desktop: 'medium',
      }}
    ></Button>
    <Button
      size={{
        mobile: 'small',
        tablet: 'medium',
        desktop: 'small',
        wide: 'medium',
      }}
    ></Button>
    <IconButton
      size={{
        mobile: 'small',
        desktop: 'medium',
      }}
    ></IconButton>
    <IconButton
      size={{
        mobile: 'small',
        tablet: 'medium',
        desktop: 'small',
        wide: 'medium',
      }}
    ></IconButton>
  </div>
);

export default Component;
