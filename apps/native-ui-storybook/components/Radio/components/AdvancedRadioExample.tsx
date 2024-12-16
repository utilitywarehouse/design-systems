import {
  Badge,
  StyleSheet,
  Heading,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  Text,
  type RadioProps as NativeUIRadioProps,
} from '@utilitywarehouse/native-ui';
import { Box } from '@utilitywarehouse/native-ui/lab';
import { TickSmallIcon } from '@utilitywarehouse/react-native-icons';
import React from 'react';

interface RadioProps {
  currentValue: string;
}

const styles = StyleSheet.create(theme => ({
  radio: {
    borderWidth: theme.borderWidths[2],
    borderColor: theme.colorMode === 'light' ? theme.colors.grey500 : theme.colors.grey700,
    borderRadius: theme.radii.xl,
    padding: theme.space[4],
    variants: {
      checked: {
        true: {
          borderColor: theme.colorMode === 'light' ? theme.colors.green500 : theme.colors.green700,
        },
      },
    },
  },
  indicator: {
    variants: {
      checked: {
        true: {
          backgroundColor:
            theme.colorMode === 'light' ? theme.colors.green500 : theme.colors.green700,
          borderColor: theme.colorMode === 'light' ? theme.colors.green500 : theme.colors.green700,
        },
      },
    },
  },
  icon: {
    color: theme.colorMode === 'light' ? theme.colors.brandWhite : theme.colors.grey50,
  },
  heading: {
    marginBottom: theme.space[2],
  },
  badge: {
    marginRight: theme.space[2],
    alignSelf: 'flex-end',
  },
}));

const CustomRadio: React.FC<RadioProps & Omit<NativeUIRadioProps, 'label'>> = ({
  children,
  currentValue,
  ...props
}) => {
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
