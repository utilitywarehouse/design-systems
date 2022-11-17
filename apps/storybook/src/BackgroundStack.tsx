import { Background, Box } from '@utilitywarehouse/uw-web-ui-react';
import * as React from 'react';

const BackgroundStack = (props: { children: React.ReactNode }) => {
  const backgroundColors = ['white', 'whiteOwl', 'lightTint', 'purple', 'midnight'] as const;
  return (
    <Box>
      {backgroundColors.map(level => (
        <Background
          key={level}
          backgroundColor={level}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: 4,
          }}
          {...props}
        />
      ))}
    </Box>
  );
};

export default BackgroundStack;
