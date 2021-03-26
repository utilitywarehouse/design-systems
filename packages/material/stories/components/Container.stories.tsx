import React from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";

import { Background, Box, Typography } from "../../src";
import { Container } from "./Container";

export default {
  title: `${base}Container`,
  component: Container,
} as Meta;

const bindTemplate = () => {
  const Template: Story = () => {
    return (
      <Background backgroundColor="level4" paddingTop={2} paddingBottom={2}>
        <Container>
          <Background
            backgroundColor="level1"
            width="100%"
            height="200px"
            textAlign="center"
          >
            <Box
              flexDirection="column"
              display="flex"
              height="100%"
              justifyContent="center"
            >
              <Typography>Responsive content container</Typography>
            </Box>
          </Background>
        </Container>
      </Background>
    );
  };

  return Template;
};

export const ContainerStory = bindTemplate();
ContainerStory.storyName = "Container";
