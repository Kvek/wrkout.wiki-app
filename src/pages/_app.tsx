import { Provider } from 'react-redux';

import { Analytics } from '@vercel/analytics/react';

import { Layout } from '@components/Layout';
import { Theme } from '@components/Theme';

import type { AppProps } from 'next/app';
import { store } from 'shared/Store/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Theme>
        <Layout>
          <Analytics />
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </Provider>
  );
}
