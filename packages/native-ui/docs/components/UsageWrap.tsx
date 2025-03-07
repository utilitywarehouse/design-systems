import React, { FC, PropsWithChildren } from 'react';
import { Box, useColorMode } from '../../src';

const UsageWrap: FC<PropsWithChildren> = ({ children }) => {
  const colorMode = useColorMode();
  return (
    <div className="sb-unstyled">
      <Box
        mt="$4"
        p="$6"
        bg={colorMode === 'light' ? '$white' : '$grey100'}
        borderWidth="$1"
        borderColor={colorMode === 'light' ? '#f0f0f0' : '#323232'}
        width="100%"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.10) 0 1px 3px 0',
        }}
      >
        {children}
      </Box>
    </div>
  );
};

export default UsageWrap;
