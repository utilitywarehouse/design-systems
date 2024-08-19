// this is a comment at the beginning of the file
import * as React from 'react';
import { Button, Box, Link } from '@utilitywarehouse/web-ui';

const Component = () => (
  <Box>
    <Button>Button</Button>
    <Button variant='solid'>Button</Button>
    <Button variant='outline'>Button</Button>
    <Link asChild><button>Button</button></Link>
    <Link href="https://uw.co.uk/services">
      Button
    </Link>
  </Box>
);

export default Component;
