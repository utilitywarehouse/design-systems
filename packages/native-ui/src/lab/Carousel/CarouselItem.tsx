import React, { useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { CarouselItemProps } from './Carousel.props';
import { View } from 'react-native';

const AnimatedView = Animated.createAnimatedComponent(View);

export const CarouselItem = ({
  active,
  children,
  inactiveOpacity = 1,
  style,
  width,
  ...props
}: CarouselItemProps) => {
  const opacity = useSharedValue<number>(inactiveOpacity);
  const animatedStyles = useAnimatedStyle(
    () => ({
      opacity: opacity.value,
      width,
    }),
    [opacity, width]
  );

  useEffect(() => {
    opacity.value = withTiming(active ? 1 : inactiveOpacity, { duration: 200 });
  }, [active, inactiveOpacity, opacity]);

  return (
    <AnimatedView style={[style as false, animatedStyles]} {...props}>
      {children}
    </AnimatedView>
  );
};

export default CarouselItem;
