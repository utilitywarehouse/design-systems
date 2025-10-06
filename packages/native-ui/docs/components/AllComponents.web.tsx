import React, { PropsWithChildren } from 'react';

import {
  BroadbandMediumIcon,
  ChevronRightMediumIcon,
  ElectricityMediumIcon,
  InsuranceMediumIcon,
  MobileMediumIcon,
} from '@utilitywarehouse/react-native-icons';
import { Pressable, ScrollView, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import {
  Alert,
  Badge,
  Button,
  Card,
  Center,
  Checkbox,
  Divider,
  Flex,
  FormField,
  Grid,
  Heading,
  Icon,
  IconButton,
  Input,
  LI,
  List,
  ListItem,
  OL,
  Radio,
  RadioGroup,
  Skeleton,
  Spinner,
  Switch,
  Text,
  Textarea,
  ToggleButton,
  ToggleButtonGroup,
  UL,
  useColorMode,
} from '../../';
import {
  Accordion,
  AccordionItem,
  Actionsheet,
  Box,
  Carousel,
  CarouselItem,
  CarouselItems,
  CarouselPagination,
} from '../../src/lab';

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
  const [toggleButtonValue, setToggleButtonValue] = React.useState('day');
  const [colorMode] = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <div className="sb-unstyled">
      <ScrollView contentContainerStyle={styles.container}>
        <Flex direction="row" wrap="wrap" space="md">
          <ComponentWrapper
            name="Accordion (Lab)"
            link="/?path=/docs/lab-components-accordion--docs"
          >
            <Center flex={1}>
              <Accordion type="single">
                <AccordionItem title="Accordion Item 1">
                  <Text>Accordion Item 1 Content</Text>
                </AccordionItem>
                <AccordionItem title="Accordion Item 2">
                  <Text>Accordion Item 2 Content</Text>
                </AccordionItem>
              </Accordion>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper
            name="Actionsheet (Lab)"
            link="/?path=/docs/lab-components-actionsheet--docs"
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
          <ComponentWrapper name="Badge" link="/?path=/docs/components-badge--docs">
            <Center flex={1}>
              <View>
                <Badge colorScheme="green">Green Badge</Badge>
              </View>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Box" link="/?path=/docs/primitives-box--docs">
            <Center flex={1}>
              <Box backgroundColor="$grey900" padding="200" width={200} height={100}>
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
          <ComponentWrapper name="Carousel (Lab)" link="/?path=/docs/lab-components-carousel--docs">
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
                      <Box p="100" aspectRatio={1.6} backgroundColor="$purple500">
                        <Text color="$white">{item.title}</Text>
                      </Box>
                    </CarouselItem>
                  ))}
                </CarouselItems>
                <CarouselPagination style={{ marginTop: 16 }} />
              </Carousel>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Center" link="/?path=/docs/primitives-center--docs">
            <Center flex={1}>
              <Center backgroundColor="$grey900" padding="200" width={200} height={100}>
                <Text color={isDark ? '$grey100' : '$white'} highlight>
                  I am in the Center
                </Text>
              </Center>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Checkbox" link="/?path=/docs/forms-checkbox--docs">
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
          <ComponentWrapper name="Form Field" link="/?path=/docs/forms-form-field--docs">
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
          <ComponentWrapper name="Flex" link="/?path=/docs/primitives-flex--docs">
            <Center flex={1}>
              <Flex direction="row" space="md">
                <Box w={40} h={40} bg="$cyan300" />
                <Box w={40} h={40} bg="$cyan400" />
                <Box w={40} h={40} bg="$cyan500" />
                <Box w={40} h={40} bg="$cyan600" />
              </Flex>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Grid" link="/?path=/docs/primitives-grid--docs">
            <Center flex={1}>
              <Box width={100}>
                <Grid columns={2} space="md">
                  <Box w={40} h={40} bg="$cyan300" />
                  <Box w={40} h={40} bg="$cyan400" />
                  <Box w={40} h={40} bg="$cyan500" />
                  <Box w={40} h={40} bg="$cyan600" />
                </Grid>
              </Box>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Heading" link="/?path=/docs/typography-heading--docs">
            <Center flex={1}>
              <Heading>This is a Heading</Heading>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Icon Button" link="/?path=/docs/components-iconbutton--docs">
            <Center flex={1}>
              <IconButton icon={ChevronRightMediumIcon} size="large" onPress={() => null} />
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Icons" link="/?path=/docs/components-icons--docs">
            <Center flex={1}>
              <Flex direction="row" space="lg">
                <Icon as={ElectricityMediumIcon} color="$serviceElectricity" />
                <Icon as={MobileMediumIcon} color="$serviceMobile" />
                <Icon as={BroadbandMediumIcon} color="$serviceLandline" />
                <Icon as={InsuranceMediumIcon} color="$serviceInsurance" />
              </Flex>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Input" link="/?path=/docs/forms-input--docs">
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
          <ComponentWrapper
            name="Ordered List"
            link="/?path=/docs/utility-components-ul-ol-lists--docs"
          >
            <Center flex={1}>
              <OL>
                <LI>
                  <Text>List Item 1</Text>
                </LI>
                <LI>
                  <Text>List Item 2</Text>
                </LI>
              </OL>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Radio" link="/?path=/docs/forms-radio--docs">
            <Center flex={1}>
              <RadioGroup>
                <Radio label="I'm a Radio" value="1" />
                <Radio label="Me too" value="2" />
              </RadioGroup>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Skeleton" link="/?path=/docs/components-skeleton--docs">
            <Center flex={1}>
              <Flex direction="row" space="sm">
                <Skeleton width={30} height={30} />
                <Flex space="sm">
                  <Skeleton width={120} height={15} />
                  <Skeleton width={100} height={15} />
                </Flex>
              </Flex>
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
          <ComponentWrapper name="Text" link="/?path=/docs/typography-text--docs">
            <Center flex={1}>
              <Text>This is some Text</Text>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Textarea" link="/?path=/docs/forms-textarea--docs">
            <Center flex={1}>
              <Textarea numberOfLines={3} placeholder="This is a textarea" />
            </Center>
          </ComponentWrapper>
          <ComponentWrapper name="Toggle Button" link="/?path=/docs/components-toggle-button--docs">
            <Center flex={1}>
              <ToggleButtonGroup value={toggleButtonValue} onChange={setToggleButtonValue}>
                <ToggleButton value="day">Day</ToggleButton>
                <ToggleButton value="week">Week</ToggleButton>
                <ToggleButton value="month">Month</ToggleButton>
              </ToggleButtonGroup>
            </Center>
          </ComponentWrapper>
          <ComponentWrapper
            name="Unorderd List"
            link="/?path=/docs/utility-components-ul-ol-lists--docs"
          >
            <Center flex={1}>
              <UL>
                <LI>
                  <Text>List Item 1</Text>
                </LI>
                <LI>
                  <Text>List Item 2</Text>
                </LI>
              </UL>
            </Center>
          </ComponentWrapper>
        </Flex>
      </ScrollView>
    </div>
  );
};

const styles = StyleSheet.create(theme => ({
  container: {
    gap: theme.space['100'],
  },
  component: {
    borderColor: theme.colorMode === 'light' ? theme.colors.grey100 : theme.colors.grey400,
    borderWidth: theme.borderWidth['1'],
    borderRadius: theme.borderRadius.md,
    overflow: 'hidden',
    glexGrow: 1,
    height: 200,
    flexBasis: {
      xs: '100%',
      md: 300,
    },
  },
  componentWrap: {
    padding: theme.space['200'],
    flexGrow: 1,
  },
  text: {},
  textWrap: {
    borderTopColor: theme.colorMode === 'light' ? theme.colors.grey100 : theme.colors.grey400,
    borderTopWidth: theme.borderWidth['1'],
    paddingHorizontal: theme.space['200'],
    paddingVertical: theme.space['100'],
    backgroundColor: theme.colors.grey25,
  },
}));

export default AllComponents;
