import * as React from 'react';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { Box } from '../Box';
import { Stack } from '../Stack';

interface BackgroundsProps {
  children: React.ReactNode;
}

const Backgrounds = (props: BackgroundsProps) => (
  <Stack spacing={0}>
    {[colorsCommon.brandWhite, colorsCommon.brandPrimaryPurple, colorsCommon.brandMidnight].map(
      bg => (
        <Box
          key={bg}
          background={bg}
          display="flex"
          justifyContent="center"
          padding={4}
          {...props}
        />
      )
    )}
  </Stack>
);

export default Backgrounds;
