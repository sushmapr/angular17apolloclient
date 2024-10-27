
import { Component, OnInit } from '@angular/core';
import {GraphqlService} from "../../services/event-graphql.service";

@Component({
  selector: 'app-publish-event',
  template: `
    <div class="publish-event-container">
      <h2 class="title">Publish Event</h2>
      <input
        class="input"
        [(ngModel)]="message"
        placeholder="Enter your message"
      />
      <button class="button publish-button" (click)="publishEvent()">
        Publish Event
      </button>

      <!-- Confetti element for success feedback -->
      <div *ngIf="showConfetti" class="confetti">
        🎉
      </div>
    </div>
  `,
  styleUrls: ['./publish-event.component.css'],
})
export class PublishEventComponent {
  message: string = '';
  showConfetti: boolean = false;

  constructor(private graphqlService: GraphqlService) {}

  publishEvent() {
    if (this.message) {
      // Call the GraphQL service to publish the event
      this.graphqlService.createEvent(this.message).subscribe(() => {
        // Clear the input after publishing
        this.message = '';

        // Trigger vibration for feedback if supported
        if (navigator.vibrate) {
          navigator.vibrate([200, 100, 200]); // Simple vibration pattern
        }

        // Show confetti animation
        this.showConfetti = true;
        setTimeout(() => {
          this.showConfetti = false;
        }, 2000); // Hide confetti after 2 seconds
      });
    }
  }
}
