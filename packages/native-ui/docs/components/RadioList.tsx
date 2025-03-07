import React from 'react';
import { List, ListItem, Radio, RadioGroup, Image, useColorMode, Card, Box } from '../../src';

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const RadioList = () => {
  const [value, setValue] = React.useState<string>();
  const colorMode = useColorMode();

  const handlePress = (item: string) => {
    setValue(item);
  };

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <Box p="$4" backgroundColor={colorMode === 'light' ? '#F2F2F2' : '$grey25'}>
      <RadioGroup
        aria-label="Radio Group"
        nativeID="Radio-group"
        onChange={handleChange}
        value={value}
      >
        <List container="card">
          <Card variant="filled" padding="none">
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
              trailingContent={<Radio value="option1" aria-label="Label 1" />}
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
              trailingContent={<Radio value="option2" aria-label="Label 2" />}
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
              trailingContent={<Radio value="option3" aria-label="Label 3" />}
              onPress={() => handlePress('option3')}
            />
          </Card>
        </List>
      </RadioGroup>
    </Box>
  );
};

export default RadioList;
