import React from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";

import Dropdown from "@utilitywarehouse/customer-ui-react-icons/24x24/Dropdown";
import Login from "@utilitywarehouse/customer-ui-react-icons/24x24/Login";
import Logout from "@utilitywarehouse/customer-ui-react-icons/24x24/Logout";
import Settings from "@utilitywarehouse/customer-ui-react-icons/24x24/Settings";
import UserOutlined from "@utilitywarehouse/customer-ui-react-icons/24x24/UserOutlined";

import { Icon, IconProps } from "./Icon";
import {
  Background,
  BackgroundProps,
  Box,
  BoxProps,
  Typography,
} from "../../src";
import HorizontalDisplayContainer from "../utils/HorizontalDisplayContainer";

const icons = {
  "24x24": [Dropdown, Login, Logout, Settings, UserOutlined],
};

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
  },
} as Meta;

const bindTemplate = (
  icons: React.ComponentType<React.SVGProps<SVGSVGElement>>[]
) => {
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

  const getIcons = (args) => (
    <Box display="flex" flexWrap="wrap" width="100%">
      {icons.map((icon) => (
        <Box key={icon.name} padding={1} flex="1" textAlign="center">
          <Typography>
            <Icon {...args} icon={icon} />
          </Typography>
          <Box paddingTop={0.5}>
            <Typography>{icon.name}</Typography>
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

export const RegularSize = bindTemplate(icons["24x24"]);
RegularSize.storyName = "24x24";
