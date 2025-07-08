import { useMemo } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import AccordionContext from './Accordion.context';
import { AccordionProps } from './Accordion.props';

export const AccordionRoot = ({
  children,
  noPadding,
  disabled,
  divider,
  contentNoPadding,
  ...props
}: AccordionProps) => {
  const context = useMemo(
    () => ({ noPadding, disabled, divider, contentNoPadding }),
    [noPadding, disabled, divider, contentNoPadding]
  );
  return (
    <AccordionContext.Provider value={context}>
      <View style={styles.root} {...props}>
        {children}
      </View>
    </AccordionContext.Provider>
  );
};

AccordionRoot.displayName = 'AccordionRoot';

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
});

export default AccordionRoot;
