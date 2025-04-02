import { Meta } from '@storybook/react';
import Textarea from './Textarea';
import Variants from './Variants';

const TextareaMeta: Meta<typeof Textarea> = {
  title: 'Native UI / Components / Textarea',
  component: Textarea,
};

export default TextareaMeta;

export { Textarea as Playground, Variants };
