import { breakpoints, type Breakpoint, type Responsive } from '../types/responsive';

export function isResponsiveObject<Value extends string | number>(
  obj: Responsive<Value | Omit<string, Value>> | undefined
): obj is Record<Breakpoint, string> {
  return (
    typeof obj === 'object' &&
    Object.keys(obj).some(key => (breakpoints as unknown as ReadonlyArray<string>).includes(key))
  );
}
