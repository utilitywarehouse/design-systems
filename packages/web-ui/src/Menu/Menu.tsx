import { forwardRef } from 'react';
import MuiMenu, { type MenuProps as MuiMenuProps } from '@mui/material/Menu';

export interface MenuProps extends Omit<MuiMenuProps, 'ref'> {}

/**
 * A menu displays a list of choices on a temporary surface. It appears when
 * the user interacts with a button, or other control.
 *
 * Please refer to [MUI](https://mui.com/material-ui/react-menu/) for more extensive documentation.
 */
export const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu(
  { children, ...props },
  ref
) {
  return (
    <MuiMenu ref={ref} {...props}>
      {children}
    </MuiMenu>
  );
});
