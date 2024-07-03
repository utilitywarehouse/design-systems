import { createStyle } from '@gluestack-style/react';

export const ActionsheetContent = createStyle({
  alignItems: 'center',
  borderTopLeftRadius: '$2xl',
  borderTopRightRadius: '$2xl',
  h: '$full',
  px: '$5',
  pb: '$5',
  pt: '$2',
  bg: '$white',
  gap: '$3',
  _sectionHeaderBackground: {
    bg: '$white',
  },
  _dark: {
    bg: '$darkGrey100',
    _sectionHeaderBackground: {
      bg: '$darkGrey100',
    },
  },
  userSelect: 'none',
  defaultProps: {
    hardShadow: '5',
  },
  _web: {
    pointerEvents: 'auto',
  },
});
