import React, { FC, PropsWithChildren, useContext } from 'react';
import { EmulatorRenderer } from '@storybook/native-components';
import { PlatformContext } from '../../../contexts/PlatformContext';

const ANDROID_API_KEY = process.env.ANDROID_API_KEY; // || 'ncapxlszjomiyae42o3hr2hr34';
const IOS_API_KEY = process.env.IOS_API_KEY; // || 'w7k6nlib4xevw7fxrqp6now7iu';

const StoryWrap: FC<PropsWithChildren> = ({ children }) => {
  const { platform, id, args, colourMode } = useContext(PlatformContext);

  return platform !== 'web' ? (
    <EmulatorRenderer
      platform={platform as 'android' | 'ios'}
      deepLinkBaseUrl="native-ui://story"
      apiKey={(platform === 'android' ? ANDROID_API_KEY : IOS_API_KEY) || ''}
      storyParams={{ storyId: id, colourMode }}
      extraParams={{ ...args }}
    />
  ) : (
    children
  );
};

export default StoryWrap;
