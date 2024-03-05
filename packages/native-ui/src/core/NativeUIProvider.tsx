import React, { ComponentProps } from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '../config';

const NativeUIProvider: React.FC<Omit<ComponentProps<typeof GluestackUIProvider>, 'config'>> = ({
  children,
  ...props
}) => (
  <GluestackUIProvider config={config} {...props}>
    {children}
  </GluestackUIProvider>
);

export default NativeUIProvider;
