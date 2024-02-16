import { Box, HStack, Pressable, Switch, Text } from '@utilitywarehouse/native-ui';
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
    Omit<PlatformContextProps, 'platform'> & {
      viewMode: 'story' | 'docs';
      colourMode: 'light' | 'dark';
      setColourMode: (mode: 'light' | 'dark') => void;
    }
  >
> = ({ children, args, id, viewMode, colourMode, setColourMode }) => {
  const [platform, setPlatform] = useState<Platform>('web');
  const [showPlatformSelector, setShowPlatformSelector] = useState(viewMode === 'story');

  useEffect(() => {
    setShowPlatformSelector(viewMode === 'story');
  }, [viewMode]);
  return (
    <PlatformContext.Provider
      value={{
        args,
        id,
        platform: platform || 'web',
        colourMode,
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
            justifyContent: 'space-between',
            gap: 8,
          }}
        >
          <Box>
            <HStack space="md">
              <Switch
                value={colourMode === 'dark'}
                onToggle={() => setColourMode(colourMode === 'dark' ? 'light' : 'dark')}
              />
              <Text size="sm" color="$brandWhite">
                Dark mode
              </Text>
            </HStack>
          </Box>
          <Box
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-between',
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
