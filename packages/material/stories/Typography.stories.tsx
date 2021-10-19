import React from "react";
import { Meta, Story } from "@storybook/react";
import { Background, Typography, BackgroundProps, Box, BoxProps } from "../src";
import type { TypographyProps } from "../src";

export default {
  title: "Typography",
  component: Typography,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    variant: {
      control: {
        disable: true,
      },
    },
    component: {
      control: {
        disable: true,
      },
    },
  },
  args: {
    children: "The quick brown fox jumped over the lazy dog.",
  },
} as Meta;

const bindTemplate = (
  params: Partial<TypographyProps>
): Story<TypographyProps> => {
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

  const Template: Story<TypographyProps> = (args) => (
    <Box>
      <Background backgroundColor="level0" {...backgroundProps}>
        <Box {...boxProps}>
          <Typography {...args} {...params} />
        </Box>
      </Background>
      <Background backgroundColor="level1" {...backgroundProps}>
        <Box {...boxProps}>
          <Typography {...args} {...params} />
        </Box>
      </Background>
      <Background backgroundColor="level2" {...backgroundProps}>
        <Box {...boxProps}>
          <Typography {...args} {...params} />
        </Box>
      </Background>
      <Background backgroundColor="level3" {...backgroundProps}>
        <Box {...boxProps}>
          <Typography {...args} {...params} />
        </Box>
      </Background>
      <Background backgroundColor="level4" {...backgroundProps}>
        <Box {...boxProps}>
          <Typography {...args} {...params} />
        </Box>
      </Background>
      <Background backgroundColor="level5" {...backgroundProps}>
        <Box {...boxProps}>
          <Typography {...args} {...params} />
        </Box>
      </Background>
    </Box>
  );

  return Template;
};

export const DisplayHeading = bindTemplate({ variant: "displayHeading" });
DisplayHeading.storyName = "display heading";

export const H1 = bindTemplate({ variant: "h1" });
H1.storyName = "h1";

export const H2 = bindTemplate({ variant: "h2" });
H2.storyName = "h2";

export const H3 = bindTemplate({ variant: "h3" });
H3.storyName = "h3";

export const H4 = bindTemplate({ variant: "h4" });
H4.storyName = "h4";

export const Subtitle = bindTemplate({ variant: "subtitle" });
Subtitle.storyName = "subtitle";

export const Body = bindTemplate({ variant: "body" });
Body.storyName = "body";

export const LegalNote = bindTemplate({ variant: "legalNote" });
LegalNote.storyName = "legalNote";

export const Caption = bindTemplate({ variant: "caption" });
Caption.storyName = "caption";
