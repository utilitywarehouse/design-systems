import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Menu, MenuItem, Box, Button } from '../../src';
import { BackgroundStack } from '../utils';

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {
    forwardedRef: { table: { disable: true } },
  },
} as Meta;

export const MenuStory: Story = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BackgroundStack>
      <Box>
        <Button
          id='basic-button'
          aria-controls='basic-menu'
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          variant='tertiary'
        >
          Dashboard
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
    </BackgroundStack>
  );
};
MenuStory.storyName = 'Menu';
