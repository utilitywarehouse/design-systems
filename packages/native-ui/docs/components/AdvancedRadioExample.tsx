import {
  Badge,
  Heading,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  Text,
  Box,
  type RadioProps as NativeUIRadioProps,
} from '../../src';
import { TickSmallIcon } from '@utilitywarehouse/react-native-icons';
import React from 'react';
import { StyleSheet } from 'react-native-unistyles';

interface RadioProps {
  currentValue: string;
}

const styles = StyleSheet.create(({ colorMode, colors, radii, borderWidths, space }) => ({
  radio: {
    borderWidth: borderWidths[2],
    borderColor: colorMode === 'light' ? colors.grey500 : colors.grey700,
    borderRadius: radii.xl,
    padding: space[4],
    variants: {
      checked: {
        true: {
          borderColor: colorMode === 'light' ? colors.green500 : colors.green700,
        },
      },
    },
  },
  indicator: {
    variants: {
      checked: {
        true: {
          backgroundColor: colorMode === 'light' ? colors.green500 : colors.green700,
          borderColor: colorMode === 'light' ? colors.green500 : colors.green700,
        },
      },
    },
  },
  icon: {
    color: colorMode === 'light' ? colors.brandWhite : colors.grey50,
  },
  heading: {
    marginBottom: space[2],
  },
  badge: {
    marginRight: space[2],
    alignSelf: 'flex-end',
  },
}));

const CustomRadio: React.FC<
  RadioProps &
    Omit<
      NativeUIRadioProps,
      'label' | 'helperText' | 'helperIcon' | 'invalidText' | 'validText' | 'showValidationIcon'
    >
> = ({ children, currentValue, ...props }) => {
  styles.useVariants({ checked: currentValue === props.value });
  return (
    <Radio style={styles.radio} {...props}>
      <Box flexDirection="row" flex={1}>
        <Box pr="$4" flex={1}>
          {children}
        </Box>
        <RadioIndicator style={styles.indicator}>
          <RadioIcon as={TickSmallIcon} style={styles.icon} />
        </RadioIndicator>
      </Box>
    </Radio>
  );
};

const BulletListItem = ({ children }: { children: React.ReactNode }) => (
  <Text>
    {'\u2022'} {children}
  </Text>
);

const BulletList = ({ children }: { children: React.ReactNode }) => (
  <Box pl="$2" gap="$2">
    {children}
  </Box>
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
          style={styles.badge}
        >
          Recommended
        </Badge>
        <CustomRadio value="Option 1" currentValue={value}>
          <Heading size="h4" style={styles.heading}>
            Instant bank transfer
          </Heading>
          <BulletList>
            <BulletListItem>Receive your money instantly</BulletListItem>
            <BulletListItem>No fees</BulletListItem>
            <BulletListItem>Available 24/7</BulletListItem>
          </BulletList>
        </CustomRadio>
      </Box>
      <CustomRadio value="Option 2" currentValue={value}>
        <Heading size="h4" style={styles.heading}>
          Debit card payment
        </Heading>
        <BulletList>
          <BulletListItem>£0.35 fee</BulletListItem>
          <BulletListItem>Available 24/7</BulletListItem>
        </BulletList>
      </CustomRadio>
    </RadioGroup>
  );
};

export default AdvancedRadioExample;
