// this is a comment at the beginning of the file
import * as React from 'react';
import { IconButton } from '@utilitywarehouse/web-ui-v0';
import { ChevronRightMediumIcon } from '@utilitywarehouse/react-icons';

const Component = () => (
  <div>
    <IconButton label="continue">
        <ChevronRightMediumIcon/>
    </IconButton>
    <IconButton size='small' label="continue">
        <ChevronRightMediumIcon/>
    </IconButton>
    <IconButton size='medium' label="continue">
        <ChevronRightMediumIcon/>
    </IconButton>
  </div>
);

export default Component;
