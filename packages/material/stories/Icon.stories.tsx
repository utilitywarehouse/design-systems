import React from "react";
import { Story, Meta } from "@storybook/react";

import Bill from "@utilitywarehouse/customer-ui-react-icons/24x24/Bill";
import ChevronLeft from "@utilitywarehouse/customer-ui-react-icons/24x24/ChevronLeft";
import ChevronRight from "@utilitywarehouse/customer-ui-react-icons/24x24/ChevronRight";
import Close from "@utilitywarehouse/customer-ui-react-icons/24x24/Close";
import Dropdown from "@utilitywarehouse/customer-ui-react-icons/24x24/Dropdown";
import Email from "@utilitywarehouse/customer-ui-react-icons/24x24/Email";
import Edit from "@utilitywarehouse/customer-ui-react-icons/24x24/Edit";
import Login from "@utilitywarehouse/customer-ui-react-icons/24x24/Login";
import Logout from "@utilitywarehouse/customer-ui-react-icons/24x24/Logout";
import ServiceBroadband from "@utilitywarehouse/customer-ui-react-icons/24x24/ServiceBroadband";
import ServiceCashbackCard from "@utilitywarehouse/customer-ui-react-icons/24x24/ServiceCashbackCard";
import ServiceEnergy from "@utilitywarehouse/customer-ui-react-icons/24x24/ServiceEnergy";
import ServiceInsurance from "@utilitywarehouse/customer-ui-react-icons/24x24/ServiceInsurance";
import ServiceMobile from "@utilitywarehouse/customer-ui-react-icons/24x24/ServiceMobile";
import Settings from "@utilitywarehouse/customer-ui-react-icons/24x24/Settings";
import UserOutlined from "@utilitywarehouse/customer-ui-react-icons/24x24/UserOutlined";

import Avatar from "@utilitywarehouse/customer-ui-react-icons/48x48/Avatar";
import BillGreen from "@utilitywarehouse/customer-ui-react-icons/48x48/BillGreen";
import Information from "@utilitywarehouse/customer-ui-react-icons/48x48/Information";
import ShoppingTrolley from "@utilitywarehouse/customer-ui-react-icons/48x48/ShoppingTrolley";
import Wallet from "@utilitywarehouse/customer-ui-react-icons/48x48/Wallet";
import ServiceBroadbandLarge from "@utilitywarehouse/customer-ui-react-icons/48x48/ServiceBroadband";
import ServiceCashbackCardLarge from "@utilitywarehouse/customer-ui-react-icons/48x48/ServiceCashbackCard";
import ServiceEnergyLarge from "@utilitywarehouse/customer-ui-react-icons/48x48/ServiceEnergy";
import ServiceInsuranceLarge from "@utilitywarehouse/customer-ui-react-icons/48x48/ServiceInsurance";
import ServiceMobileLarge from "@utilitywarehouse/customer-ui-react-icons/48x48/ServiceMobile";

import {
  Background,
  BackgroundProps,
  Box,
  BoxProps,
  Typography,
  Icon,
} from "../src";
import type { IconProps } from "../src";

const icons = {
  "24x24": [
    Bill,
    Close,
    ChevronLeft,
    ChevronRight,
    Dropdown,
    Edit,
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
    Avatar,
    BillGreen,
    Information,
    ShoppingTrolley,
    Wallet,
    ServiceBroadbandLarge,
    ServiceCashbackCardLarge,
    ServiceEnergyLarge,
    ServiceInsuranceLarge,
    ServiceMobileLarge,
  ],
};

export default {
  title: "Foundations/Iconography",
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
    <Box>
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
      <Background backgroundColor="level5" {...backgroundProps}>
        <Box {...boxProps}>{getIcons(args)}</Box>
      </Background>
    </Box>
  );

  return Template;
};

export const RegularSize = bindTemplate(icons["24x24"]);
RegularSize.storyName = "24x24";

export const LargeSize = bindTemplate(icons["48x48"]);
LargeSize.storyName = "48x48";
