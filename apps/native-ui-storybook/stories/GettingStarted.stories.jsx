import { Linking, Text, View } from 'react-native';
import { Badge } from '@utilitywarehouse/native-ui';

const StarterComponent = () => {
  return (
    <View>
      <Text>
        Thanks for trying out Storybook, follow the{' '}
        <Text
          style={{
            color: 'blue',
            textDecorationLine: 'underline',
            textDecorationColor: 'blue',
          }}
          onPress={() =>
            Linking.openURL(
              'https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/'
            )
          }
        >
          tutorial
        </Text>{' '}
        to learn how to create your own stories
      </Text>
      <Badge size="small" borderless>
        New
      </Badge>
    </View>
  );
};

const meta = {
  title: 'Welcome',
  component: StarterComponent,
};

export default meta;

export const GettingStarted = {
  args: {},
  parameters: {
    noBackground: true,
  },
};
