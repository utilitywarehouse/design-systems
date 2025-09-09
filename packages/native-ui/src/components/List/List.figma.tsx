import figma from '@figma/code-connect';
import { Card } from '../Card';
import { List } from './';

const props = {
  heading: figma.nestedProps('List Heading', {
    text: figma.string('heading'),
    supportingText: figma.string('Supporting text'),
  }),
  listItem: figma.children('List Item'),
  listItems: figma.children('List Items'),
  cardProps: figma.nestedProps('Card', {
    variant: figma.enum('variant', {
      dashed: 'dashed',
      elevated: 'elevated',
      outline: 'outline',
      filled: 'filled',
    }),
    padding: figma.enum('padding', {
      large: 'large',
      medium: 'medium',
      small: 'small',
      none: 'none',
    }),
    colorScheme: figma.enum('colorScheme', {
      base: 'base',
      grey: 'grey',
      purple: 'purple',
    }),
    surface: figma.enum('surface', {
      base: 'base',
      purple: 'purple',
    }),
  }),
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
    example: ({ heading, listItems, cardProps }) => (
      <List
        container="card"
        headingText={heading.text}
        headingSupportingText={heading.supportingText}
      >
        <Card {...cardProps}>{listItems}</Card>
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
    example: ({ listItems, cardProps }) => (
      <List container="card">
        <Card {...cardProps}>{listItems}</Card>
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
