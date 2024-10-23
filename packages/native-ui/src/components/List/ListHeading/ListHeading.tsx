import React, { forwardRef } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { useListContext } from '../List.context';
import ListHeadingTitle from './ListHeadingTitle';
import ListHeadingSupportingText from './ListHeadingSupportingText';
import ListHeadingProps from './ListHeading.props';

const ListHeading = forwardRef<View, ListHeadingProps>(
  ({ text, supportingText, children, style, ...props }, ref) => {
    const listContext = useListContext();
    const { styles } = useStyles(stylesheet, { container: listContext?.container });

    return (
      <View ref={ref} {...props} style={[styles.container, style]}>
        {children ? (
          children
        ) : (
          <>
            <ListHeadingTitle>{text}</ListHeadingTitle>
            {!!supportingText && (
              <ListHeadingSupportingText>{supportingText}</ListHeadingSupportingText>
            )}
          </>
        )}
      </View>
    );
  }
);

ListHeading.displayName = 'ListHeading';

const stylesheet = createStyleSheet(({ space }) => ({
  container: {
    gap: space[1],
    paddingHorizontal: space[4],
    paddingTop: space[4],
    paddingBottom: space[3],
    variants: {
      container: {
        full: {},
        card: {
          paddingLeft: space[0],
        },
      },
    },
  },
}));

export default ListHeading;
