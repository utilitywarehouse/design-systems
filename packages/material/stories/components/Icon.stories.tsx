import React from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";
import * as icons from "@utilitywarehouse/customer-ui-react-icons";

import { Icon, IconProps } from "./Icon";
import {
  Background,
  BackgroundProps,
  Box,
  BoxProps,
  Typography,
} from "../../src";
import HorizontalDisplayContainer from "../utils/HorizontalDisplayContainer";

export default {
  title: `${base}Icons`,
  component: Icon,
  argTypes: {
    icon: {
      control: {
        disable: true,
      },
    },
    color: {
      control: {
        disable: true,
      },
    },
    size: {
      control: {
        type: "select",
        options: ["inherit", 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 60, 72],
      },
    },
  },
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

  const iconKeys = Object.keys(icons);
  const getIcons = (args) => (
    <Box display="flex" flexWrap="wrap" width="100%">
      {iconKeys.map((icon, index) => (
        <Box key={index} padding={1} flex="1" textAlign="center">
          <Typography>
            <Icon key={index} {...args} icon={icons[icon]} />
          </Typography>
          <Box paddingTop={0.5}>
            <Typography>{icons[icon].name}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );

  const Template: Story<IconProps> = (args) => (
    <HorizontalDisplayContainer>
      <Background backgroundColor="level0" {...backgroundProps}>
        <Box {...boxProps}>{getIcons(args)}</Box>
      </Background>
      <Background backgroundColor="level1" {...backgroundProps}>
        <Box {...boxProps}>{getIcons(args)}</Box>
      </Background>
      <Background backgroundColor="level2" {...backgroundProps}>
        <Box {...boxProps}>{getIcons(args)}</Box>
      </Background>
      <Background backgroundColor="level3" {...backgroundProps}>
        <Box {...boxProps}>{getIcons(args)}</Box>
      </Background>
      <Background backgroundColor="level4" {...backgroundProps}>
        <Box {...boxProps}>{getIcons(args)}</Box>
      </Background>
    </HorizontalDisplayContainer>
  );

  return Template;
};

export const Icons = bindTemplate();
Icons.storyName = "Icons";
