import { StoryFn } from '@storybook/react';
import {
  Button,
  ScrollView,
  Text,
  View,
  Box,
  ButtonGroup,
  StyleSheet,
} from '@utilitywarehouse/native-ui';
import { Box as LabBox } from '@utilitywarehouse/native-ui/lab';
import React, { useState } from 'react';
import TimedRender from './TimedRender';
import StoryWrap from '../docs/components/StoryWrap';
import { colors } from '@utilitywarehouse/colour-system';

const COUNT = 250;

const NativeBox = () => (
  <View style={styles.boxContainer}>
    {new Array(COUNT).fill(0).map((_, i) => (
      <View
        key={`native-box-${i}`}
        style={[styles.styledView, i % 2 === 0 ? styles.blueBackground : styles.grayBackground]}
      >
        <Text color="$white">Item {i}</Text>
        <Text color="$white">This is static content</Text>
      </View>
    ))}
  </View>
);

const GluestackBox = () => (
  <View style={styles.boxContainer}>
    {new Array(COUNT).fill(0).map((_, i) => (
      <Box
        key={`gluestack-box-${i}`}
        bg={i % 2 === 0 ? '$cyan500' : '$grey500'}
        borderColor="rgb(255, 0, 0)"
        borderWidth={2}
        padding={10}
        justifyContent="center"
        alignItems="center"
      >
        <Text color="$white">Item {i}</Text>
        <Text color="$white">This is static content</Text>
      </Box>
    ))}
  </View>
);

const UnsistylesBox = () => {
  return (
    <View style={styles.boxContainer}>
      {new Array(COUNT).fill(0).map((_, i) => (
        <View
          key={`unsistyles-box-${i}`}
          style={[
            styless.styledView,
            i % 2 === 0 ? styless.blueBackground : styless.grayBackground,
          ]}
        >
          <Text color="$white">Item {i}</Text>
          <Text color="$white">This is static content</Text>
        </View>
      ))}
    </View>
  );
};

const LabBoxComponent = () => (
  <View style={styles.boxContainer}>
    {new Array(COUNT).fill(0).map((_, i) => (
      <LabBox
        key={`lab-box-${i}`}
        bg={i % 2 === 0 ? '$cyan500' : '$grey500'}
        borderColor="rgb(255, 0, 0)"
        borderWidth={2}
        padding={10}
        justifyContent="center"
        alignItems="center"
      >
        <Text color="$white">Item {i}</Text>
        <Text color="$white">This is static content</Text>
      </LabBox>
    ))}
  </View>
);

const BoxPerfTest: StoryFn = () => {
  const [styleType, setStyleType] = useState<string | undefined>(undefined);

  const onStyleTypePress = (curry: string) => () => {
    setStyleType(curry);
  };

  const renderStyleLibrary = () => {
    switch (styleType) {
      case 'React Native':
        return <NativeBox />;
      case 'Gluestack':
        return <GluestackBox />;
      case 'Lab':
        return <LabBoxComponent />;
      case 'Unsistyles':
        return <UnsistylesBox />;
      default:
        return null;
    }
  };

  return (
    <StoryWrap>
      <ButtonGroup space="sm" flexDirection="column">
        <Button text="React Native" onPress={onStyleTypePress('React Native')} />
        <Button text="Unsistyles" onPress={onStyleTypePress('Unsistyles')} />
        <Button text="Gluestack" onPress={onStyleTypePress('Gluestack')} />
        <Button text="Lab" onPress={onStyleTypePress('Lab')} />
      </ButtonGroup>

      {styleType ? (
        <TimedRender key={styleType}>
          <Text style={styles.text}>
            Rendering with <Text style={styles.bold}>{styleType}</Text>
          </Text>
        </TimedRender>
      ) : null}
      <ScrollView>{renderStyleLibrary()}</ScrollView>
    </StoryWrap>
  );
};

const styless = StyleSheet.create(theme => ({
  styledView: {
    borderColor: 'rgb(255, 0, 0)',
    borderWidth: 2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueBackground: {
    backgroundColor: theme.colors.cyan500,
  },
  grayBackground: {
    backgroundColor: theme.colors.grey500,
  },
}));

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 60,
    backgroundColor: '#fff',
    flex: 1,
    minHeight: 500,
  },
  text: {
    marginVertical: 12,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  boxContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  styledView: {
    borderColor: 'rgb(255, 0, 0)',
    borderWidth: 2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueBackground: {
    backgroundColor: colors.cyan500,
  },
  grayBackground: {
    backgroundColor: colors.grey500,
  },
});

export default BoxPerfTest;
