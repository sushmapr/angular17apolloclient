import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  // Query: Get all events
  getEvents() {
    const GET_EVENTS = gql`
      query {
        events {
          name
          createdOn
        }
      }
    `;
    return this.apollo.watchQuery({ query: GET_EVENTS }).valueChanges;
  }

  // Mutation: Create a new event
  createEvent(eventName: string) {
    const CREATE_EVENT = gql`
      mutation CreateEvent($name: String!) {
        createEvent(name: $name) {
          name
          createdOn
        }
      }
    `;
    return this.apollo.mutate({
      mutation: CREATE_EVENT,
      variables: { name: eventName },
    });
  }

  // Subscription: Listen to new events
  onEventCreated() {
    const EVENT_CREATED = gql`
      subscription {
        events {
          name
          createdOn
        }
      }
    `;
    return this.apollo.subscribe({ query: EVENT_CREATED });
  }
}
