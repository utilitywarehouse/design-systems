import {
  Badge,
  BadgeText,
  Box,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  Text,
} from '@utilitywarehouse/native-ui';
import { TickSmallIcon } from '@utilitywarehouse/react-native-icons';
import React from 'react';

interface RadioProps extends React.ComponentProps<typeof Radio> {}

const CustomRadio: React.FC<RadioProps> = ({ children, ...props }) => (
  <Radio
    sx={{
      borderWidth: 2,
      borderColor: '$grey500',
      borderRadius: '$xl',
      p: '$4',
      ':checked': {
        borderColor: '$green500',
      },
      _dark: {
        borderColor: '$grey700',
        ':checked': {
          borderColor: '$darkGreen700',
        },
      },
    }}
    {...props}
  >
    <Box
      sx={{
        flexDirection: 'row',
        flex: 1,
      }}
    >
      <Box sx={{ pr: '$4', flex: 1 }}>{children}</Box>
      <RadioIndicator
        sx={{
          ':checked': {
            backgroundColor: '$green500',
            borderColor: '$green500',
          },

          _dark: {
            ':checked': {
              backgroundColor: '$darkGreen700',
              borderColor: '$darkGreen700',
            },
          },
        }}
      >
        <RadioIcon
          as={TickSmallIcon}
          sx={{ color: '$brandWhite', _dark: { color: '$darkGrey50' } }}
        />
      </RadioIndicator>
    </Box>
  </Radio>
);

const AdvancedRadioExample: React.FC = () => {
  const [value, setValue] = React.useState('Option 1');

  const handleChange = (val: string) => setValue(val);

  return (
    <RadioGroup onChange={handleChange} value={value}>
      <Box>
        <Badge
          colorScheme={value === 'Option 1' ? 'green' : 'grey'}
          strong
          borderless
          sx={{ mr: '$2', alignSelf: 'flex-end' }}
        >
          <BadgeText>Recommended</BadgeText>
        </Badge>
        <CustomRadio value="Option 1">
          <Text sx={{ fontWeight: '$semibold' }}>Instant bank transfer</Text>
          <Text>- Receive your money instantly</Text>
          <Text>- No fees</Text>
          <Text>- Available 24/7</Text>
        </CustomRadio>
      </Box>
      <CustomRadio value="Option 2">
        <Text sx={{ fontWeight: '$semibold' }}>Debit card payment</Text>
        <Text>- 5 free top-ups</Text>
        <Text>- £0.35 per additional top-up</Text>
      </CustomRadio>
    </RadioGroup>
  );
};

export default AdvancedRadioExample;
