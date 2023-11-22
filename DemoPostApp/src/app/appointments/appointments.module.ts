import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { AppointmentsAddComponent } from './appointments-add/appointments-add.component';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { AppointmentsEditComponent } from './appointments-edit/appointments-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppointmentsComponent,
    AppointmentsAddComponent,
    AppointmentsListComponent,
    AppointmentsEditComponent
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    FormsModule
  ]
})
export class AppointmentsModule { }
