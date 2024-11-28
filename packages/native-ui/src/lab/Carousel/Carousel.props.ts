import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  ListRenderItemInfo,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';

export type CarouselRef = FlatList;

export interface CarouselContextValue {
  activeIndex: number;
  numItems: number;
}

export interface CarouselProps<T>
  extends Pick<
    FlatListProps<T>,
    'children' | 'data' | 'removeClippedSubviews' | 'renderItem' | 'scrollEnabled' | 'style'
  > {
  inactiveItemOpacity?: number;
  itemStyle?: StyleProp<ViewStyle>;
  itemWidth?: number;
  onSnapToItem?: (index: number) => void;
  showOverflow?: boolean;
  width: number;
}

export interface CarouselItemProps<T> extends ListRenderItemInfo<T>, ViewProps {
  active: boolean;
  inactiveItemOpacity: number;
  index: number;
  item: T;
  renderItem?: ListRenderItem<T> | null;
  width: number;
}

export type CarouselPaginationProps = ViewProps;

export interface CarouselPaginationItemProps extends ViewProps {
  active: boolean;
  index: number;
}
