import { StoryFn } from '@storybook/react';
import { Box, Carousel } from '@utilitywarehouse/native-ui/lab';
import { useRef, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

import CarouselItemCard from './CarouselItemCard'
import { data } from './Carousel.constants'
import { CarouselItem } from './Carousel.props'

export const CarouselBasic: StoryFn<{
  data: CarouselItem[]
}> = ({ data }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  const handleLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    setWidth(nativeEvent.layout.width);
  };
  
  return (
    <Box onLayout={handleLayout}>
      <Carousel
        data={data}
        ref={ref}
        renderItem={({ item }) => <CarouselItemCard {...item} />}
        width={width}
      />
    </Box>
  );
};

CarouselBasic.args = {
  data,
};

export default CarouselBasic;
