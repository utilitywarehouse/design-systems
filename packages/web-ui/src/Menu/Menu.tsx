import { forwardRef } from 'react';
import MuiMenu, { type MenuProps as MuiMenuProps } from '@mui/material/Menu';
import { Background } from '../Background';

export interface MenuProps extends Omit<MuiMenuProps, 'ref'> {}

export const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu(
  { children, ...props },
  ref
) {
  return (
    <MuiMenu ref={ref} {...props}>
      <Background background="white">{children}</Background>
    </MuiMenu>
  );
});
