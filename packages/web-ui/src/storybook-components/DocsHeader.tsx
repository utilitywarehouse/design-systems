import * as React from 'react';

// eslint-disable-next-line import/no-unresolved
import { Description, Unstyled } from '@storybook/addon-docs/blocks';

import { BackToTop } from './BackToTop';

import { Alert, Flex, Heading, Link } from '../components';

interface DocsHeaderProps {
  componentName: string;
  figmaLink?: string;
  themeProviderRequired?: boolean;
  stories: React.ReactNode;
}

export const DocsHeader = ({
  componentName,
  figmaLink,
  themeProviderRequired,
  stories,
}: DocsHeaderProps) => (
  <Unstyled>
    <Flex direction="column" gap={3}>
      <Flex width="100%" align="center" justify="space-between">
        <Heading variant="h1">{componentName}</Heading>
        <Flex gap={3}>
          <Link href={`/?path=/story/web-ui-stories-${componentName}`}>Stories</Link>
          <Link
            href={`https://github.com/utilitywarehouse/design-systems/blob/main/packages/web-ui/src/components/${componentName}`}
          >
            Source
          </Link>
          {figmaLink ? <Link href={figmaLink}>Design</Link> : null}
        </Flex>
      </Flex>
      <Description of={stories} />
      {themeProviderRequired ? (
        <Alert
          colorScheme="gold"
          text="This component must be wrapped in a Web UI ThemeProvider"
          className="sb-unstyled"
        />
      ) : null}
    </Flex>
    <BackToTop />
  </Unstyled>
);
