// this is a comment at the beginning of the file
import * as React from 'react';
import { Button, Box } from '@utilitywarehouse/web-ui';

const Component = () => (
  <Box>
    <Button asChild><a href="https://uw.co.uk/services">View UW services</a></Button>
    <Button asChild variant='solid'><a href="https://uw.co.uk/services">View UW services</a></Button>
    <Link href="https://uw.co.uk/services">
      View UW services
    </Link>
  </Box>
);

export default Component;
