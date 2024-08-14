export type Platform = 'android' | 'ios' | 'web';

export interface PlatformContextProps {
  platform: Platform;
  args: Record<string, object>;
  id: string;
  colourMode?: 'light' | 'dark';
}
