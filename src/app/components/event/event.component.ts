
import { Component, OnInit } from '@angular/core';
import {GraphqlService} from "../../services/event-graphql.service";

@Component({
  selector: 'app-event',
  template: `
    <div class="event-container">
      <div class="create-section">
        <h3 class="title">Create New Event</h3>
        <input
          class="input"
          [(ngModel)]="newEventName"
          placeholder="Event Name"
        />
        <button class="button create-button" (click)="createEvent()">
          Create Event
        </button>
      </div>

      <div class="events-section">
        <div class="events-list">
          <h2 class="subtitle">Events</h2>
          <ul class="event-list">
            <li *ngFor="let event of events" class="event-item">
              <span class="event-name">{{ event.name }}</span>
              <span class="event-date">{{ event.createdOn | date: 'short' }}</span>
            </li>
          </ul>
          <button class="button refresh-button" (click)="loadEvents()">
            Refresh Events
          </button>
        </div>

        <div class="divider"></div>

        <div class="updates-list">
          <h2 class="subtitle">Real-time Event Updates</h2>
          <ul class="event-list">
            <li *ngFor="let event of eventUpdates" class="event-item update-item">
              <span class="event-name">{{ event.name }}</span>
              <span class="event-date">{{ event.createdOn | date: 'short' }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  events: any[] = [];
  eventUpdates: any[] = [];
  newEventName: string = '';

  constructor(private graphqlService: GraphqlService) {}

  ngOnInit(): void {
    this.loadEvents();
    this.subscribeToNewEvents();
  }

  loadEvents() {
    this.graphqlService.getEvents().subscribe((result: any) => {
      this.events = result.data.events;
    });
  }

  createEvent() {
    if (this.newEventName) {
      this.graphqlService.createEvent(this.newEventName).subscribe(() => {
        this.newEventName = ''; // Clear input after creation
      });
    }
  }

  subscribeToNewEvents() {
    this.graphqlService.onEventCreated().subscribe((result: any) => {
      this.eventUpdates.push(result.data.events);
    });
  }
}
