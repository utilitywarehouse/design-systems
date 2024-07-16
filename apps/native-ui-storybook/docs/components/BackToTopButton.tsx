import { Button, ButtonIcon, ButtonText, NativeUIProvider } from '@utilitywarehouse/native-ui';
import { ChevronUpSmallIcon } from '@utilitywarehouse/react-native-icons';
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
        variant="ghost"
        sx={{
          display: visible ? 'flex' : 'none',
          maxWidth: 220,
          _web: {
            position: 'fixed',
            width: '100%',
            left: '80%',
            bottom: 40,
            height: 20,
            zIndex: 1,
            cursor: 'pointer',
          },
        }}
      >
        <ButtonIcon as={ChevronUpSmallIcon} />
        <ButtonText>Back to top</ButtonText>
      </Button>
    </NativeUIProvider>
  );
};

export default ScrollButton;
