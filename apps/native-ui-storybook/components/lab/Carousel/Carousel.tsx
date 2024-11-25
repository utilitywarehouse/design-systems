import { StoryFn } from '@storybook/react';
import { Box, Carousel, CarouselProps } from '@utilitywarehouse/native-ui/lab';

import CarouselItemCard from './CarouselItemCard'
import { data } from './Carousel.constants'
import { CarouselItem } from './Carousel.props'

export const Playground: StoryFn<CarouselProps<CarouselItem>> = (props) => (
  <Box>
    <Carousel
      {...props}
      renderItem={({ item }) => <CarouselItemCard {...item} />}
    />
  </Box>
);

Playground.args = {
  data,
  inactiveItemOpacity: 1,
  itemStyle: {},
  itemWidth: undefined,
  onSnapToItem: undefined,
  removeClippedSubviews: false,
  scrollEnabled: true,
  showOverflow: false,
  style: {},
  width: 300,
};

export default Playground;
