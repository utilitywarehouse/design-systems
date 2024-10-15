/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { List, ListItem } from './';
import figma from '@figma/code-connect';

const props = {
  heading: figma.nestedProps('List Heading', {
    text: figma.string('heading'),
    supportingText: figma.string('Supporting text'),
  }),
};

figma.connect(
  List,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4643-17907&m=dev',
  {
    props,
    example: () => <List>{children}</List>,
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
        {children}
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
      container: 'card',
      'Heading?': true,
    },
    example: ({ heading }) => (
      <List
        container="card"
        headingText={heading.text}
        headingSupportingText={heading.supportingText}
      >
        <Card>{children}</Card>
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
      container: 'card',
      'Heading?': false,
    },
    example: () => (
      <List container="card">
        <Card>{children}</Card>
      </List>
    ),
  }
);

const list = [
  {
    id: '1',
    text: 'List item 1',
    supportingText: 'List item 1 supporting text',
  },
];

figma.connect(
  List,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4623-14698&m=dev',
  {
    props,
    example: () => (
      <>
        {list.map(listItem => (
          <ListItem
            key={listItem.id}
            {...listItem}
            text={listItem.text}
            supportingText={listItem.supportingText}
          />
        ))}
      </>
    ),
  }
);
