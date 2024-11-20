import React, { useState } from 'react';
import { Card, List, ListItem, ListItemIcon, Switch } from '@utilitywarehouse/native-ui';
import {
  BellMediumIcon,
  LockMediumIcon,
  LocationMediumIcon,
  EyeMediumIcon,
} from '@utilitywarehouse/react-native-icons';

const SwitchList = () => {
  const [notifications, setNotifications] = useState(false);
  const [secureId, setSecureId] = useState(false);
  const [location, setLocation] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <List>
      <Card padding="none">
        <ListItem
          text="Notifications"
          supportingText="Allow notifications"
          divider
          leadingContent={<ListItemIcon as={BellMediumIcon} />}
          trailingContent={<Switch value={notifications} onValueChange={setNotifications} />}
          onPress={() => setNotifications(!notifications)}
        />
        <ListItem
          text="Secure ID"
          supportingText="Use secure ID"
          divider
          leadingContent={<ListItemIcon as={LockMediumIcon} />}
          trailingContent={<Switch value={secureId} onValueChange={setSecureId} />}
          onPress={() => setSecureId(!secureId)}
        />
        <ListItem
          text="Location"
          supportingText="Allow location"
          divider
          leadingContent={<ListItemIcon as={LocationMediumIcon} />}
          trailingContent={<Switch value={location} onValueChange={setLocation} />}
          onPress={() => setLocation(!location)}
        />
        <ListItem
          text="Dark mode"
          supportingText="Enable dark mode"
          divider
          leadingContent={<ListItemIcon as={EyeMediumIcon} />}
          trailingContent={<Switch value={darkMode} onValueChange={setDarkMode} />}
          onPress={() => setDarkMode(!darkMode)}
        />
      </Card>
    </List>
  );
};

export default SwitchList;
