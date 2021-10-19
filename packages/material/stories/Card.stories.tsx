import React from "react";
import { Story, Meta } from "@storybook/react";

import type { CardProps } from "../src";
import { Background, Card, Box, Button, Typography } from "../src";
import { backgroundLevels } from "./utils";

export default {
  title: "Card",
  component: Card,
} as Meta;

const bindTemplate = (props: Partial<CardProps>) => {
  const Template: Story = () => {
    return (
      <Box>
        {backgroundLevels.map((level) => (
          <Background
            key={level}
            backgroundColor={level}
            sx={{
              paddingTop: 6,
              paddingBottom: 6,
              paddingLeft: 3,
              paddingRight: 3,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                maxWidth: 400,
              }}
            >
              <Card {...props}>
                <Typography variant="h3" paragraph>
                  Card title
                </Typography>
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Box sx={{ paddingTop: 2 }}>
                  <Button
                    size="large"
                    fullWidth
                    variant="contained"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault();
                    }}
                  >
                    Click me
                  </Button>
                </Box>
              </Card>
            </Box>
          </Background>
        ))}
      </Box>
    );
  };

  return Template;
};

export const OpaqueCard = bindTemplate({ variant: "opaque" });
OpaqueCard.storyName = "Default (opaque)";

export const TransparentCard = bindTemplate({ variant: "transparent" });
TransparentCard.storyName = "Transparent";
