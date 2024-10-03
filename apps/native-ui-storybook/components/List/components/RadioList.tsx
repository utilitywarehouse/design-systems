import React from 'react';
import {
  List,
  ListItem,
  Radio,
  RadioGroup,
  RadioIndicator,
  Image,
  useColorMode,
} from '@utilitywarehouse/native-ui';
import { Box } from '@utilitywarehouse/native-ui/lab';

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const RadioList = () => {
  const [value, setValue] = React.useState<string>();
  const colorMode = useColorMode();

  const handlePress = (item: string) => {
    setValue(item);
  };

  return (
    <Box p="$4" backgroundColor={colorMode === 'light' ? '#F2F2F2' : '$grey25'}>
      <RadioGroup aria-label="Radio Group" nativeID="Radio-group" value={value}>
        <List container="card">
          <Box
            borderRadius="$xl"
            backgroundColor={colorMode === 'light' ? '$white' : '$grey175'}
            overflow="hidden"
          >
            <ListItem
              text="**** 5016"
              supportingText="Expires 12/24"
              divider
              leadingContent={
                <Image
                  source={{ uri: `/images/paymentMethods/visa/card${capitalize(colorMode)}.svg` }}
                  width={56}
                  height={42}
                />
              }
              trailingContent={
                <Radio value="option1" aria-label="Label 1">
                  <RadioIndicator />
                </Radio>
              }
              onPress={() => handlePress('option1')}
            />
            <ListItem
              text="**** 3786"
              supportingText="Expires 04/27"
              leadingContent={
                <Image
                  source={{
                    uri: `/images/paymentMethods/mastercard/card${capitalize(colorMode)}.svg`,
                  }}
                  width={56}
                  height={42}
                />
              }
              divider
              trailingContent={
                <Radio value="option2" aria-label="Label 2">
                  <RadioIndicator />
                </Radio>
              }
              onPress={() => handlePress('option2')}
            />
            <ListItem
              text="**** 1234"
              supportingText="Expires 06/25"
              leadingContent={
                <Image
                  source={{
                    uri: `/images/paymentMethods/mastercard/card${capitalize(colorMode)}.svg`,
                  }}
                  width={56}
                  height={42}
                />
              }
              trailingContent={
                <Radio value="option3" aria-label="Label 3">
                  <RadioIndicator />
                </Radio>
              }
              onPress={() => handlePress('option3')}
            />
          </Box>
        </List>
      </RadioGroup>
    </Box>
  );
};

export default RadioList;
