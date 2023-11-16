import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { PatientsAddComponent } from './patients-add/patients-add.component';
import { PatientsEditComponent } from './patients-edit/patients-edit.component';
import { PatientsListComponent } from './patients-list/patients-list.component';


@NgModule({
  declarations: [
    PatientsComponent,
    PatientsAddComponent,
    PatientsEditComponent,
    PatientsListComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule
  ]
})
export class PatientsModule { }
