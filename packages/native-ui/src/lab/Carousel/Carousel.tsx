import React, { FC } from 'react';
import { View } from 'react-native';

import { CarouselProps } from './Carousel.props';
import CarouselProvider from './CarouselProvider';

export const Carousel: FC<CarouselProps> = ({ activeIndex, children, ...props }) => (
  <CarouselProvider initialActiveIndex={activeIndex}>
    <View {...props}>{children}</View>
  </CarouselProvider>
);

export default Carousel;
