import React, { PropsWithChildren } from 'react';

import { ScrollView, View, Pressable } from 'react-native';
import {
  Button,
  HStack,
  Text,
  Heading,
  Alert,
  Center,
  Checkbox,
  FormField,
  Input,
  Icon,
  IconButton,
  List,
  ListItem,
  RadioGroup,
  Radio,
  Skeleton,
  VStack,
  Spinner,
  Divider,
  useColorMode,
  Card,
  Switch,
} from '../../src';
import { StyleSheet } from 'react-native-unistyles';
import {
  Actionsheet,
  Box,
  Carousel,
  CarouselItem,
  CarouselItems,
  CarouselPagination,
} from '../../src/lab';
import {
  ElectricityMediumIcon,
  MobileMediumIcon,
  BroadbandMediumIcon,
  InsuranceMediumIcon,
  ChevronRightMediumIcon,
} from '@utilitywarehouse/react-native-icons';

const ComponentWrapper: React.FC<PropsWithChildren<{ name: string; link: string }>> = ({
  name,
  link,
  children,
}) => {
  const navigate = () => {
    if (window.top) {
      window.top.location.href = link;
    }
  };
  return (
    <View style={styles.component}>
      <View style={styles.componentWrap}>{children}</View>
      <Pressable style={styles.textWrap} onPress={navigate}>
        <Text style={styles.text} highlight>
          {name}
        </Text>
      </Pressable>
    </View>
  );
};

const AllComponents: React.FC = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const toggleActionsheet = () => setShowActionsheet(!showActionsheet);
  const [switchEnabled, setSwitchEnabled] = React.useState(false);
  const toggleSwitch = () => setSwitchEnabled(!switchEnabled);
  const colorMode = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <div className="sb-unstyled">
      <ScrollView contentContainerStyle={styles.container}>
        <HStack wrap space="md">
          <ComponentWrapper
            name="Actionsheet (Lab)"
            link="/?path=/docs/components-actionsheet-lab--docs"
          >
            <Center flex={1}>
              <Actionsheet isOpen={showActionsheet} onClose={toggleActionsheet}>
                <Heading>Actionsheet</Heading>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sint facilis autem
                  quia expedita quasi consequuntur dolorum magnam, laboriosam recusandae iure quos
                  itaque cum officia repellat rem quas labore numquam?
                </Text>
              </Actionsheet>
              <Button onPress={toggleActionsheet}>Show Actionsheet</Button>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Alert" link="/?path=/docs/components-alert--docs">
            <Center flex={1}>
              <Alert text="This is an alert" />
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Box" link="/?path=/docs/components-box--docs">
            <Center flex={1}>
              <Box backgroundColor="$grey900" padding="$4" width={200} height={100}>
                <Text color={isDark ? '$grey100' : '$white'} highlight>
                  This is a Box
                </Text>
              </Box>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Button" link="/?path=/docs/components-button--docs">
            <Center flex={1}>
              <Button variant="outline">Press me</Button>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Card" link="/?path=/docs/components-card--docs">
            <Center flex={1}>
              <Card colorScheme="grey" variant="outline">
                <Heading>I am a card</Heading>
                <Text>And do card stuff.</Text>
              </Card>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Carousel (Lab)" link="/?path=/docs/components-carousel-lab--docs">
            <Center flex={1}>
              <Carousel>
                <CarouselItems width={150}>
                  {[
                    {
                      key: 1,
                      title: "I'm a Carousel item",
                    },
                    {
                      key: 2,
                      title: "I'm another Carousel item",
                    },
                    {
                      key: 3,
                      title: "I'm a third Carousel item",
                    },
                  ].map(item => (
                    <CarouselItem key={item.key}>
                      <Box p="$2" aspectRatio={1.6} backgroundColor="$purple500">
                        <Text color="$white">{item.title}</Text>
                      </Box>
                    </CarouselItem>
                  ))}
                </CarouselItems>
                <CarouselPagination style={{ marginTop: 16 }} />
              </Carousel>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Center" link="/?path=/docs/components-center--docs">
            <Center flex={1}>
              <Center backgroundColor="$grey900" padding="$4" width={200} height={100}>
                <Text color={isDark ? '$grey100' : '$white'} highlight>
                  I am in the Center
                </Text>
              </Center>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Checkbox" link="/?path=/docs/components-checkbox--docs">
            <Center flex={1}>
              <Checkbox label="I'm a Checkbox" value="" />
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Divider" link="/?path=/docs/components-divider--docs">
            <Center flex={1}>
              <Text>This text is divided</Text>
              <Divider space="sm" />
              <Text>From this text</Text>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Form Field" link="/?path=/docs/components-form-field--docs">
            <Center flex={1}>
              <FormField
                validationStatus="invalid"
                label="This is a form field"
                validText="Valid form field text"
                invalidText="And an invalid error message"
              >
                <Input onChange={() => console.log('###')} placeholder="" />
              </FormField>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Heading" link="/?path=/docs/components-heading--docs">
            <Center flex={1}>
              <Heading>This is a Heading</Heading>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="HStack" link="/?path=/docs/components-hstack--docs">
            <Center flex={1}>
              <HStack space="md">
                <Box w={40} h={40} bg="$cyan300" />
                <Box w={40} h={40} bg="$cyan400" />
                <Box w={40} h={40} bg="$cyan500" />
                <Box w={40} h={40} bg="$cyan600" />
              </HStack>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Icon Button" link="/?path=/docs/components-iconbutton--docs">
            <Center flex={1}>
              <IconButton icon={ChevronRightMediumIcon} size="large" onPress={() => null} />
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Icons" link="/?path=/docs/components-icons--docs">
            <Center flex={1}>
              <HStack space="lg">
                <Icon as={ElectricityMediumIcon} color="$serviceElectricity" />
                <Icon as={MobileMediumIcon} color="$serviceMobile" />
                <Icon as={BroadbandMediumIcon} color="$serviceLandline" />
                <Icon as={InsuranceMediumIcon} color="$serviceInsurance" />
              </HStack>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Input" link="/?path=/docs/components-input--docs">
            <Center flex={1}>
              <Input placeholder="This is an input" />
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="List" link="/?path=/docs/components-list--docs">
            <Center flex={1}>
              <List>
                <ListItem text="List Item 1" divider onPress={() => console.log('item pressed')} />
                <ListItem text="List Item 2" onPress={() => console.log('item pressed')} />
              </List>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Radio" link="/?path=/docs/components-radio--docs">
            <Center flex={1}>
              <RadioGroup>
                <Radio label="I'm a Radio" value="1" />
                <Radio label="Me too" value="2" />
              </RadioGroup>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Skeleton" link="/?path=/docs/components-skeleton--docs">
            <Center flex={1}>
              <HStack space="sm">
                <Skeleton width={30} height={30} />
                <VStack space="sm">
                  <Skeleton width={120} height={15} />
                  <Skeleton width={100} height={15} />
                </VStack>
              </HStack>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Spinner" link="/?path=/docs/components-spinner--docs">
            <Center flex={1}>
              <Spinner size="lg" />
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Switch" link="/?path=/docs/components-switch--docs">
            <Center flex={1}>
              <Switch value={switchEnabled} onValueChange={toggleSwitch} />
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Text" link="/?path=/docs/components-text--docs">
            <Center flex={1}>
              <Text>This is some Text</Text>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="VStack" link="/?path=/docs/components-vstack--docs">
            <Center flex={1}>
              <VStack space="md">
                <Box w={20} h={20} bg="$cyan300" />
                <Box w={20} h={20} bg="$cyan400" />
                <Box w={20} h={20} bg="$cyan500" />
                <Box w={20} h={20} bg="$cyan600" />
              </VStack>
            </Center>
          </ComponentWrapper>
        </HStack>
      </ScrollView>
    </div>
  );
};

const styles = StyleSheet.create(theme => ({
  container: {
    gap: theme.space['2'],
  },
  component: {
    borderColor: theme.colorMode === 'light' ? theme.colors.grey100 : theme.colors.grey400,
    borderWidth: theme.borderWidths['1'],
    borderRadius: theme.radii['lg'],
    overflow: 'hidden',
    glexGrow: 1,
    height: 200,
    flexBasis: {
      xs: '100%',
      md: 300,
    },
  },
  componentWrap: {
    padding: theme.space['4'],
    flexGrow: 1,
  },
  text: {},
  textWrap: {
    borderTopColor: theme.colorMode === 'light' ? theme.colors.grey100 : theme.colors.grey400,
    borderTopWidth: theme.borderWidths['1'],
    paddingHorizontal: theme.space['4'],
    paddingVertical: theme.space['2'],
    backgroundColor: theme.colors.grey25,
  },
}));

export default AllComponents;
