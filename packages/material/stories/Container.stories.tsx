import React from "react";
import { Story, Meta } from "@storybook/react";

import { Container, Box } from "../src";

export default {
  title: "Layout/Container",
  component: Container,
} as Meta;

export const ContainerStory: Story = () => {
  return (
    <Container>
      <Box sx={{ backgroundColor: "secondary.light", height: "100vh" }} />
    </Container>
  );
};
ContainerStory.storyName = "Container";
ContainerStory.parameters = {
  chromatic: { disableSnapshot: true },
};
