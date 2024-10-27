import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, split } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
// import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
// import { createClient } from 'graphql-ws';

import { getMainDefinition } from '@apollo/client/utilities';
import {WebSocketLink} from "@apollo/client/link/ws";
// import {SubscriptionClient} from "subscriptions-transport-ws";

const httpUri = 'http://localhost:8080/graphql'; // Ensure the backend is reachable here
const wsUri = 'ws://localhost:8080/subscriptions';

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  // Set up HTTP link for queries and mutations
  const http = httpLink.create({ uri: httpUri });

  // Set up WebSocket link for subscriptions
  // const ws = new GraphQLWsLink(createClient({ url: wsUri }));
  const ws = new WebSocketLink({
    uri: 'ws://localhost:8080/subscriptions',
  options: {
    reconnect: true
  }
    }
  );

  // Use split for directing subscription operations to WebSocket and others to HTTP
  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    ws,
    http
  );

  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
