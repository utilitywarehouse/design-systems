import { colorsCommon } from '@utilitywarehouse/colour-system';
import { Center, ScrollView } from '@utilitywarehouse/native-ui';
import React, { FC, PropsWithChildren } from 'react';
import { Platform, Dimensions } from 'react-native';

type ScrollWrapProps = {
  backgroundColor?: string;
  center?: boolean;
};

const ScrollWrap: FC<PropsWithChildren<ScrollWrapProps>> = ({
  children,
  backgroundColor,
  center = true,
}) => {
  const { width, height } = Dimensions.get('window');
  const bg = (() => {
    switch (backgroundColor) {
      case 'midnight':
        return colorsCommon.brandMidnight;
      case 'purple':
        return colorsCommon.brandPrimaryPurple;
      default:
        return '';
    }
  })();

  const nativeStyles =
    Platform.OS !== 'web'
      ? {
          top: -40,
          left: -40,
          width: width,
          height: Platform.OS === 'android' ? height - 50 : height - 140,
        }
      : {
          height: '100vh',
          width: 'calc(100% + 40px)',
          top: -20,
          left: -20,
        };

  return (
    <ScrollView
      sx={{
        padding: '$4',
        bg,
        position: 'absolute',
        ...nativeStyles,
      }}
    >
      {center ? <Center>{children}</Center> : children}
    </ScrollView>
  );
};

export default ScrollWrap;
