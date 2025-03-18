import React, { FC } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Box } from '../../components/Box';
import { Icon } from '../../components/Icon';
import { AccordionIconProps } from './types';

export const AccordionIcon: FC<AccordionIconProps> = ({ as, ...props }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Box style={styles.iconWrapper}>
      <Icon as={as} style={styles.icon} {...props} />
    </Box>
  );
};

const stylesheet = createStyleSheet(({ space, colors, colorMode }) => ({
  iconWrapper: {
    marginLeft: space[2],
  },
  icon: {
    color: colorMode === 'light' ? colors.grey900 : colors.white,
  },
}));

export default AccordionIcon;
