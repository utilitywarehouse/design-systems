import type { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonText, Heading, StyleSheet, Text, View } from '@utilitywarehouse/native-ui';
import { Box } from '@utilitywarehouse/native-ui/lab';
import { Actionsheet, ActionsheetContent } from '@utilitywarehouse/native-ui/lab';
import { TextInput } from 'react-native';

import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const ActionsheetBasic: StoryFn = props => {
  const [isOpen, setVisible] = React.useState(false);
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <Box alignItems="center" justifyContent="center">
      <Button onPress={() => setVisible(true)}>Open</Button>
      <Actionsheet isOpen={isOpen} onClose={handleClose} {...props} includeContent={false}>
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

ActionsheetBasic.argTypes = {
  showBackdrop: {
    control: 'boolean',
    description: 'If true, the Actionsheet will show a backdrop.',
  },
  showIndicator: {
    control: 'boolean',
    description: 'If true, the Actionsheet will show a drag indicator.',
  },
  closeOnBackdropPress: {
    control: 'boolean',
    description: 'If true, the Actionsheet will close when the backdrop is pressed.',
  },
  dragCloseThreshold: {
    control: 'number',
    description: 'The threshold for dragging the Actionsheet to close.',
  },
  dragOnIndicatorOnly: {
    control: 'boolean',
    description: 'If true, the Actionsheet will only be draggable from the drag indicator.',
  },
  maxHeight: {
    control: 'number',
    description: 'The maximum height of the Actionsheet.',
  },
  minHeight: {
    control: 'number',
    description: 'The minimum height of the Actionsheet.',
  },
  keyboardAvoiding: {
    control: 'boolean',
    description: 'If true, the Actionsheet will avoid the keyboard.',
  },
  contentSafeArea: {
    control: 'boolean',
    description: 'If true, the Actionsheet will wrap the content in a `SafeAreaView`',
  },
};

ActionsheetBasic.args = {
  showBackdrop: true,
  showIndicator: true,
  closeOnBackdropPress: true,
  dragCloseThreshold: 80,
  dragOnIndicatorOnly: false,
  maxHeight: 400,
  minHeight: 0,
  keyboardAvoiding: true,
  contentSafeArea: true,
};

ActionsheetBasic.storyName = 'Basic';

const ActionsheetMeta: Meta<typeof ActionsheetBasic> = {
  title: 'Native UI / Components / Lab / Actionsheet',
  component: ActionsheetBasic,
  argTypes: {},
  args: {},
};

const styles = StyleSheet.create(theme => ({
  content: {
    paddingBottom: theme.space['0'],
  },
  scrollView: {
    maxHeight: 300 - 52,
  },
  scrollContainer: {
    paddingBottom: theme.space['4'],
  },
}));
const WithScrollView: StoryFn = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  return (
    <Box alignItems="center" justifyContent="center">
      <Button onPress={handleClose}>
        <ButtonText>Open</ButtonText>
      </Button>
      <Actionsheet
        isOpen={showActionsheet}
        onClose={handleClose}
        maxHeight={300}
        includeContent={false}
        contentSafeArea={false}
      >
        <ActionsheetContent style={styles.content}>
          <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContainer}>
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
                If you&apos;re sure the reading is correct, please submit it again. If you&apos;re
                unsure, please contact us.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
                ultricies tincidunt. Nullam nec purus nec nunc ultricies tincidunt.
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

export { ActionsheetBasic as Playground, WithScrollView };
