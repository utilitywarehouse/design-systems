import React from "react";
import { Story, Meta } from "@storybook/react";

import type { MenuProps } from "../src";
import {
  Menu,
  MenuItem,
  BackgroundProps,
  Box,
  BoxProps,
  Button,
  Background,
} from "../src";

export default {
  title: "Menu",
  component: Menu,
} as Meta;

const bindTemplate = () => {
  const backgroundProps: Partial<BackgroundProps> = {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 3,
    paddingRight: 3,
    display: "flex",
    flexDirection: "column",
  };

  const boxProps: BoxProps = {
    display: "flex",
    justifyContent: "center",
  };

  const MenuStory = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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
          aria-expanded={open ? "true" : undefined}
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
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem backgroundColor="level3" onClick={handleClose}>
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
    );
  };

  const Template: Story<MenuProps> = () => {
    return (
      <Box>
        <Background backgroundColor="level0" {...backgroundProps}>
          <Box {...boxProps}>
            <MenuStory />
          </Box>
        </Background>
        <Background backgroundColor="level1" {...backgroundProps}>
          <Box {...boxProps}>
            <MenuStory />
          </Box>
        </Background>
        <Background backgroundColor="level2" {...backgroundProps}>
          <Box {...boxProps}>
            <MenuStory />
          </Box>
        </Background>
        <Background backgroundColor="level3" {...backgroundProps}>
          <Box {...boxProps}>
            <MenuStory />
          </Box>
        </Background>
        <Background backgroundColor="level4" {...backgroundProps}>
          <Box {...boxProps}>
            <MenuStory />
          </Box>
        </Background>
        <Background backgroundColor="level5" {...backgroundProps}>
          <Box {...boxProps}>
            <MenuStory />
          </Box>
        </Background>
      </Box>
    );
  };

  return Template;
};

export const MenuExamples = bindTemplate();
MenuExamples.storyName = "Menu";
