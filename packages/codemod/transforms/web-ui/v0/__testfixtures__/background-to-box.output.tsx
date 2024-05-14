// this is a comment at the beginning of the file
import * as React from 'react';
import { colorsCommon, colors } from '@utilitywarehouse/colour-system';
import { Box } from '@utilitywarehouse/web-ui';

const Component = () => (
  <div>
    <Box background={colorsCommon.brandMidnight}></Box>
    <Box background={colorsCommon.brandPrimaryPurple}></Box>
    <Box background={colors.purple100}></Box>
    <Box background={colors.grey75}></Box>
    <Box background={colorsCommon.brandWhite}></Box>
    <Box background={colorsCommon.brandWhite} padding={4}></Box>
    <Box background={colorsCommon.brandWhite}>content</Box>
    <Box background={colorsCommon.brandWhite}>
      <span>content</span>
    </Box>
    <Box background={colorsCommon.brandWhite}></Box>
  </div>
);

export default Component;
