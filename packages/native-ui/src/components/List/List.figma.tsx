/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { List } from './';
import figma from '@figma/code-connect';

const props = {
  heading: figma.nestedProps('List Heading', {
    text: figma.string('heading'),
    supportingText: figma.string('Supporting text'),
  }),
  listItem: figma.children('List Item'),
  listItems: figma.children('List Items'),
};

figma.connect(
  List,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4643-17907&m=dev',
  {
    props,
    example: ({ listItems }) => <List>{listItems}</List>,
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
    example: ({ heading, listItems }) => (
      <List headingText={heading.text} headingSupportingText={heading.supportingText}>
        {listItems}
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
    example: ({ heading, listItems }) => (
      <List
        container="card"
        headingText={heading.text}
        headingSupportingText={heading.supportingText}
      >
        <Card>{listItems}</Card>
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
    example: ({ listItems }) => (
      <List container="card">
        <Card>{listItems}</Card>
      </List>
    ),
  }
);

figma.connect(
  List,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4623-14698&m=dev',
  {
    props,
    imports: [],
    example: ({ listItem }) => <>{listItem}</>,
  }
);
