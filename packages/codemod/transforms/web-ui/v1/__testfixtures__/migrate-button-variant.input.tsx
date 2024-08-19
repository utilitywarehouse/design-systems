// this is a comment at the beginning of the file
import * as React from 'react';
import { Button, Box } from '@utilitywarehouse/web-ui';

const Component = () => (
  <Box>
    <Button>Button</Button>
    <Button variant="primary">Button</Button>
    <Button variant="secondary">Button</Button>
    <Button variant="tertiary">Button</Button>
    <Button variant="tertiary" href="https://uw.co.uk/services">
      Button
    </Button>
  </Box>
);

export default Component;
