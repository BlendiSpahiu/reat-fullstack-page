import { createHttpLink } from '@apollo/client';

export const httpLink = createHttpLink({
  uri: 'http://localhost:8080/v1/graphql',
});
