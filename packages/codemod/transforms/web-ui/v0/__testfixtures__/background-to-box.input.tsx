// this is a comment at the beginning of the file
import * as React from 'react';
import { Background } from '@utilitywarehouse/web-ui';

const Component = () => (
  <div>
    <Background backgroundColor="midnight"></Background>
    <Background backgroundColor="purple"></Background>
    <Background backgroundColor="lightTint"></Background>
    <Background backgroundColor="whiteOwl"></Background>
    <Background backgroundColor="white"></Background>
    <Background backgroundColor="white" padding={4}></Background>
    <Background backgroundColor="white">content</Background>
    <Background backgroundColor="white">
      <span>content</span>
    </Background>
    <Background></Background>
  </div>
);

export default Component;
