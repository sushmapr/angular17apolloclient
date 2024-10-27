import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';

import { AppComponent } from './app.component';
import {GraphQLModule} from "./graphql.module";
import {EventComponent} from "./components/event/event.component";
import {PublishEventComponent} from "./components/publish-event/publish-event.component";
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent, // Register the PublishEventComponent
    PublishEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,       // For ngModel in template-driven forms
    HttpClientModule,  // Required for Apollo's HttpLink
    ApolloModule,      // Provides Angular Apollo integration
    GraphQLModule,
    RouterOutlet,
    AppRoutingModule
    // Custom GraphQL configuration module
  ],
  providers: [],
  bootstrap: [AppComponent], // Bootstraps with main AppComponent
})
export class AppModule {}
