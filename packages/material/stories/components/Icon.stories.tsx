import React from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";

import Bill from "@utilitywarehouse/customer-ui-react-icons/24x24/Bill";
import Dropdown from "@utilitywarehouse/customer-ui-react-icons/24x24/Dropdown";
import Login from "@utilitywarehouse/customer-ui-react-icons/24x24/Login";
import Logout from "@utilitywarehouse/customer-ui-react-icons/24x24/Logout";
import Settings from "@utilitywarehouse/customer-ui-react-icons/24x24/Settings";
import UserOutlined from "@utilitywarehouse/customer-ui-react-icons/24x24/UserOutlined";
import ServiceBroadband from "@utilitywarehouse/customer-ui-react-icons/24x24/ServiceBroadband";
import ServiceCashbackCard from "@utilitywarehouse/customer-ui-react-icons/24x24/ServiceCashbackCard";
import ServiceEnergy from "@utilitywarehouse/customer-ui-react-icons/24x24/ServiceEnergy";
import ServiceInsurance from "@utilitywarehouse/customer-ui-react-icons/24x24/ServiceInsurance";
import ServiceMobile from "@utilitywarehouse/customer-ui-react-icons/24x24/ServiceMobile";
import ServiceBroadbandLarge from "@utilitywarehouse/customer-ui-react-icons/48x48/ServiceBroadband";
import ServiceCashbackCardLarge from "@utilitywarehouse/customer-ui-react-icons/48x48/ServiceCashbackCard";
import ServiceEnergyLarge from "@utilitywarehouse/customer-ui-react-icons/48x48/ServiceEnergy";
import ServiceInsuranceLarge from "@utilitywarehouse/customer-ui-react-icons/48x48/ServiceInsurance";
import ServiceMobileLarge from "@utilitywarehouse/customer-ui-react-icons/48x48/ServiceMobile";

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
  "24x24": [
    Bill,
    Dropdown,
    Email,
    Login,
    Logout,
    Settings,
    UserOutlined,
    ServiceBroadband,
    ServiceCashbackCard,
    ServiceEnergy,
    ServiceInsurance,
    ServiceMobile,
  ],
  "48x48": [
    ServiceBroadbandLarge,
    ServiceCashbackCardLarge,
    ServiceEnergyLarge,
    ServiceInsuranceLarge,
    ServiceMobileLarge,
  ],
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
    <Box width="100%">
      {icons.map((icon) => (
        <Box
          key={icon.name}
          display="inline-block"
          padding={1}
          paddingBottom={4}
          width="25%"
          textAlign="center"
        >
          <Typography>
            <Icon {...args} icon={icon} />
          </Typography>
          <Box paddingTop={0.5} overflow="hidden" whiteSpace="nowrap">
            <Typography title={icon.name}>
              <Box
                component="span"
                overflow="hidden"
                textOverflow="ellipsis"
                display="block"
              >
                {icon.name}
              </Box>
            </Typography>
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

export const LargeSize = bindTemplate(icons["48x48"]);
LargeSize.storyName = "48x48";
