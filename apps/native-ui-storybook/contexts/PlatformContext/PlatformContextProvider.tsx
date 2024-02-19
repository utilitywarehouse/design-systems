import { Box } from '@utilitywarehouse/native-ui';
import React, { FC, PropsWithChildren, createContext, useEffect, useState } from 'react';
import { PlatformContextProps, Platform } from './types';

const PlatformContext = createContext<PlatformContextProps>({
  platform: 'web',
  args: {},
  id: '',
  colourMode: 'light',
});

const PlatformContextProvider: FC<
  PropsWithChildren<
    PlatformContextProps & {
      viewMode: 'story' | 'docs';
      colourMode: 'light' | 'dark';
    }
  >
> = ({ children, args, id, colourMode, platform: device }) => {
  const [platform, setPlatform] = useState<Platform>('web');

  useEffect(() => {
    setPlatform(device);
  }, [device]);
  return (
    <PlatformContext.Provider
      value={{
        args,
        id,
        platform: platform || 'web',
        colourMode,
      }}
    >
      <Box>{children}</Box>
    </PlatformContext.Provider>
  );
};

export { PlatformContext, PlatformContextProvider };
