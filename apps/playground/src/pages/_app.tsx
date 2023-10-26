import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '@utilitywarehouse/css-reset';
import '@utilitywarehouse/fontsource';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
