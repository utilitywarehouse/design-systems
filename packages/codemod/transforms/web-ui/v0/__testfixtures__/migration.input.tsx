// this is a comment at the beginning of the file
import * as React from 'react';
import {
  Background,
  Box,
  Button,
  Card,
  ThemeProvider,
  useDeviceSize,
  styled,
  Typography,
} from '@utilitywarehouse/customer-ui-material';

const StyledElement = () => styled('div')({ display: 'flex', flexDirection: 'column' });

const Component = () => {
  const { isTablet } = useDeviceSize();
  return (
    <ThemeProvider>
      <Box padding={4}>
        <Card>
          {isTablet ? <StyledElement /> : null}
          <Button>Find out more</Button>
        </Card>
        <Background backgroundColor="midnight"></Background>
        <Background backgroundColor="purple"></Background>
        <Background backgroundColor="lightTint"></Background>
        <Background backgroundColor="whiteOwl"></Background>
        <Background backgroundColor="white"></Background>
        <Background backgroundColor="white" padding={4}></Background>
        <Background backgroundColor="white">content</Background>
        <Background backgroundColor="white">
          <Typography gutterBottom>content</Typography>
        </Background>
        <Background></Background>
      </Box>
    </ThemeProvider>
  );
};

export default Component;
