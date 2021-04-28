import React from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";

import { Card, CardProps } from "./Card";
import {
  Background,
  BackgroundProps,
  Box,
  BoxProps,
  Button,
  Typography,
} from "../../src";
import HorizontalDisplayContainer from "../utils/HorizontalDisplayContainer";

export default {
  title: `${base}Card`,
  component: Card,
} as Meta;

const bindTemplate = (props: Partial<CardProps>) => {
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

  const getCard = () => {
    const onClick = (e: React.MouseEvent) => {
      e.preventDefault();
    };

    return (
      <Box maxWidth="400px">
        <Card {...props}>
          <Typography variant="h3" paragraph>
            Card title
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
          <Box paddingTop={2}>
            <Button
              size="large"
              fullWidth
              variant="contained"
              onClick={onClick}
            >
              Click me
            </Button>
          </Box>
        </Card>
      </Box>
    );
  };

  const Template: Story = () => {
    return (
      <HorizontalDisplayContainer>
        <Background backgroundColor="level0" {...backgroundProps}>
          <Box {...boxProps}>{getCard()}</Box>
        </Background>
        <Background backgroundColor="level1" {...backgroundProps}>
          <Box {...boxProps}>{getCard()}</Box>
        </Background>
        <Background backgroundColor="level2" {...backgroundProps}>
          <Box {...boxProps}>{getCard()}</Box>
        </Background>
        <Background backgroundColor="level3" {...backgroundProps}>
          <Box {...boxProps}>{getCard()}</Box>
        </Background>
        <Background backgroundColor="level4" {...backgroundProps}>
          <Box {...boxProps}>{getCard()}</Box>
        </Background>
        <Background backgroundColor="level5" {...backgroundProps}>
          <Box {...boxProps}>{getCard()}</Box>
        </Background>
      </HorizontalDisplayContainer>
    );
  };

  return Template;
};

export const OpaqueCard = bindTemplate({ variant: "opaque" });
OpaqueCard.storyName = "Default (opaque)";

export const TransparentCard = bindTemplate({ variant: "transparent" });
TransparentCard.storyName = "Transparent";
