import { Button, ButtonText } from '@utilitywarehouse/native-ui';
import React from 'react';

const ButtonBasic = () => {
  return (
    <Button>
      <ButtonText>Example</ButtonText>
    </Button>
  );
};

ButtonBasic.description =
  'This is a basic Button component example. A Button is a layout component that Buttons its children.';

export default ButtonBasic;

export { ButtonText, Button };
