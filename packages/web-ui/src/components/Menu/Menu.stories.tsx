import * as React from 'react';
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

import { Box } from '../Box';
import { Button } from '../Button';

const meta: Meta<typeof Menu> = {
  title: 'Web UI / Stories / Menu',
  component: Menu,
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Workshop: Story = {
  render: () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <Box>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          variant="tertiary"
        >
          Dashboard
        </Button>
        <Menu
          id="basic-menu"
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
    );
  },
};

export const MenuItemStory: Story = {
  name: 'MenuItem',
  render: () => {
    return <MenuItem onClick={() => {}}>Option</MenuItem>;
  },
};
