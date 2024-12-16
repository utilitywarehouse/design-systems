import { Text } from '@utilitywarehouse/native-ui';
import { StyleSheet } from '@utilitywarehouse/native-ui';
import { Box } from '@utilitywarehouse/native-ui/lab';
import React, { FC } from 'react';

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

export const CarouselItemCard: FC<CarouselItemProps> = ({ backgroundColor, title }) => {
  return (
    <Box style={[styles.carouselItem, { backgroundColor }]}>
      <Text style={styles.carouselItemTitle}>{title}</Text>
    </Box>
  );
};

export default CarouselItemCard;
