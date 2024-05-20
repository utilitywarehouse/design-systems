// this is a comment at the beginning of the file
import * as React from 'react';
import { colorsCommon, colors } from '@utilitywarehouse/colour-system';
import { Box } from '@utilitywarehouse/web-ui';
import { useDeviceSize } from '~/hooks';
import { Card } from '~/components';
import { Box, Button, ThemeProvider, styled, Typography } from '@utilitywarehouse/web-ui';

const StyledElement = () => styled('div')({ display: 'flex', flexDirection: 'column' });

const Component = () => {
  const { isTablet } = useDeviceSize();
  return (
    (<ThemeProvider>
      <Box padding={4}>
        <Card>
          {isTablet ? <StyledElement /> : null}
          <Button>Find out more</Button>
        </Card>
        <Box background={colorsCommon.brandMidnight}></Box>
        <Box background={colorsCommon.brandPrimaryPurple}></Box>
        <Box background={colors.purple100}></Box>
        <Box background={colors.grey75}></Box>
        <Box background={colorsCommon.brandWhite}></Box>
        <Box background={colorsCommon.brandWhite} padding={4}></Box>
        <Box background={colorsCommon.brandWhite}>content</Box>
        <Box background={colorsCommon.brandWhite}>
          <Typography gutterBottom>content</Typography>
        </Box>
        <Box background={colorsCommon.brandWhite}></Box>
      </Box>
    </ThemeProvider>)
  );
};

export default Component;
