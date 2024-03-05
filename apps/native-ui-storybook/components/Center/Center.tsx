import { Text, Center } from '@utilitywarehouse/native-ui';
import React from 'react';

const CenterBasic = () => {
  return (
    <Center bg="$cyan500" h={200} w={300}>
      <Text color="$brandWhite" fontFamily="WorkSans-SemiBold">
        This is the center.
      </Text>
    </Center>
  );
};

CenterBasic.description =
  'This is a basic Center component example. A center is a layout component that centers its children.';

export default CenterBasic;

export { Text, Center };
