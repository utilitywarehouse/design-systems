import { Stack, Box } from '@utilitywarehouse/web-ui';
import * as React from 'react';

const BackgroundStack = (props: { children: React.ReactNode }) => {
  const backgroundColors = ['white', 'whiteOwl', 'lightTint', 'purple', 'midnight'] as const;
  return (
    <Stack spacing={0}>
      {backgroundColors.map(level => (
        <Box
          key={level}
          background={level}
          display="flex"
          justifyContent="center"
          padding={4}
          {...props}
        />
      ))}
    </Stack>
  );
};

export default BackgroundStack;
