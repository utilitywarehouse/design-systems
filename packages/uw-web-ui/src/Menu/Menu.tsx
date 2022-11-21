import * as React from 'react';
import { styled } from '@mui/material/styles';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { type MenuProps as MuiMenuProps, default as MuiMenu } from '@mui/material/Menu';
import {
  type MenuItemProps as MuiMenuItemProps,
  default as MuiMenuItem,
} from '@mui/material/MenuItem';
import { BackgroundProvider } from '../Background';
import Typography from '../Typography';

export interface MenuProps extends Omit<MuiMenuProps, 'ref'> {}

const StyledMenu = styled(MuiMenu)(({ theme }) => ({
  transform: `translateY(${theme.spacing(1)})`,
  '& .MuiPaper-root': {
    borderColor: colors.cyan,
    borderRadius: theme.spacing(1),
    borderStyle: 'solid',
    borderWidth: '2px',
    padding: '0',
    boxShadow: 'none',
    '& .MuiMenu-list': {
      padding: 0,
    },
  },
}));

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(({ ...props }, ref) => {
  return (
    <BackgroundProvider backgroundColor="white">
      <StyledMenu {...props} ref={ref} />
    </BackgroundProvider>
  );
});

Menu.displayName = 'Menu';
Menu.defaultProps = {
  anchorOrigin: {
    horizontal: 'left',
    vertical: 'bottom',
  },
};

export interface MenuItemProps extends MuiMenuItemProps {}

const StyledMenuItem = styled(MuiMenuItem)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>((props, ref) => {
  return (
    <StyledMenuItem {...props} ref={ref}>
      <Typography component="span" variant="body">
        {props.children}
      </Typography>
    </StyledMenuItem>
  );
});

MenuItem.displayName = 'MenuItem';

export default Menu;
