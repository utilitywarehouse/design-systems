/* The global prefix, mostly used with component class names */
const GLOBAL_PREFIX = 'uwp';

/* returns the given value prefixed with the global prefix */
export function withGlobalPrefix(name: string) {
  return `${GLOBAL_PREFIX}-${name}`;
}
