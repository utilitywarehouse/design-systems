// this is a comment at the beginning of the file
import * as React from 'react';
import { Typography, Box } from '@utilitywarehouse/web-ui';

const Component = ({ content }) => (
  <Box>
    <Typography>{content}</Typography>
    <Typography variant="subtitle">{content}</Typography>
    <Typography variant="body">{content}</Typography>
    <Typography variant="legalNote">{content}</Typography>
    <Typography variant="caption">{content}</Typography>
    <Typography variant="displayHeading">{content}</Typography>
    <Typography variant="h1">{content}</Typography>
    <Typography variant="h2">{content}</Typography>
    <Typography variant="h3">{content}</Typography>
    <Typography variant="h4">{content}</Typography>
    <Typography gutterBottom>{content}</Typography>
    <Typography paragraph>{content}</Typography>
  </Box>
);

export default Component;
