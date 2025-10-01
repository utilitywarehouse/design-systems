import { Meta, StoryObj } from '@storybook/react-vite';
import { colors } from '@utilitywarehouse/colour-system';
import { forwardRef, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import {
  Carousel,
  CarouselItem,
  CarouselItemsProps,
  CarouselItems,
  CarouselPagination,
} from '.';
import { Box, Heading, Text } from '../../components';

const meta = {
  title: 'Stories / Carousel',
  // @ts-expect-error - Meta type mismatch
  component: CarouselItems,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // @ts-expect-error - Meta type mismatch
    enabled: {
      control: 'boolean',
      description: 'Enable or disable the carousel',
    },
    inactiveItemOpacity: {
      control: 'number',
      description: 'Opacity of inactive items',
    },
    itemWidth: {
      control: 'number',
      description: 'Width of each item',
    },
    showOverflow: {
      control: 'boolean',
      description: 'Show overflow items',
    },
    style: {
      control: 'object',
      description: 'Style of the carousel',
    },
    width: {
      control: 'number',
      description: 'Width of the carousel',
    },
  },
  args: {
    // @ts-expect-error - Meta type mismatch
    enabled: true,
    inactiveItemOpacity: 1,
    showOverflow: false,
  },
} satisfies Meta<typeof CarouselItems>;

export default meta;
type Story = StoryObj<typeof meta>;

interface CarouselItemCardProps {
  backgroundColor: string;
  title: string;
}

interface CarouselExampleProps extends CarouselItemsProps {
  items: Array<any>;
  title: string;
}

const styles = StyleSheet.create(theme => ({
  carousel: {
    marginBottom: theme.space[4],
    marginHorizontal: -theme.space[2],
  },
  carouselItem: {
    aspectRatio: 1.6,
    borderRadius: theme.radii.lg,
    justifyContent: 'center',
    marginHorizontal: theme.space[2],
    padding: theme.space[4],
  },
  carouselItemTitle: {
    color: theme.colors.white,
  },
  title: {
    marginBottom: theme.space[2],
  },
}));

const CarouselItemCard = ({ backgroundColor, title }: CarouselItemCardProps ) => {
  return (
    <Box style={[styles.carouselItem, { backgroundColor }]}>
      <Text style={styles.carouselItemTitle}>{title}</Text>
    </Box>
  );
};

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

const CarouselExample = forwardRef(({ items, title, ...args }: CarouselExampleProps) => (
  <Box>
    <Heading style={styles.title} size="h4">{title}</Heading>
    <Carousel style={styles.carousel}>
      <CarouselItems {...args}>
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

export const Playground: Story = {
  render: args => {
    const [width, setWidth] = useState(0);

    const handleLayout = ({ nativeEvent }: LayoutChangeEvent) => {
      setWidth(nativeEvent.layout.width);
    };

    const itemWidth = width * 0.8 + 16;
    
    return (
      <Box onLayout={handleLayout}>
        <CarouselExample
          items={items}
          showOverflow
          title="Full-width"
          width={width}
          {...args}
        />
        <CarouselExample
          alignItems="center"
          items={items}
          itemWidth={itemWidth}
          showOverflow
          title="Fixed-width, centered"
          width={width}
          {...args}
        />
        <CarouselExample
          alignItems="flex-start"
          items={items}
          itemWidth={itemWidth}
          showOverflow
          title="Fixed-width, flex-start"
          width={width}
          {...args}
        />
      </Box>
    );
  }
};
