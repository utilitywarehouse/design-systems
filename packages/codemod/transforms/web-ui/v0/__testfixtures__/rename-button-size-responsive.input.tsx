// this is a comment at the beginning of the file
import * as React from 'react';
import { Button } from '@utilitywarehouse/web-ui/dist/lab';
import { IconButton } from '@utilitywarehouse/web-ui';

const Component = () => (
  <div>
    <Button
      size={{
        mobile: 'small',
        desktop: 'large',
      }}
    ></Button>
    <Button
      size={{
        mobile: 'small',
        tablet: 'large',
        desktop: 'small',
        wide: 'large',
      }}
    ></Button>
    <IconButton
      size={{
        mobile: 'small',
        desktop: 'large',
      }}
    ></IconButton>
    <IconButton
      size={{
        mobile: 'small',
        tablet: 'large',
        desktop: 'small',
        wide: 'large',
      }}
    ></IconButton>
  </div>
);

export default Component;
