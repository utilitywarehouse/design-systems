import { Box, Text } from '@utilitywarehouse/native-ui';

const VariantTitle = ({ title, upperCase = true, children }: any) => (
  <Box gap="$2">
    <Text textTransform={upperCase ? 'uppercase' : 'none'} size="xs" highlight color="$grey600">
      {title}
    </Text>
    {children}
  </Box>
);

export default VariantTitle;
