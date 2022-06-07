// apollo
import { setContext } from '@apollo/client/link/context';

// utils

export const authLink = setContext((_, { headers }) => {
  // validate token here
  return {
    headers: {
      ...headers,
      'x-hasura-role': 'anonymous',
    },
  };
});
