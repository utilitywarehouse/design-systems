// this is a comment at the beginning of the file
import * as React from 'react';
import { Link, TextLink, Button, IconButton, Text, Heading } from '@utilitywarehouse/web-ui';
import { ChevronRightMediumIcon } from '@utilitywarehouse/react-icons';

const Component = ({ content }) => (
  <div>
    <Button></Button>
    <Button size='small'></Button>
    <Button size='medium'></Button>
    <IconButton label="continue">
        <ChevronRightMediumIcon/>
    </IconButton>
    <IconButton size='small' label="continue">
        <ChevronRightMediumIcon/>
    </IconButton>
    <IconButton size='medium' label="continue">
        <ChevronRightMediumIcon/>
    </IconButton>
    <Link>Hamburgefons</Link>
    <TextLink>Hamburgefons</TextLink>
    <Link size='small'>Hamburgefons</Link>
    <Link size='large'>Hamburgefons</Link>
    <Button>Hamburgefons</Button>
    <Text>{content}</Text>
    <Text />
    <Text variant="subtitle">{content}</Text>
    <Text variant="body">{content}</Text>
    <Text variant="legalNote">{content}</Text>
    <Text variant="caption">{content}</Text>
    <Heading variant="displayHeading">{content}</Heading>
    <Heading variant="h1">{content}</Heading>
    <Heading variant="h2">{content}</Heading>
    <Heading variant="h3">{content}</Heading>
    <Heading variant="h4">{content}</Heading>
    <Heading component="span" variant="h4">{content}</Heading>
    <Text sx={{ marginBottom: '0.35em' }}>{content}</Text>
    <Text component='p' sx={{ marginBottom: '16px' }}>{content}</Text>
    <Button asChild><a href="https://uw.co.uk/services">View UW services</a></Button>
    <Button asChild variant='solid'><a href="https://uw.co.uk/services">View UW services</a></Button>
    <Link href="https://uw.co.uk/services">
      View UW services
    </Link>
    <Button>Button</Button>
    <Button size="small">Button</Button>
    <Button size="medium">Button</Button>
    <Button size='medium'>Button</Button>
    <Button>Button</Button>
    <Button variant='solid'>Button</Button>
    <Button variant='outline'>Button</Button>
    <Link asChild><button>Button</button></Link>
    <Link href="https://uw.co.uk/services">
      Button
    </Link>
  </div>
);

export default Component;
