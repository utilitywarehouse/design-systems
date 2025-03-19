import React, { forwardRef, useMemo } from 'react';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import AccordionContext from './Accordion.context';
import { AccordionProps } from './Accordion.props';

export const AccordionRoot = forwardRef<View, AccordionProps>(
  ({ children, noPadding, disabled, divider, ...props }, ref) => {
    const { styles } = useStyles(stylesheet);
    const context = useMemo(
      () => ({ noPadding, disabled, divider }),
      [noPadding, disabled, divider]
    );
    return (
      <AccordionContext.Provider value={context}>
        <View ref={ref} style={styles.root} {...props}>
          {children}
        </View>
      </AccordionContext.Provider>
    );
  }
);

AccordionRoot.displayName = 'AccordionRoot';

const stylesheet = createStyleSheet(() => ({
  root: {
    width: '100%',
  },
}));

export default AccordionRoot;
