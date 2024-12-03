import { StoryFn } from '@storybook/react';
import {
  Box,
  Carousel,
  CarouselItem,
  CarouselItems,
  CarouselPagination,
  CarouselItemsProps,
} from '@utilitywarehouse/native-ui/lab';
import { colors } from '@utilitywarehouse/colour-system';

import CarouselItemCard from './CarouselItemCard';

const items = [
  {
    color: colors.purple800,
    key: 1,
    title: '1111',
  },
  {
    color: colors.red800,
    key: 2,
    title: '2222',
  },
  {
    color: colors.green800,
    key: 3,
    title: '3333',
  },
];

export const Playground: StoryFn<CarouselItemsProps> = props => (
  <Box>
    <Carousel>
      <CarouselItems {...props}>
        {items.map(({ color, key, title }) => (
          <CarouselItem key={key}>
            <CarouselItemCard
              backgroundColor={color}
              key={key}
              title={`•••• •••• •••• ${title}`}
            />
          </CarouselItem>
        ))}
      </CarouselItems>
      <CarouselPagination style={{ marginVertical: 16 }} />
    </Carousel>
  </Box>
);

Playground.args = {
  enabled: true,
  inactiveItemOpacity: 1,
  itemWidth: 200,
  showOverflow: false,
  style: {},
  width: 300,
};

export default Playground;
