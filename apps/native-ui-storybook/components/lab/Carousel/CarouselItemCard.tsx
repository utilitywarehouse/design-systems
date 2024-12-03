import { Text } from '@utilitywarehouse/native-ui';
import { createStyleSheet, useStyles } from '@utilitywarehouse/native-ui';
import { Box } from '@utilitywarehouse/native-ui/lab';
import { FC } from 'react';

interface CarouselItemProps {
  backgroundColor: string,
  title: string;
}

const stylesheet = createStyleSheet(({ colors, radii, space }) => ({
  carouselItem: {
    aspectRatio: 1.6,
    borderRadius: radii.lg,
    justifyContent: 'center',
    marginHorizontal: space[2],
    padding: space[4],
  },
  carouselItemTitle: {
    color: colors.white,
  },
}));

export const CarouselItemCard: FC<CarouselItemProps> = ({ backgroundColor, title }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Box style={[styles.carouselItem, { backgroundColor }]}>
      <Text style={styles.carouselItemTitle}>{title}</Text>
    </Box>
  );
};

export default CarouselItemCard;
