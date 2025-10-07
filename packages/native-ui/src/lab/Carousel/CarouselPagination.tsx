import { nanoid } from 'nanoid/non-secure';
import React, { FC, useContext, useEffect, useMemo } from 'react';
import { StyleSheet } from 'react-native-unistyles';

import { Text } from '../../components/Text';
import { Box } from '../../';
import { CarouselPaginationProps, CarouselPaginationItemProps } from './Carousel.props';
import CarouselContext from './Carousel.context';

const styles = StyleSheet.create(theme => ({
  active: {
    backgroundColor: theme.colorMode === 'light' ? theme.colors.cyan400 : theme.colors.cyan700,
  },
  page: {
    width: theme.space['100'],
    height: theme.space['100'],
    borderRadius: theme.space['100'],
    backgroundColor: theme.colorMode === 'light' ? theme.colors.grey175 : theme.colors.grey300,
    paddingTop: theme.space['100'],
    overflow: 'hidden',
  },
  root: {
    alignSelf: 'center',
    flexDirection: 'row',
    columnGap: theme.space['100'],
  },
}));

export const CarouselPaginationItem: FC<CarouselPaginationItemProps> = ({
  active,
  style,
  index,
  activeStyle,
}) => {
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
