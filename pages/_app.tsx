import '../styles/globals.css';
import '@ornio-no/ds/style.css';
import type { AppProps } from 'next/app';
import { client } from '../gql/client';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
