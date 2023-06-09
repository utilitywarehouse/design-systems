import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '../Box';
import { useDeviceSize } from './useDeviceSize';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Divider } from '@mui/material';

const meta: Meta<typeof useDeviceSize> = {
  title: 'Web UI / Hooks',
};

export default meta;
type Story = StoryObj<typeof useDeviceSize>;

export const Workshop: Story = {
  name: 'useDeviceSize',
  render: () => {
    const { deviceSize, isMobile, isTablet, isDesktop, isWide } = useDeviceSize();
    return (
      <Stack spacing={1} width={200} divider={<Divider />}>
        <Box display="flex" justifyContent="space-between">
          <Text variant="body" component="span">
            deviceSize
          </Text>
          <Text variant="body" component="span" bold>
            {deviceSize}
          </Text>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Text variant="body" component="span">
            isMobile
          </Text>
          <Text variant="body" component="span" bold={isMobile}>
            {`${isMobile}`}
          </Text>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Text variant="body" component="span">
            isTablet
          </Text>
          <Text variant="body" component="span" bold={isTablet}>
            {`${isTablet}`}
          </Text>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Text variant="body" component="span">
            isDesktop
          </Text>
          <Text variant="body" component="span" bold={isDesktop}>
            {`${isDesktop}`}
          </Text>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Text variant="body" component="span">
            isWide
          </Text>
          <Text variant="body" component="span" bold={isWide}>
            {`${isWide}`}
          </Text>
        </Box>
      </Stack>
    );
  },
};
