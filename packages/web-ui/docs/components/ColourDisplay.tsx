import React from 'react';
import { Box, Text } from '../../../web-ui/src';

interface ColourDisplayProps {
  colorScale: any;
}

export const ColourDisplay = ({ colorScale }: ColourDisplayProps) => {
  return (
    <Box display="flex" flexDirection="column" gap={4} padding={0} margin={0}>
      {Object.keys(colorScale).map(scale => (
        <Box display="flex" flexDirection="column" key={scale} gap={2}>
          <Box component="h2" textTransform="capitalize">
            {scale}
          </Box>

          <Box display="flex" flexDirection="column" gap={2} component="ul" padding={0} margin={0}>
            {Object.keys(colorScale[scale]).map(colour => {
              const { name, description, value } = colorScale[scale][colour];
              return (
                <Box
                  component="li"
                  key={colour}
                  display="grid"
                  gridTemplateColumns="100px 100px 1fr"
                  gap={4}
                >
                  <Box width={100} height={100} bgcolor={value} />
                  <Text variant="body" bold sx={{ alignSelf: 'center' }}>
                    {name}
                  </Text>
                  <Text variant="body">{description}</Text>
                </Box>
              );
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
