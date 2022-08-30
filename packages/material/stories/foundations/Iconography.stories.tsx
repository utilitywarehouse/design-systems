import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  Box,
  Stack,
  Typography,
  Background,
  InteractiveCard,
  Tooltip,
} from "../../src";
import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { icons } from "../utils";

export default {
  title: "Foundations/Iconography",
  components: [...icons["24x24"], ...icons["48x48"]],
  args: {},
} as Meta;

interface IconsProps {
  iconSet: string;
}

const Icons: React.FC<IconsProps> = (props) => {
  const { iconSet } = props;
  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);
  const [copied, setCopied] = React.useState(false);

  return (
    <Stack spacing={2}>
      <Typography variant="h2">{iconSet}</Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 3,
        }}
      >
        {icons[iconSet].map(
          (icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element) => {
            const IconComponent = icon;
            return (
              <InteractiveCard
                key={icon.name}
                onClick={() => {
                  copyToClipboard(
                    `import ${icon.name.replace(
                      "Icon", // Not all icons have the Icon suffix, so in order to have some consistency, we'll remove it from those that do and add it to all icon names
                      ""
                    )}Icon from "@utilitywarehouse/customer-ui-react-icons/${iconSet}/${
                      icon.name
                    }"`
                  );
                  setCopied(true);
                }}
              >
                <Tooltip
                  placement="top"
                  title={copied ? "Copied!" : "Click to copy import"}
                  TransitionProps={{
                    onExited: () => setCopied(false),
                  }}
                >
                  <Stack spacing={2} alignItems="center">
                    <IconComponent fill={colors.midnight} />
                    <Typography component="span">
                      {icon.name.replace("Icon", "")}
                    </Typography>
                  </Stack>
                </Tooltip>
              </InteractiveCard>
            );
          }
        )}
      </Box>
    </Stack>
  );
};

export const IconsStory: Story = () => (
  <Background backgroundColor="whiteOwl" sx={{ padding: 6 }}>
    <Stack spacing={4}>
      <Icons iconSet="24x24" />
      <Icons iconSet="48x48" />
    </Stack>
  </Background>
);
IconsStory.storyName = "Kitchen Sink";

interface IconsCustomStoryProps {
  icon: string;
  fill: string;
  width?: number | string | undefined;
  height?: number | string | undefined;
}

export const Icons24Story: Story<IconsCustomStoryProps> = (args) => {
  const IconComponent = icons["24x24"].find((icon) => icon.name === args.icon);

  return (
    <Box
      sx={{
        padding: 6,
        display: "grid",
        placeItems: "center",
      }}
    >
      <IconComponent fill={args.fill} width={args.width} height={args.height} />
    </Box>
  );
};
Icons24Story.storyName = "24 x 24";
Icons24Story.argTypes = {
  icon: {
    control: {
      type: "select",
      options: icons["24x24"].map((icon) => icon.name),
    },
  },
  fill: {
    control: {
      type: "select",
      options: colors,
    },
  },
  width: {
    control: {
      type: "text",
    },
  },
  height: {
    control: {
      type: "text",
    },
  },
};
Icons24Story.args = {
  icon: icons["24x24"][0].name,
  fill: colors.midnight,
  width: "24",
  height: "24",
};
Icons24Story.parameters = {
  chromatic: { disableSnapshot: true },
};

export const Icons48Story: Story<IconsCustomStoryProps> = (args) => {
  const IconComponent = icons["48x48"].find((icon) => icon.name === args.icon);

  return (
    <Box
      sx={{
        padding: 6,
        display: "grid",
        placeItems: "center",
      }}
    >
      <IconComponent fill={args.fill} width={args.width} height={args.height} />
    </Box>
  );
};
Icons48Story.storyName = "48 x 48";
Icons48Story.argTypes = {
  icon: {
    control: {
      type: "select",
      options: icons["48x48"].map((icon) => icon.name),
    },
  },
  fill: {
    control: {
      type: "select",
      options: colors,
    },
  },
  width: {
    control: {
      type: "text",
    },
  },
  height: {
    control: {
      type: "text",
    },
  },
};
Icons48Story.args = {
  icon: icons["48x48"][0].name,
  fill: colors.midnight,
  width: "48",
  height: "48",
};
Icons48Story.parameters = {
  chromatic: { disableSnapshot: true },
};
