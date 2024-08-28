// this is a comment at the beginning of the file
import * as React from 'react';
import { Link, TextLink, Button } from '@utilitywarehouse/web-ui/dist/lab';
import { Typography, IconButton } from '@utilitywarehouse/web-ui';
import { ChevronRightMediumIcon } from '@utilitywarehouse/react-icons';

const Component = ({ content }) => (
  <div>
    <Button></Button>
    <Button size='small'></Button>
    <Button size='large'></Button>
    <IconButton label="continue">
        <ChevronRightMediumIcon/>
    </IconButton>
    <IconButton size='small' label="continue">
        <ChevronRightMediumIcon/>
    </IconButton>
    <IconButton size='large' label="continue">
        <ChevronRightMediumIcon/>
    </IconButton>
    <Link>Hamburgefons</Link>
    <TextLink>Hamburgefons</TextLink>
    <Link size='small'>Hamburgefons</Link>
    <Link size='large'>Hamburgefons</Link>
    <Button>Hamburgefons</Button>
    <Typography>{content}</Typography>
    <Typography />
    <Typography variant="subtitle">{content}</Typography>
    <Typography variant="body">{content}</Typography>
    <Typography variant="legalNote">{content}</Typography>
    <Typography variant="caption">{content}</Typography>
    <Typography variant="displayHeading">{content}</Typography>
    <Typography variant="h1">{content}</Typography>
    <Typography variant="h2">{content}</Typography>
    <Typography variant="h3">{content}</Typography>
    <Typography variant="h4">{content}</Typography>
    <Typography component="span" variant="h4">{content}</Typography>
    <Typography gutterBottom>{content}</Typography>
    <Typography paragraph>{content}</Typography>
    <Button href="https://uw.co.uk/services">View UW services</Button>
    <Button variant='primary' href="https://uw.co.uk/services">View UW services</Button>
    <Button variant="tertiary" href="https://uw.co.uk/services">
      View UW services
    </Button>
    <Button>Button</Button>
    <Button size="small">Button</Button>
    <Button size="medium">Button</Button>
    <Button size="large">Button</Button>
    <Button>Button</Button>
    <Button variant="primary">Button</Button>
    <Button variant="secondary">Button</Button>
    <Button variant="tertiary">Button</Button>
    <Button variant="tertiary" href="https://uw.co.uk/services">
      Button
    </Button>
  </div>
);

export default Component;
