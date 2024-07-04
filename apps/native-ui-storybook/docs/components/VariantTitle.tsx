import { Box, Text } from '@utilitywarehouse/native-ui';

const VariantTitle = ({ title, children }: any) => (
  <Box gap="$2">
    <Text textTransform="uppercase" size="xs" highlight color="$grey600">
      {title}
    </Text>
    {children}
  </Box>
);

export default VariantTitle;
