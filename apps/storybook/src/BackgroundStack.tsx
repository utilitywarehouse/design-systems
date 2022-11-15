import { Background, Box } from '@utilitywarehouse/uw-web-ui-react';
import * as React from 'react';

const BackgroundStack: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
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
        >
          {children}
        </Background>
      ))}
    </Box>
  );
};

export default BackgroundStack;
