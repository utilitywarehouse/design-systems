import React from 'react';
import { List, ListItem } from './';
import figma from '@figma/code-connect';

const props = {
  heading: figma.nestedProps('List Heading', {
    text: figma.string('heading'),
    supportingText: figma.string('Supporting text'),
  }),
};

// heading: figma.boolean("Heading?"),
// container: figma.enum("_container", {
//   full: "full",
//   card: "card",
// }),

figma.connect(
  List,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4643-17907&m=dev',
  {
    props,
    example: () => (
      <List>
        <ListItem text="List Item 1" onPress={() => console.log('item pressed')} />
        <ListItem text="List Item 2" onPress={() => console.log('item pressed')} />
        <ListItem text="List Item 3" onPress={() => console.log('item pressed')} />
      </List>
    ),
  }
);

figma.connect(
  List,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4643-17907&m=dev',
  {
    props,
    variant: {
      'Heading?': true,
    },
    example: ({ heading }) => (
      <List headingText={heading.text} headingSupportingText={heading.supportingText}>
        <ListItem text="List Item 1" onPress={() => console.log('item pressed')} />
        <ListItem text="List Item 2" onPress={() => console.log('item pressed')} />
        <ListItem text="List Item 3" onPress={() => console.log('item pressed')} />
      </List>
    ),
  }
);

figma.connect(
  List,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4643-17907&m=dev',
  {
    props,
    variant: {
      _container: 'card',
      'Heading?': true,
    },
    example: ({ heading }) => (
      <List
        container="card"
        headingText={heading.text}
        headingSupportingText={heading.supportingText}
      >
        <Card>
          <ListItem text="List Item 1" onPress={() => console.log('item pressed')} />
          <ListItem text="List Item 2" onPress={() => console.log('item pressed')} />
          <ListItem text="List Item 3" onPress={() => console.log('item pressed')} />
        </Card>
      </List>
    ),
  }
);

figma.connect(
  List,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4643-17907&m=dev',
  {
    props,
    variant: {
      _container: 'card',
      'Heading?': false,
    },
    example: () => (
      <List container="card">
        <Card>
          <ListItem text="List Item 1" onPress={() => console.log('item pressed')} />
          <ListItem text="List Item 2" onPress={() => console.log('item pressed')} />
          <ListItem text="List Item 3" onPress={() => console.log('item pressed')} />
        </Card>
      </List>
    ),
  }
);
