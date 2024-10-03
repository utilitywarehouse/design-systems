import type { Meta, StoryFn } from '@storybook/react';
import {
  Button,
  ButtonText,
  HStack,
  Heading,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
  View,
} from '@utilitywarehouse/native-ui';
import { Box } from '@utilitywarehouse/native-ui/lab';
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetScrollView,
} from '@utilitywarehouse/native-ui/lab';
import { Actionsheet as TestActionsheet } from '@utilitywarehouse/native-ui';
import React from 'react';

const ActionsheetText: StoryFn = () => {
  const [visible, setVisible] = React.useState(false);
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <Box h="$96" alignItems="center" justifyContent="center">
      <Button onPress={() => setVisible(true)}>Open Action Sheet</Button>
      <TestActionsheet visible={visible} onClose={handleClose}>
        <ScrollView
          style={{ flex: 1, padding: 20 }}
          contentContainerStyle={{ justifyContent: 'space-between', flex: 1 }}
        >
          <View style={{ flex: 1 }}>
            <Text>Hello, this is the Action Sheet!</Text>
            <Text>Hello, this is the Action Sheet!</Text>
            <Text>Hello, this is the Action Sheet!</Text>
          </View>
          <Button onPress={handleClose}>Close</Button>
        </ScrollView>
      </TestActionsheet>
    </Box>
  );
};

const ActionsheetBasic: StoryFn = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  return (
    <Box h="$96" alignItems="center" justifyContent="center">
      <Button onPress={handleClose}>
        <ButtonText>Open</ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} zIndex={999}>
        <ActionsheetBackdrop />
        <ActionsheetContent h="$56" zIndex={999}>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Share</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Play</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Favourite</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Cancel</ActionsheetItemText>
          </ActionsheetItem>
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

const KeyboardAvoidWithSnap: StoryFn = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  return (
    <Box h="$96" alignItems="center" justifyContent="center">
      <Button onPress={handleClose}>
        <ButtonText>Open</ButtonText>
      </Button>

      <Actionsheet isOpen={showActionsheet} onClose={handleClose} snapPoints={[50]}>
        <KeyboardAvoidingView
          behavior="position"
          style={{
            position: 'relative',
            flex: 1,
            justifyContent: 'flex-end',
          }}
        >
          <ActionsheetBackdrop />
          <ActionsheetContent maxHeight="75%">
            <ActionsheetDragIndicatorWrapper>
              <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>
            <VStack w="$full" p={20}>
              <HStack justifyContent="center" alignItems="center" space="md">
                <Box
                  w={50}
                  h="100%"
                  px="$2"
                  borderWidth={1}
                  borderStyle="solid"
                  borderColor="$grey400"
                  rounded="$sm"
                >
                  <Image
                    source={{ uri: 'https://i.imgur.com/UwTLr26.png' }}
                    flex={1}
                    resizeMode="contain"
                  />
                </Box>
                <VStack flex={1}>
                  <Text bold>Mastercard</Text>
                  <Text>Card ending in 2345</Text>
                </VStack>
              </HStack>
            </VStack>
          </ActionsheetContent>
        </KeyboardAvoidingView>
      </Actionsheet>
    </Box>
  );
};

const WithScrollView: StoryFn = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  return (
    <Box h="$96" alignItems="center" justifyContent="center">
      <Button onPress={handleClose}>
        <ButtonText>Open</ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <KeyboardAvoidingView
          behavior="position"
          style={{
            position: 'relative',
            flex: 1,
            justifyContent: 'flex-end',
          }}
        >
          <ActionsheetBackdrop />
          <ActionsheetContent maxHeight="75%">
            <ActionsheetDragIndicatorWrapper>
              <ActionsheetDragIndicator />
            </ActionsheetDragIndicatorWrapper>
            <ActionsheetScrollView>
              <Box mb="$4">
                <Heading textAlign="center">Out of range reading</Heading>
              </Box>
              <Box mb="$6">
                <Text>
                  The number that was entered was too high or too low for what we&apos;d expect
                  based on past readings and your typical energy usage. This normally suggests an
                  error when the reading was submitted. In some cases, the reading may still be used
                  after investigation.
                </Text>
              </Box>
              <Button onPress={handleClose}>
                <ButtonText>Close</ButtonText>
              </Button>
            </ActionsheetScrollView>
          </ActionsheetContent>
        </KeyboardAvoidingView>
      </Actionsheet>
    </Box>
  );
};

export default ActionsheetMeta;

export { ActionsheetBasic as Basic, KeyboardAvoidWithSnap, WithScrollView, ActionsheetText };
