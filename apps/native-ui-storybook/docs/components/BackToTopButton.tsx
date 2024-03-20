import {
  Button,
  ButtonText,
  ChevronUpIcon,
  Icon,
  NativeUIProvider,
} from '@utilitywarehouse/native-ui';
import React, { useState } from 'react';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <NativeUIProvider>
      <Button
        onPress={scrollToTop}
        sx={{
          display: visible ? 'flex' : 'none',
          _web: {
            position: 'fixed',
            width: '100%',
            left: '40%',
            bottom: 40,
            height: 20,
            zIndex: 1,
            cursor: 'pointer',
          },
        }}
      >
        <Icon as={ChevronUpIcon} sx={{ mr: 8 }} />
        <ButtonText>Back to top</ButtonText>
      </Button>
    </NativeUIProvider>
  );
};

export default ScrollButton;
