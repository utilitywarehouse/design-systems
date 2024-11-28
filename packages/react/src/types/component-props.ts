import * as React from 'react';

// Omits the specified props from the component props. Autocomplete will suggest props
// of the component, but won't restrict the omittable props to those that actually exist.
export type ComponentPropsWithout<
  T extends React.ElementType,
  O extends
    | Omit<string, keyof React.ComponentPropsWithoutRef<T>>
    | keyof React.ComponentPropsWithoutRef<T>,
> = Omit<React.ComponentPropsWithoutRef<T>, O & string>;

export type RemovedProps = 'asChild' | 'defaultChecked' | 'defaultValue' | 'color';
