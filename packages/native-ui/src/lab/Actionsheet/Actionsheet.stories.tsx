import React from 'react';
import { Actionsheet, ActionsheetContent } from '.';
import { Meta, StoryObj } from '@storybook/react';
import { Box, Button, Heading, Text, View } from '../../components';
import { ScrollView, TextInput, StyleSheet } from 'react-native';

const meta = {
  title: 'Stories / Actionsheet',
  component: Actionsheet,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
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
  },
  args: {
    children: 'Hello, this is the Actionsheet!',
    isOpen: false,
    showBackdrop: true,
    showIndicator: true,
    closeOnBackdropPress: true,
    dragCloseThreshold: 80,
    dragOnIndicatorOnly: false,
    maxHeight: 400,
    minHeight: 0,
    keyboardAvoiding: true,
    contentSafeArea: true,
  },
} satisfies Meta<typeof Actionsheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: ({ isOpen: open, children, ...args }) => {
    const [isOpen, setVisible] = React.useState(open);
    const handleClose = () => {
      setVisible(false);
    };
    return (
      <Box alignItems="center" justifyContent="center">
        <Button onPress={() => setVisible(true)}>Open</Button>
        <Actionsheet isOpen={isOpen} onClose={handleClose} {...args} includeContent={false}>
          <ActionsheetContent>
            <View style={{ gap: 12 }}>
              <Text>{children}</Text>
              <TextInput style={{ padding: 5, borderColor: 'red', borderWidth: 1, height: 48 }} />
              <Button onPress={handleClose}>Close</Button>
            </View>
          </ActionsheetContent>
        </Actionsheet>
      </Box>
    );
  },
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 0,
  },
  scrollView: {
    maxHeight: 300 - 52,
  },
  scrollContainer: {
    paddingBottom: 16,
  },
});

export const WithScrollView: Story = {
  render: () => {
    const [showActionsheet, setShowActionsheet] = React.useState(false);
    const handleClose = () => setShowActionsheet(!showActionsheet);
    return (
      <Box alignItems="center" justifyContent="center">
        <Button onPress={handleClose}>Open</Button>
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
                  The number that was entered was too high or too low for what we&apos;d expect
                  based on past readings and your typical energy usage. This normally suggests an
                  error when the reading was submitted. In some cases, the reading may still be used
                  after investigation.
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
              <Button onPress={handleClose}>Close</Button>
            </ScrollView>
          </ActionsheetContent>
        </Actionsheet>
      </Box>
    );
  },
};
