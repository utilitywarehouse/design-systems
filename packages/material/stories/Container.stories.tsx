import React from "react";
import { Story, Meta } from "@storybook/react";

import { Background, Container, Typography } from "../src";

export default {
  title: "Layout/Container",
  component: Container,
} as Meta;

export const ContainerStory: Story = () => {
  return (
    <Container>
      <Background
        backgroundColor="level1"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>
          The container centers your content horizontally.
        </Typography>
      </Background>
    </Container>
  );
};
ContainerStory.storyName = "Container";
