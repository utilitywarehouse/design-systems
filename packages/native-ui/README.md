# @utilitywarehouse/native-ui

## Installation

To use native-ui components, all you need to do is install the
`@utilitywarehouse/native-ui` package:

```sh
$ yarn add @utilitywarehouse/native-ui @gluestack-ui/themed @gluestack-style/react react-native-svg@13.4.0

# or

$ npm i @utilitywarehouse/native-ui @gluestack-ui/themed @gluestack-style/react react-native-svg@13.4.0
```

## Usage

A button component is a graphical user interface element that enables users to act by clicking or tapping. It can be customized in size, shape, color, and behavior to fit the design of the application or website. Here's an example:

```jsx
import { Button, NativeUIProvider, config } from '@@utilitywarehouse/native-ui';

export default function App () {
 return (
    <NativeUIProvider config={config}>
     <Button>
      <ButtonText>
        Hello world!
      </ButtonText>
     <Button>
    </NativeUIProvider>
  )
}
```

More guides on how to get started are available
[here](https://gluestack.io/).
