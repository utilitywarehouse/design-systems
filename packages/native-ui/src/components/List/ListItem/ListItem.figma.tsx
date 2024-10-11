/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { ListItem } from './';
import figma from '@figma/code-connect';

const props = {
  divider: figma.boolean('Divider?'),
  disabled: figma.enum('state', {
    disabled: true,
  }),
  loading: figma.enum('state', {
    loading: true,
  }),
  trailingIcon: figma.instance('Trailing Icon'),
  leadingIcon: figma.instance('Leading Icon'),
  text: figma.nestedProps('.Parts/List Item Text', {
    text: figma.string('list item text'),
    supportingText: figma.string('Supporting Text'),
  }),
};

figma.connect(
  ListItem,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4283-3401&m=dev',
  {
    props: props,
    example: ({ disabled, divider, loading, text }) => (
      <ListItem
        text={text.text}
        supportingText={text.supportingText}
        disabled={disabled}
        divider={divider}
        loading={loading}
      />
    ),
  }
);

figma.connect(
  ListItem,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4283-3401&m=dev',
  {
    variant: {
      'Trailing Icon?': true,
      'Trailing Icon': 'Chevron Right-01 - 24',
    },
    props,
    example: ({ disabled, divider, loading, text }) => (
      <ListItem
        text={text.text}
        supportingText={text.supportingText}
        disabled={disabled}
        divider={divider}
        loading={loading}
        onPress={() => console.log('list item pressed')}
      />
    ),
  }
);

figma.connect(
  ListItem,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4283-3401&m=dev',
  {
    props: props,
    variant: {
      'Trailing Icon?': true,
    },
    example: ({ disabled, divider, loading, text, trailingIcon }) => (
      <ListItem
        text={text.text}
        supportingText={text.supportingText}
        disabled={disabled}
        divider={divider}
        loading={loading}
        trailingContent={trailingIcon}
      />
    ),
  }
);

figma.connect(
  ListItem,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4283-3401&m=dev',
  {
    props: props,
    variant: {
      'Trailing Icon?': true,
      'Leading Icon?': true,
      'Trailing Icon': 'Chevron Right-01 - 24',
    },
    example: ({ disabled, divider, loading, text, leadingIcon }) => (
      <ListItem
        text={text.text}
        supportingText={text.supportingText}
        disabled={disabled}
        divider={divider}
        loading={loading}
        leadingContent={leadingIcon}
        onPress={() => console.log('list item pressed')}
      />
    ),
  }
);

figma.connect(
  ListItem,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4283-3401&m=dev',
  {
    props: props,
    variant: {
      'Trailing Icon?': true,
      'Leading Icon?': true,
    },
    example: ({ disabled, divider, loading, text, trailingIcon, leadingIcon }) => (
      <ListItem
        text={text.text}
        supportingText={text.supportingText}
        disabled={disabled}
        divider={divider}
        loading={loading}
        leadingContent={leadingIcon}
        trailingContent={trailingIcon}
      />
    ),
  }
);

figma.connect(
  ListItem,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4283-3401&m=dev',
  {
    props: props,
    variant: {
      'Leading Icon?': true,
    },
    example: ({ disabled, divider, loading, text, leadingIcon }) => (
      <ListItem
        text={text.text}
        supportingText={text.supportingText}
        disabled={disabled}
        divider={divider}
        loading={loading}
        leadingContent={leadingIcon}
      />
    ),
  }
);

figma.connect(
  ListItem,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4283-3401&m=dev',
  {
    variant: {
      _content: 'toggle',
      'Trailing Icon?': true,
      'Leading Icon?': true,
    },
    props,
    example: ({ disabled, divider, loading, text, leadingIcon }) => (
      // Toggle doesn't exist in native-ui yet
      <ListItem
        text={text.text}
        supportingText={text.supportingText}
        disabled={disabled}
        divider={divider}
        loading={loading}
        leadingContent={leadingIcon}
        trailingContent={<Toggle />}
      />
    ),
  }
);

figma.connect(
  ListItem,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4283-3401&m=dev',
  {
    variant: {
      _content: 'toggle',
      'Leading Icon?': true,
    },
    props,
    example: ({ disabled, divider, loading, text, leadingIcon }) => (
      // Toggle doesn't exist in native-ui yet
      <ListItem
        text={text.text}
        supportingText={text.supportingText}
        disabled={disabled}
        divider={divider}
        loading={loading}
        leadingContent={leadingIcon}
        trailingContent={<Toggle />}
      />
    ),
  }
);

figma.connect(
  ListItem,
  'https://www.figma.com/design/3RY3OvLA88yZksRjOfjQJm/UW-App-UI?node-id=4283-3401&m=dev',
  {
    variant: {
      _content: 'toggle',
      'Leading Icon?': false,
    },
    props,
    example: ({ disabled, divider, loading, text }) => (
      // Toggle doesn't exist in native-ui yet
      <ListItem
        text={text.text}
        supportingText={text.supportingText}
        disabled={disabled}
        divider={divider}
        loading={loading}
        trailingContent={<Toggle />}
      />
    ),
  }
);
