import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '@utilitywarehouse/fontsource';
import { ThemeProvider } from '@utilitywarehouse/web-ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
