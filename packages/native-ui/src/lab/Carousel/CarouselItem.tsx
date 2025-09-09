import { useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { CarouselItemProps } from './Carousel.props';

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
    <Animated.View style={[style as false, animatedStyles]} {...props}>
      {children}
    </Animated.View>
  );
};

export default CarouselItem;
