import React from 'react';
import { List, ListItem, ListItemIcon, Checkbox, CheckboxGroup } from '../../src';
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

  const handleChange = (values: Array<string>) => {
    setValues(values);
  };
  return (
    <CheckboxGroup
      aria-label="Checkbox Group"
      nativeID="checkbox-group"
      onChange={handleChange}
      value={values}
    >
      <List>
        <ListItem
          text="Joe Blogs"
          supportingText="12 Somewhere Street"
          leadingContent={<ListItemIcon as={UserMediumIcon} />}
          trailingContent={<Checkbox value="option1" aria-label="Label 1" />}
          onPress={() => handlePress('option1')}
        />
        <ListItem
          text="Mary Poppins"
          supportingText="45 Somewhere Street"
          leadingContent={<ListItemIcon as={UserMediumIcon} />}
          trailingContent={<Checkbox value="option2" aria-label="Label 2" />}
          onPress={() => handlePress('option2')}
        />
        <ListItem
          text="Charlie Brown"
          supportingText="78 Somewhere Street"
          leadingContent={<ListItemIcon as={UserMediumIcon} />}
          trailingContent={<Checkbox value="option3" aria-label="Label 3" />}
          onPress={() => handlePress('option3')}
        />
        <ListItem
          text="Jane Doe"
          supportingText="90 Somewhere Street"
          leadingContent={<ListItemIcon as={UserMediumIcon} />}
          trailingContent={<Checkbox value="option4" aria-label="Label 4" />}
          onPress={() => handlePress('option4')}
        />
      </List>
    </CheckboxGroup>
  );
};

export default CheckboxList;
