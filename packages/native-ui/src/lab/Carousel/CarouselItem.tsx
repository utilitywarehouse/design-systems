import React, { useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { CarouselItemProps } from './Carousel.props';

export const CarouselItem = <T,>({
  active,
  inactiveItemOpacity,
  index,
  item,
  renderItem,
  separators,
  style,
  width,
  ...props
}: CarouselItemProps<T>) => {
  const opacity = useSharedValue<number>(inactiveItemOpacity);
  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
    width,
  }), [opacity, width]);

  useEffect(() => {
    opacity.value = withTiming(active ? 1 : inactiveItemOpacity, { duration: 200 });
  }, [active, inactiveItemOpacity, opacity]);

  return (
    <Animated.View style={[style, animatedStyles]} {...props}>
      {renderItem?.({ item, index, separators })}
    </Animated.View>
  );
};

export default CarouselItem;
