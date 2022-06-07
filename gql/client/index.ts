import { ApolloClient } from '@apollo/client';
import { cache } from './cache';
import { links } from './links';

export const client = new ApolloClient({
  cache,
  link: links,
  connectToDevTools: true,
});
