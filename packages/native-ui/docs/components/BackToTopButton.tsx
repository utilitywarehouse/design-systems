import { Button, ButtonIcon, ButtonText } from '../../src';
import { ChevronUpSmallIcon } from '@utilitywarehouse/react-native-icons';
import React, { useState } from 'react';
import { Platform } from 'react-native';

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
    <div className="sb-unstyled">
      <Button
        onPress={scrollToTop}
        variant="ghost"
        // @ts-expect-error - This is a playground
        style={{
          display: visible ? 'flex' : 'none',
          maxWidth: 220,
          ...(Platform.OS === 'web'
            ? {
                position: 'fixed',
                width: '100%',
                right: 10,
                bottom: 40,
                height: 20,
                zIndex: 1,
                cursor: 'pointer',
              }
            : {}),
        }}
      >
        <ButtonIcon as={ChevronUpSmallIcon} />
        <ButtonText>Back to top</ButtonText>
      </Button>
    </div>
  );
};

export default ScrollButton;
