import * as React from 'react';

import { Unstyled, Description } from '@storybook/blocks';

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
          <Link
            href={`https://github.com/utilitywarehouse/design-systems/blob/main/packages/web-ui/src/${componentName}.tsx`}
          >
            View on GitHub
          </Link>
          {figmaLink ? <Link href={figmaLink}>View on Figma</Link> : null}
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
