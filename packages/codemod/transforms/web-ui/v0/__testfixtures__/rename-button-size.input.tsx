// this is a comment at the beginning of the file
import * as React from 'react';
import { Button } from '@utilitywarehouse/web-ui/dist/lab';
import { IconButton } from '@utilitywarehouse/web-ui';

const Component = () => (
  <div>
    <Button></Button>
    <Button size='small'></Button>
    <Button size='large'></Button>
    <IconButton></IconButton>
    <IconButton size='small'></IconButton>
    <IconButton size='large'></IconButton>
  </div>
);

export default Component;
