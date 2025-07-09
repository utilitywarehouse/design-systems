/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { useStyleProps } from '../../hooks';
import { SpaceValue } from '../../types';
import { Text } from '../Text';

export interface UnorderedListProps extends ViewProps {
  children: ViewProps['children'];
  gap?: SpaceValue;
  bulletStyle?: ViewStyle;
}

const UnorderedList: React.FC<UnorderedListProps> = ({ children, gap = '100', style, ...rest }) => {
  const { computedStyles } = useStyleProps({ gap });
  return (
    <View style={[computedStyles, style]} {...rest}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return (
            <View style={styles.listItemContainer}>
              <Text style={styles.bullet}>•</Text>
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
  bullet: {
    marginRight: 8,
    lineHeight: undefined, // Allow bullet to align with first line of text
  },
});

export default UnorderedList;
