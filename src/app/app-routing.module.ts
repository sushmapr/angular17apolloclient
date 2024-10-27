import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventComponent} from "./components/event/event.component";
import {PublishEventComponent} from "./components/publish-event/publish-event.component";

const routes: Routes = [
  { path: '', redirectTo: '/addevent', pathMatch: 'full' },
  { path: 'events', component: EventComponent },
  { path: 'addevent', component: PublishEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
