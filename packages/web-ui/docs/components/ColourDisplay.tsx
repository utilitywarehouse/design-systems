import React from 'react';
import { Box, Text } from '../../../web-ui/src';
import { colors } from '@utilitywarehouse/colour-system';

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
            <Box
              component="li"
              display="grid"
              gridTemplateColumns="200px 150px 100px 1fr"
              alignItems="center"
              gap={2}
              borderBottom={`1px solid ${colors.grey100}`}
            >
              <Box width={200} height={60} />
              <Text variant="body" bold className="sb-unstyled">
                Name
              </Text>
              <Text variant="body" bold className="sb-unstyled">
                Value
              </Text>
              <Text variant="body" bold className="sb-unstyled">
                Description
              </Text>
            </Box>
            {Object.keys(colorScale[scale]).map(colour => {
              const { name, description, value } = colorScale[scale][colour];
              return (
                <Box
                  component="li"
                  key={colour}
                  display="grid"
                  gridTemplateColumns="200px 150px 100px 1fr"
                  alignItems="center"
                  gap={2}
                >
                  <Box width={200} height={60} bgcolor={value} borderRadius="8px" />
                  <Text variant="body" bold className="sb-unstyled">
                    {name}
                  </Text>
                  <Text variant="body" className="sb-unstyled">
                    {value}
                  </Text>
                  <Text variant="body" className="sb-unstyled">
                    {description}
                  </Text>
                </Box>
              );
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
