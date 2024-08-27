import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
} from '@utilitywarehouse/native-ui';
import { UserMediumIcon } from '@utilitywarehouse/react-native-icons';

const CheckboxList = () => {
  const [values, setValues] = React.useState<Array<string>>([]);

  const handlePress = (item: string) => {
    if (values.includes(item)) {
      setValues(values.filter(value => value !== item));
    } else {
      setValues([...values, item]);
    }
  };
  return (
    <CheckboxGroup aria-label="Checkbox Group" nativeID="checkbox-group" value={values}>
      <List>
        <ListItem
          text="Joe Blogs"
          supportingText="12 Somewhere Street"
          leadingContent={<ListItemIcon as={UserMediumIcon} />}
          trailingContent={
            <Checkbox value="option1" aria-label="Label 1">
              <CheckboxIndicator />
            </Checkbox>
          }
          onPress={() => handlePress('option1')}
        />
        <ListItem
          text="Mary Poppins"
          supportingText="45 Somewhere Street"
          leadingContent={<ListItemIcon as={UserMediumIcon} />}
          trailingContent={
            <Checkbox value="option2" aria-label="Label 2">
              <CheckboxIndicator />
            </Checkbox>
          }
          onPress={() => handlePress('option2')}
        />
        <ListItem
          text="Charlie Brown"
          supportingText="78 Somewhere Street"
          leadingContent={<ListItemIcon as={UserMediumIcon} />}
          trailingContent={
            <Checkbox value="option3" aria-label="Label 3">
              <CheckboxIndicator />
            </Checkbox>
          }
          onPress={() => handlePress('option3')}
        />
        <ListItem
          text="Jane Doe"
          supportingText="90 Somewhere Street"
          leadingContent={<ListItemIcon as={UserMediumIcon} />}
          trailingContent={
            <Checkbox value="option4" aria-label="Label 4">
              <CheckboxIndicator />
            </Checkbox>
          }
          onPress={() => handlePress('option4')}
        />
      </List>
    </CheckboxGroup>
  );
};

export default CheckboxList;
