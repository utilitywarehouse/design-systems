import type { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonText, Heading, Text, View } from '@utilitywarehouse/native-ui';
import { Box } from '@utilitywarehouse/native-ui/lab';
import { Actionsheet, ActionsheetContent } from '@utilitywarehouse/native-ui/lab';
import { TextInput } from 'react-native';

import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const ActionsheetBasic: StoryFn = () => {
  const [isOpen, setVisible] = React.useState(false);
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <Box h="$96" alignItems="center" justifyContent="center">
      <Button onPress={() => setVisible(true)}>Open</Button>
      <Actionsheet isOpen={isOpen} onClose={handleClose} includeContent={false}>
        <ActionsheetContent>
          <View style={{ gap: 12 }}>
            <Text>Hello, this is the Actionsheet!</Text>
            <TextInput style={{ padding: 5, borderColor: 'red', borderWidth: 1, height: 48 }} />
            <Button onPress={handleClose}>Close</Button>
          </View>
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
};

ActionsheetBasic.storyName = 'Basic';

const ActionsheetMeta: Meta<typeof ActionsheetBasic> = {
  title: 'Native UI / Components / Lab / Actionsheet',
  component: ActionsheetBasic,
  argTypes: {},
  args: {},
};

const WithScrollView: StoryFn = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  return (
    <Box h="$96" alignItems="center" justifyContent="center">
      <Button onPress={handleClose}>
        <ButtonText>Open</ButtonText>
      </Button>
      <Actionsheet
        isOpen={showActionsheet}
        onClose={handleClose}
        minHeight={300}
        dragOnIndicatorOnly
        includeContent={false}
        contentSafeArea={false}
      >
        <ActionsheetContent style={{ paddingBottom: 0 }}>
          <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 16 }}>
            <Box mb="$4">
              <Heading textAlign="center">Out of range reading</Heading>
            </Box>
            <Box mb="$6" gap="$2">
              <Text>
                The number that was entered was too high or too low for what we&apos;d expect based
                on past readings and your typical energy usage. This normally suggests an error when
                the reading was submitted. In some cases, the reading may still be used after
                investigation.
              </Text>
              <Text>
                The number that was entered was too high or too low for what we&apos;d expect based
                on past readings and your typical energy usage. This normally suggests an error when
                the reading was submitted. In some cases, the reading may still be used after
                investigation.
              </Text>
            </Box>
            <Button onPress={handleClose}>
              <ButtonText>Close</ButtonText>
            </Button>
          </ScrollView>
        </ActionsheetContent>
      </Actionsheet>
    </Box>
  );
};

export default ActionsheetMeta;

export { ActionsheetBasic as Basic, WithScrollView };
