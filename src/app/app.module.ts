// import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// import { ApolloModule } from 'apollo-angular';
// import {OrderComponent} from "./components/order/order.component";
// import {CommonModule} from "@angular/common";
// import {AngularGraphQLModule, GraphQLModule} from "./graphql.module";

// @NgModule({
//   declarations: [
//     AppComponent,
//     // AddTutorialComponent,
//     // TutorialDetailsComponent,
//     // TutorialsListComponent,
//     OrderComponent,
//   ],
//   imports: [
//     BrowserModule,
//     CommonModule,
//     ReactiveFormsModule,
//     AppRoutingModule,
//     FormsModule,
//     HttpClientModule,
//     ApolloModule,
//     AngularGraphQLModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}
// import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';

import { AppComponent } from './app.component';
import {GraphQLModule} from "./graphql.module";
import {EventComponent} from "./components/event/event.component";
import {PublishEventComponent} from "./components/publish-event/publish-event.component";
import {RouterOutlet} from "../../node_modules-gws/@angular/router";

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
