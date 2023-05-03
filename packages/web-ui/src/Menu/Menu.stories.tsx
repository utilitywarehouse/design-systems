import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import { Backgrounds } from '../storybook-utils';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

const meta: Meta<typeof Menu> = {
  title: 'Web UI / Components / Menu',
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
      <Backgrounds>
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
      </Backgrounds>
    );
  },
};
