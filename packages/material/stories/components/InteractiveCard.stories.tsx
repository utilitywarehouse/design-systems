import React from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";

import { InteractiveCard, InteractiveCardProps } from "./InteractiveCard";
import {
  Background,
  BackgroundProps,
  Box,
  BoxProps,
  Typography,
} from "../../src";
import HorizontalDisplayContainer from "../utils/HorizontalDisplayContainer";

export default {
  title: `${base}InteractiveCard`,
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

  const getInteractiveCard = (args) => {
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
      <HorizontalDisplayContainer>
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
      </HorizontalDisplayContainer>
    );
  };

  return Template;
};

export const InteractiveCardExamples = bindTemplate();
InteractiveCardExamples.storyName = "InteractiveCard";
