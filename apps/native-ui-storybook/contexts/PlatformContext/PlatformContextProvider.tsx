import { Box, Pressable, Text } from '@utilitywarehouse/native-ui';
import React, { FC, PropsWithChildren, createContext, useEffect, useState } from 'react';
import { PlatformContextProps, Platform } from './types';

const PlatformContext = createContext<PlatformContextProps>({
  platform: 'web',
  args: {},
  id: '',
});

const PlatformContextProvider: FC<
  PropsWithChildren<Omit<PlatformContextProps, 'platform'> & { viewMode: 'story' | 'docs' }>
> = ({ children, args, id, viewMode }) => {
  const [platform, setPlatform] = useState<Platform>('web');
  const [showPlatformSelector, setShowPlatformSelector] = useState(viewMode === 'story');
  console.log('viewMode', viewMode);
  useEffect(() => {
    setShowPlatformSelector(viewMode === 'story');
  }, [viewMode]);
  return (
    <PlatformContext.Provider
      value={{
        args,
        id,
        platform: platform || 'web',
      }}
    >
      {showPlatformSelector && (
        <Box
          sx={{
            backgroundColor: '$brandMidnight',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            padding: 8,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: 8,
          }}
        >
          <Pressable onPress={() => setPlatform('web')}>
            <Text color={platform === 'web' ? '$white' : '$brandPink'}>Web</Text>
          </Pressable>
          <Pressable onPress={() => setPlatform('android')}>
            <Text color={platform === 'android' ? '$white' : '$brandPink'}>Android</Text>
          </Pressable>
          <Pressable onPress={() => setPlatform('ios')}>
            <Text color={platform === 'ios' ? '$white' : '$brandPink'}>iOS</Text>
          </Pressable>
        </Box>
      )}
      <Box
        sx={{
          mt: showPlatformSelector ? 40 : 0,
        }}
      >
        {children}
      </Box>
    </PlatformContext.Provider>
  );
};

export { PlatformContext, PlatformContextProvider };
