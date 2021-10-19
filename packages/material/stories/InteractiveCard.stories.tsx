import React from "react";
import { Story, Meta } from "@storybook/react";

import type { InteractiveCardProps } from "../src";
import {
  InteractiveCard,
  BackgroundProps,
  Box,
  BoxProps,
  Typography,
  Background,
} from "../src";

export default {
  title: "InteractiveCard",
  component: InteractiveCard,
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
    margin: "0 auto",
    width: "100%",
    padding: "0 16px",
    maxWidth: "400px",
  };

  const getInteractiveCard = (args: InteractiveCardProps) => {
    const onClick = (e: React.MouseEvent) => {
      e.preventDefault();
    };

    return (
      <InteractiveCard {...args} onClick={onClick}>
        <Typography variant="inherit">An interactive card</Typography>
      </InteractiveCard>
    );
  };

  const Template: Story<InteractiveCardProps> = (args) => {
    return (
      <Box>
        <Background backgroundColor="level0" {...backgroundProps}>
          <Box {...boxProps}>{getInteractiveCard(args)}</Box>
        </Background>
        <Background backgroundColor="level1" {...backgroundProps}>
          <Box {...boxProps}>{getInteractiveCard(args)}</Box>
        </Background>
        <Background backgroundColor="level2" {...backgroundProps}>
          <Box {...boxProps}>{getInteractiveCard(args)}</Box>
        </Background>
        <Background backgroundColor="level3" {...backgroundProps}>
          <Box {...boxProps}>{getInteractiveCard(args)}</Box>
        </Background>
        <Background backgroundColor="level4" {...backgroundProps}>
          <Box {...boxProps}>{getInteractiveCard(args)}</Box>
        </Background>
        <Background backgroundColor="level5" {...backgroundProps}>
          <Box {...boxProps}>{getInteractiveCard(args)}</Box>
        </Background>
      </Box>
    );
  };

  return Template;
};

export const InteractiveCardExamples = bindTemplate();
InteractiveCardExamples.storyName = "InteractiveCard";
