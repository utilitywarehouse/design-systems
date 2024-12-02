import * as React from 'react';

import { Unstyled, Description } from '@storybook/blocks';
import { Flex } from '../components/Flex/Flex';
import { Heading } from '../components/Heading/Heading';
import { Link } from '../components/Link/Link';

interface DocsHeaderProps {
  componentName: string;
  figmaLink?: string;
  themeProviderRequired?: boolean;
  stories: React.ReactNode;
}

export const DocsHeader = ({ componentName, figmaLink, stories }: DocsHeaderProps) => (
  <Unstyled>
    <Flex direction="column" gap="24px">
      <Flex width="100%" align="center" justify="space-between">
        <Heading variant="h1">{componentName}</Heading>
        <Flex gap="24px">
          <Link href={`/?path=/story/stories-${componentName}`}>Stories</Link>
          <Link
            href={`https://github.com/utilitywarehouse/pollen/blob/main/packages/react/src/components/${componentName}`}
          >
            Source
          </Link>
          {figmaLink ? <Link href={figmaLink}>Design</Link> : null}
        </Flex>
      </Flex>
      <Description of={stories} />
    </Flex>
  </Unstyled>
);
