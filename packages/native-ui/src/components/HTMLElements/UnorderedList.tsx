/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { View, StyleSheet, ViewProps, ViewStyle } from 'react-native';
import { Text } from '../Text';
import { SpaceValue } from '../../types';
import { useStyleProps } from '../../hooks';

export interface UnorderedListProps extends ViewProps {
  children: React.ReactNode;
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
              {React.cloneElement(child as React.ReactElement<any>, {})}
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
