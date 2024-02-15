import React, { FC, PropsWithChildren, useContext } from 'react';
import { EmulatorRenderer } from '@storybook/native-components';
import { PlatformContext } from '../../contexts/PlatformContext';

const StoryWrap: FC<PropsWithChildren> = ({ children }) => {
  const { platform, id, args } = useContext(PlatformContext);

  return platform !== 'web' ? (
    <EmulatorRenderer
      platform={platform as 'android' | 'ios'}
      deepLinkBaseUrl="native-ui://story"
      apiKey={platform === 'android' ? 'ncapxlszjomiyae42o3hr2hr34' : 'w7k6nlib4xevw7fxrqp6now7iu'}
      storyParams={{ storyId: id }}
      extraParams={{ ...args }}
    />
  ) : (
    children
  );
};

export default StoryWrap;
