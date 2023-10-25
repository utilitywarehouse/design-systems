import * as React from 'react';
import { forwardRef } from 'react';
import MuiMenu, { type MenuProps as MuiMenuProps } from '@mui/material/Menu';
import { styled } from '@mui/material';
import { spacing } from '../utils';
import { colors } from '@utilitywarehouse/colour-system';

export interface MenuProps extends Omit<MuiMenuProps, 'ref'> {}

const StyledMenu = styled(MuiMenu)({
  '& .MuiPaper-root': {
    marginTop: spacing(1),
    borderColor: colors.cyan400,
    borderRadius: spacing(1),
    borderStyle: 'solid',
    borderWidth: '2px',
    padding: '0',
    boxShadow: 'none',
    '& .MuiMenu-list': {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
});

/**
 * A menu displays a list of choices on a temporary surface. It appears when
 * the user interacts with a button, or other control.
 *
 * Please refer to [MUI](https://mui.com/material-ui/react-menu/) for more extensive documentation.
 *
 * > This component should be wrapped in a ThemeProvider
 */
export const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu(props, ref) {
  return (
    <StyledMenu
      ref={ref}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      {...props}
    />
  );
});
