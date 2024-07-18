import { withGlobalPrefix } from '../utils';

const PREFIX = withGlobalPrefix('Typography');
export const typographyClasses: { [key: string]: string } = {
  primary: `${PREFIX}-primary`,
  secondary: `${PREFIX}-secondary`,
  success: `${PREFIX}-success`,
  error: `${PREFIX}-error`,
  inverse: `${PREFIX}-inverse`,
  semibold: `${PREFIX}-semibold`,
};

export const textVariantMapping: Record<string, string> = {
  subtitle: 'p',
  body: 'p',
  legalNote: 'p',
  caption: 'span',
};
export const headingVariantMapping: Record<string, string> = {
  displayHeading: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
};
