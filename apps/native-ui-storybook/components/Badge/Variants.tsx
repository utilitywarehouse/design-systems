import React from 'react';
import { Badge, BadgeText, Box } from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';

const BadgeBasic: StoryFn = () => {
  return (
    <Box gap={8}>
      <Badge colorScheme="cyan">
        <BadgeText>Cyan</BadgeText>
      </Badge>
      <Badge colorScheme="gold">
        <BadgeText>Gold</BadgeText>
      </Badge>
      <Badge colorScheme="green">
        <BadgeText>Green</BadgeText>
      </Badge>
      <Badge colorScheme="grey">
        <BadgeText>Grey</BadgeText>
      </Badge>
      <Badge colorScheme="red">
        <BadgeText>Red</BadgeText>
      </Badge>
      <Badge colorScheme="cyan" strong>
        <BadgeText>Cyan Strong</BadgeText>
      </Badge>
      <Badge colorScheme="gold" strong>
        <BadgeText>Gold Strong</BadgeText>
      </Badge>
      <Badge colorScheme="green" strong>
        <BadgeText>Green Strong</BadgeText>
      </Badge>
      <Badge colorScheme="grey" strong>
        <BadgeText>Grey Strong</BadgeText>
      </Badge>
      <Badge colorScheme="red" strong>
        <BadgeText>Red Strong</BadgeText>
      </Badge>
    </Box>
  );
};

export default BadgeBasic;
