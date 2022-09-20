import '@fontsource/poppins';
import '../styles/globals.scss';
import type { ServerRouter } from '@/server/router';
import { withTRPC } from '@trpc/next';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default withTRPC<ServerRouter>({
  config({ ctx: _ }) {
    return { url: `${process.env.NEXT_PUBLIC_HOST}/api/trpc` };
  },
  ssr: true
})(App);
