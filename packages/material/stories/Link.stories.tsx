import React from "react";
import { Story, Meta } from "@storybook/react";

import type { LinkProps, TypographyProps } from "../src";
import { Background, Link, BackgroundProps, Box, Typography } from "../src";
import type {
  BackdropLevel,
  TypographyVariant,
} from "@utilitywarehouse/customer-ui-theme";

const typographyVariants: { [key in TypographyProps["variant"]]: boolean } = {
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  default: true,
  displayHeading: true,
  subtitle: true,
  body: true,
  legalNote: true,
  caption: true,
  inherit: false,
};

const linkTypographyVariants = Object.keys(typographyVariants).filter(
  (variant) => typographyVariants[variant]
);

const linkVariantsInUse: { [key in LinkProps["variant"]]: boolean } = {
  default: true,
  active: true,
  secondary: true,
};

const linkVariants = Object.keys(linkVariantsInUse).filter(
  (variant) => linkVariantsInUse[variant]
);

export default {
  title: "Link",
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
    variant: {
      control: {
        type: "radio",
        options: linkVariants,
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    children: "link",
    typographyVariant: "default",
    variant: "default",
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

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const Template: Story<
    LinkProps & { typographyVariant: TypographyVariant }
  > = (args) => {
    const { typographyVariant, ...rest } = args;
    return (
      <Box>
        {[0, 1, 2, 3, 4, 5]
          .map((level) => `level${level}` as BackdropLevel)
          .map((level) => (
            <Background
              key={level}
              backgroundColor={level}
              {...backgroundProps}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {params.inline ? (
                  <Typography variant={typographyVariant}>
                    This is an inline{" "}
                    <Link href="#" {...rest} onClick={onClick} />.
                  </Typography>
                ) : (
                  <Typography variant={typographyVariant}>
                    <Link href="#" {...rest} onClick={onClick}>
                      Link
                    </Link>
                  </Typography>
                )}
              </Box>
            </Background>
          ))}
      </Box>
    );
  };

  return Template;
};

export const Inline = bindTemplate({ inline: true });
Inline.storyName = "Inline";

export const Block = bindTemplate({ inline: false });
Block.storyName = "Block";
