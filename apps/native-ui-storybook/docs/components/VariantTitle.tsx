import React, { Box, Text } from '@utilitywarehouse/native-ui';
import { FC, PropsWithChildren } from 'react';

const VariantTitle: FC<
  PropsWithChildren<{
    title: string;
    upperCase?: boolean;
  }>
> = ({ title, upperCase = true, children }) => (
  <Box gap="$2">
    <Text textTransform={upperCase ? 'uppercase' : 'none'} size="xs" highlight color="$grey600">
      {title}
    </Text>
    {children}
  </Box>
);

export default VariantTitle;
