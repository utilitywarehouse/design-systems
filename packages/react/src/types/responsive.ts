export type Breakpoints = 'mobile' | 'tablet' | 'desktop' | 'wide';
export const breakpoints = ['mobile', 'tablet', 'desktop', 'wide'] as const;
export type Breakpoint = (typeof breakpoints)[number];
export type Responsive<T> = T | Partial<Record<Breakpoints, T>>;

// Creates a union type of string literals with strings, but retains intellisense for the literals.
// Union<string, 'foo' | 'bar'> => string | Omit<string, 'foo' | 'bar'>
export type Union<S = string, T extends string | number = string> = T | Omit<S, T>;
