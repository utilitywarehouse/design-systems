/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Box, Text } from '@utilitywarehouse/native-ui';
import React from 'react';
import { Platform } from 'react-native';

const BoxWithRef = ({ ...props }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const myRef = React.useRef<any>(null);
  React.useEffect(() => {
    const styleObj = {
      borderWidth: 8,
      borderRadius: 4,
      borderColor: '#22D3EE',
      height: 100,
      width: 100,
    };

    myRef?.current?.setNativeProps?.({
      style: styleObj,
    });
  }, [myRef]);

  if (Platform.OS === 'web') {
    return (
      <Box {...props} ref={myRef}>
        <Text>This is a Box component with styling using ref (see in app view).</Text>
      </Box>
    );
  }

  return <Box {...props} ref={myRef} />;
};

BoxWithRef.description =
  'This is a basic Box component example with styling using ref. Box is a primitive component.';

export default BoxWithRef;
