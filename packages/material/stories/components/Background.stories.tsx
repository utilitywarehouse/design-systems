import React from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";
import { BackdropLevel } from "@utilitywarehouse/customer-ui-theme";

import { DarkModeContext, Box, Typography } from "../../src";
import { Background, BackgroundProps } from "./Background";
import HorizontalDisplayContainer from "../utils/HorizontalDisplayContainer";

export default {
  title: `${base}Backgrounds`,
  component: Background,
  argTypes: {
    backgroundColor: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

interface TemplateParams {
  backgroundColor: BackdropLevel;
  title: string;
}

const bindTemplate = (params: TemplateParams) => {
  const Template: Story<BackgroundProps> = (args) => {
    const { darkModeEnabled } = React.useContext(DarkModeContext);
    const borderColor = React.useMemo(() => {
      return darkModeEnabled ? "#ffffff" : "#000000";
    }, [darkModeEnabled]);

    return (
      <HorizontalDisplayContainer>
        <Box padding={3}>
          <Background
            {...args}
            backgroundColor={params.backgroundColor}
            width="100%"
            height="300px"
            border={`4px solid ${borderColor}`}
            borderRadius="16px"
          >
            <Box
              display="flex"
              width="100%"
              height="100%"
              justifyContent="center"
            >
              <Box
                display="flex"
                width="100%"
                justifyContent="center"
                flexDirection="column"
                textAlign="center"
              >
                <Typography variant="h2">{params.title}</Typography>
              </Box>
            </Box>
          </Background>
        </Box>
      </HorizontalDisplayContainer>
    );
  };

  return Template;
};

export const Level0 = bindTemplate({
  backgroundColor: "level0",
  title: "Level 0 background",
});
Level0.storyName = "level0";

export const Level1 = bindTemplate({
  backgroundColor: "level1",
  title: "Level 1 background",
});
Level1.storyName = "level1";

export const Level2 = bindTemplate({
  backgroundColor: "level2",
  title: "Level 2 background",
});
Level2.storyName = "level2";

export const Level3 = bindTemplate({
  backgroundColor: "level3",
  title: "Level 3 background",
});
Level3.storyName = "level3";

export const Level4 = bindTemplate({
  backgroundColor: "level4",
  title: "Level 4 background",
});
Level4.storyName = "level4";
