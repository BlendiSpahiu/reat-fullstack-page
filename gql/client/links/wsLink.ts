import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { WebSocket } from 'ws';
import { createClient } from 'graphql-ws';

export const wsLink = new GraphQLWsLink(
  createClient({
    webSocketImpl: WebSocket,
    url: 'ws://localhost:8080/v1/graphql',
    lazy: true,
  })
);
