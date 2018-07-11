import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsPage } from './events';
import {DemoUtilsModule} from './event-utils/module';
import {CalendarHeaderComponent} from './event-utils/calendar-header.component';

@NgModule({
  declarations: [
    EventsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsPage),
    DemoUtilsModule,
    CalendarHeaderComponent
  ],
})
export class EventsPageModule {}
