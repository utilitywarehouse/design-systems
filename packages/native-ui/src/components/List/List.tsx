import React, { forwardRef, useMemo } from 'react';
import type ListProps from './List.props';
import { ListHeading } from './ListHeading';
import { ListContext } from './List.context';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const List = forwardRef<View, ListProps>(
  ({ children, headingText, headingSupportingText, ...props }, ref) => {
    const { loading, disabled, divider, container = 'full', dividerColor } = props;
    const value = useMemo(
      () => ({ loading, disabled, divider, container, dividerColor }),
      [loading, disabled, divider, container, dividerColor]
    );

    return (
      <ListContext.Provider value={value}>
        <View ref={ref} {...props} style={[styles.container, props.style]}>
          {headingText ? (
            <ListHeading text={headingText} supportingText={headingSupportingText} />
          ) : null}
          {children}
        </View>
      </ListContext.Provider>
    );
  }
);

List.displayName = 'List';

const styles = StyleSheet.create(theme => ({
  container: {
    width: theme.space.full,
  },
}));

export default List;
