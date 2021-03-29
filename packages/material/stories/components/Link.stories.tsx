import React from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";

import { Link, LinkProps } from "./Link";
import { TypographyProps } from "./Typography";
import {
  Background,
  BackgroundProps,
  Box,
  BoxProps,
  Typography,
} from "../../src";
import HorizontalDisplayContainer from "../utils/HorizontalDisplayContainer";

const typographyVariants: { [key in TypographyProps["variant"]]: boolean } = {
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  h5: true,
  headline: true,
  subheading: true,
  default: true,
  caption: true,
  label: true,
  small: true,
  inherit: false,
  footnote: true,
};

const linkTypographyVariants = Object.keys(typographyVariants).filter(
  (variant) => typographyVariants[variant]
);

export default {
  title: `${base}Links`,
  component: Link,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    typographyVariant: {
      control: {
        type: "select",
        options: linkTypographyVariants,
      },
    },
  },
  args: {
    children: "Link",
    typographyVariant: "default",
  },
} as Meta;

interface TemplateParams {
  inline: boolean;
}

const bindTemplate = (params: TemplateParams) => {
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

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const getInlineLink = (args) => {
    const typographyVariant = args.typographyVariant;
    const linkArgs = { ...args };
    delete linkArgs.typographyVariant;
    return (
      <Typography variant={typographyVariant}>
        This is an inline link <Link href="#" {...linkArgs} onClick={onClick} />
        .
      </Typography>
    );
  };

  const getBlockLink = (args) => {
    const typographyVariant = args.typographyVariant;
    const linkArgs = { ...args };
    delete linkArgs.typographyVariant;
    return (
      <Typography variant={typographyVariant}>
        <Link href="#" {...linkArgs} onClick={onClick} />
      </Typography>
    );
  };

  const Template: Story<LinkProps> = (args) => {
    const linkFetcher = params.inline ? getInlineLink : getBlockLink;
    return (
      <HorizontalDisplayContainer>
        <Background backgroundColor="level0" {...backgroundProps}>
          <Box {...boxProps}>{linkFetcher(args)}</Box>
        </Background>
        <Background backgroundColor="level1" {...backgroundProps}>
          <Box {...boxProps}>{linkFetcher(args)}</Box>
        </Background>
        <Background backgroundColor="level2" {...backgroundProps}>
          <Box {...boxProps}>{linkFetcher(args)}</Box>
        </Background>
        <Background backgroundColor="level3" {...backgroundProps}>
          <Box {...boxProps}>{linkFetcher(args)}</Box>
        </Background>
        <Background backgroundColor="level4" {...backgroundProps}>
          <Box {...boxProps}>{linkFetcher(args)}</Box>
        </Background>
      </HorizontalDisplayContainer>
    );
  };

  return Template;
};

export const Inline = bindTemplate({ inline: true });
Inline.storyName = "Inline";

export const Block = bindTemplate({ inline: false });
Block.storyName = "Block";
