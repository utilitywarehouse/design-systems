import { nanoid } from 'nanoid/non-secure';
import React, { FC, useContext, useEffect, useMemo } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Box, Text } from '../../components';
import { CarouselPaginationProps, CarouselPaginationItemProps } from './Carousel.props';
import CarouselContext from './Carousel.context';

const stylesheet = createStyleSheet(({ colorMode, colors, space }) => ({
  active: {
    backgroundColor: colorMode === 'light' ? colors.cyan400 : colors.cyan700,
  },
  page: {
    width: space[2],
    height: space[2],
    borderRadius: space[2],
    backgroundColor: colorMode === 'light' ? colors.grey175 : colors.grey300,
    paddingTop: space[2],
    overflow: 'hidden',
  },
  root: {
    alignSelf: 'center',
    flexDirection: 'row',
    columnGap: space[2],
  },
}));

export const CarouselPaginationItem: FC<CarouselPaginationItemProps> = ({
  active,
  style,
  index,
  activeStyle,
}) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Box style={[styles.page, style, active && styles.active, active && activeStyle]}>
      <Text>{index}</Text>
    </Box>
  );
};

export const CarouselPagination: FC<CarouselPaginationProps> = ({
  testID = 'pagination',
  style,
  itemStyle,
  activeItemStyle,
  ...props
}) => {
  const { styles } = useStyles(stylesheet);
  const context = useContext(CarouselContext);
  const { activeIndex = 0, numItems = 0 } = context;

  useEffect(() => {
    if (!Object.keys(context).length) {
      console.warn(
        'CarouselPagination must be a child of Carousel. Pagination will not be displayed.'
      );
    }
  }, [context]);

  const keys = useMemo(() => {
    return Array(numItems)
      .fill(null)
      .map(() => nanoid());
  }, [numItems]);

  if (!Object.keys(context).length) {
    return null;
  }

  return (
    <Box style={[styles.root, style]} testID={testID} {...props}>
      {keys.map((_, index) => (
        <CarouselPaginationItem
          active={index === activeIndex}
          index={index}
          key={keys[index]}
          style={itemStyle}
          activeStyle={activeItemStyle}
        />
      ))}
    </Box>
  );
};

export default CarouselPagination;
