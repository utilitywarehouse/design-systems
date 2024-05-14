// this is a comment at the beginning of the file
import * as React from 'react';
import { Box } from '@utilitywarehouse/web-ui';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';

const Component = () => (
  <div>
    <Box background={colorsCommon.brandMidnight}></Box>
    <Box background={colorsCommon.brandPrimaryPurple}></Box>
    <Box background={colors.purple100}></Box>
    <Box background={colors.grey75}></Box>
    <Box background={colorsCommon.brandWhite}></Box>
  </div>
);

export default Component;
