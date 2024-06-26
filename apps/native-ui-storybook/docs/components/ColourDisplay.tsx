import React from 'react';
import { Box, Text, Heading } from '@utilitywarehouse/native-ui';
import { Divider } from '@utilitywarehouse/native-ui/unstyled';

interface ColourDisplayProps {
  colorScale: any;
}

const cellStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

export const ColourDisplay = ({ colorScale }: ColourDisplayProps) => {
  return (
    <Box display="flex" flexDirection="column">
      {Object.keys(colorScale).map((scale, index) => (
        <Box display="flex" flexDirection="column" key={scale} gap={20}>
          {index > 0 && <Divider bg="$grey100" my={10} />}
          <Heading fontSize={20} textTransform="capitalize">
            {scale}
          </Heading>
          <Box display="flex" flexDirection="column" gap={12} flex={1} padding={0} margin={0}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 8,
                alignItems: 'flex-end',
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 20,
                }}
              />
              <Box sx={cellStyle}>
                <Text fontFamily="WorkSans-SemiBold">Name</Text>
              </Box>
              <Box sx={cellStyle}>
                <Text fontFamily="WorkSans-SemiBold">Value</Text>
              </Box>
              <Box sx={cellStyle}>
                <Text fontFamily="WorkSans-SemiBold">Description</Text>
              </Box>
            </Box>
            {Object.keys(colorScale[scale]).map(colour => {
              const { name, description, value } = colorScale[scale][colour];
              return (
                <Box key={colour}>
                  <Divider bg="$grey100" my={10} />
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: 8,
                      alignItems: 'flex-start',
                      flex: 0.16,
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 60,
                        bg: value,
                        borderRadius: 8,
                      }}
                    />
                    <Box sx={cellStyle} flex={0.16}>
                      <Text>{name}</Text>
                    </Box>
                    <Box sx={cellStyle} flex={0.16}>
                      <Text>{value?.toUpperCase()}</Text>
                    </Box>
                    <Box sx={cellStyle} flexBasis="50%">
                      <Text sx={{ flex: 1, flexWrap: 'wrap' }}>{description}</Text>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
