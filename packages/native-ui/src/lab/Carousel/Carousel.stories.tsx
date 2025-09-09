import { Meta, StoryObj } from '@storybook/react-vite';
import { colors } from '@utilitywarehouse/colour-system';
import { FC } from 'react';
import { StyleSheet } from 'react-native-unistyles';
import { Carousel, CarouselItem, CarouselItems, CarouselPagination } from '.';
import { Box, Text } from '../../components';

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
    itemWidth: 300,
    showOverflow: false,
    style: {},
    width: 300,
  },
} satisfies Meta<typeof CarouselItems>;

export default meta;
type Story = StoryObj<typeof meta>;

interface CarouselItemProps {
  backgroundColor: string;
  title: string;
}

const styles = StyleSheet.create(theme => ({
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
}));

const CarouselItemCard: FC<CarouselItemProps> = ({ backgroundColor, title }) => {
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

export const Playground: Story = {
  render: args => (
    <Box>
      <Carousel>
        {/* @ts-expect-error - Meta type mismatch */}
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
  ),
};
