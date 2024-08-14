/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Box } from '@utilitywarehouse/native-ui';
import React from 'react';

const BoxWithRef = ({ ...props }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const myRef = React.useRef<any>(null);
  React.useEffect(() => {
    const styleObj = {
      borderWidth: 8,
      borderRadius: 4,
      borderColor: '#22D3EE',
    };

    myRef?.current?.setNativeProps?.({
      style: styleObj,
    });
  }, [myRef]);

  return <Box {...props} ref={myRef} />;
};

BoxWithRef.description =
  'This is a basic Box component example with styling using ref. Box is a primitive component.';

export default BoxWithRef;
