/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { useStyleProps } from '../../hooks';
import { SpaceValue } from '../../types';
import { Text } from '../Text';

export interface OrderedListProps extends ViewProps {
  children: ViewProps['children'];
  gap?: SpaceValue;
  bulletStyle?: ViewStyle;
}

const OrderedList: React.FC<OrderedListProps> = ({ children, gap = '100', style, ...rest }) => {
  const { computedStyles } = useStyleProps({ gap });
  let itemNumber = 0;
  return (
    <View style={[computedStyles, style]} {...rest}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          itemNumber++;
          return (
            <View style={styles.listItemContainer}>
              <Text style={styles.number}>{`${itemNumber}.`}</Text>
              {/* @ts-expect-error - child typing */}
              {React.cloneElement(child as React.ComponentType, {})}
            </View>
          );
        }
        return child;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  number: {
    marginRight: 8,
    lineHeight: undefined, // Allow number to align with first line of text
  },
});

export default OrderedList;
