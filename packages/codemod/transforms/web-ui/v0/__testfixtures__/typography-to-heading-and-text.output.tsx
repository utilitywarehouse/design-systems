// this is a comment at the beginning of the file
import * as React from 'react';
import { Box, Text, Heading } from '@utilitywarehouse/web-ui';

const Component = ({ content }) => (
  <Box>
    <Text>{content}</Text>
    <Text variant="subtitle">{content}</Text>
    <Text variant="body">{content}</Text>
    <Text variant="legalNote">{content}</Text>
    <Text variant="caption">{content}</Text>
    <Heading variant="displayHeading">{content}</Heading>
    <Heading variant="h1">{content}</Heading>
    <Heading variant="h2">{content}</Heading>
    <Heading variant="h3">{content}</Heading>
    <Heading variant="h4">{content}</Heading>
  </Box>
);

export default Component;
