export type Breakpoints = 'mobile' | 'tablet' | 'desktop' | 'wide';
export type Responsive<T> = T | Partial<Record<Breakpoints, T>>;
