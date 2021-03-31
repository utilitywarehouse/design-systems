import React from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";

import { Menu, MenuProps, MenuItem } from "./Menu";
import {
  Background,
  BackgroundProps,
  Box,
  BoxProps,
  Typography,
  Link,
} from "../../src";
import HorizontalDisplayContainer from "../utils/HorizontalDisplayContainer";

export default {
  title: `${base}Menu`,
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

  const getMenu = (args) => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLAnchorElement>();
    const typographyVariant = args.typographyVariant;
    const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      setAnchorEl(e.currentTarget);
      toggleMenu();
    };

    const toggleMenu = React.useCallback(() => {
      setMenuOpen(!menuOpen);
    }, [menuOpen, setMenuOpen]);

    return (
      <Typography variant={typographyVariant}>
        <Link href="#" onClick={onClick}>
          Open menu
        </Link>
        <Menu
          {...args}
          open={menuOpen}
          onClose={toggleMenu}
          anchorEl={anchorEl}
        >
          <MenuItem backgroundColor="level3">Menu item 1</MenuItem>
          <MenuItem>Menu item 2</MenuItem>
          <MenuItem>Menu item 3</MenuItem>
        </Menu>
      </Typography>
    );
  };

  const Template: Story<MenuProps> = (args) => {
    return (
      <HorizontalDisplayContainer>
        <Background backgroundColor="level0" {...backgroundProps}>
          <Box {...boxProps}>{getMenu(args)}</Box>
        </Background>
        <Background backgroundColor="level1" {...backgroundProps}>
          <Box {...boxProps}>{getMenu(args)}</Box>
        </Background>
        <Background backgroundColor="level2" {...backgroundProps}>
          <Box {...boxProps}>{getMenu(args)}</Box>
        </Background>
        <Background backgroundColor="level3" {...backgroundProps}>
          <Box {...boxProps}>{getMenu(args)}</Box>
        </Background>
        <Background backgroundColor="level4" {...backgroundProps}>
          <Box {...boxProps}>{getMenu(args)}</Box>
        </Background>
      </HorizontalDisplayContainer>
    );
  };

  return Template;
};

export const MenuExamples = bindTemplate();
MenuExamples.storyName = "Menu";
