import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsAddComponent } from './appointments-add/appointments-add.component';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { AppointmentsEditComponent } from './appointments-edit/appointments-edit.component';

const routes: Routes = [
  {path:'add', component: AppointmentsAddComponent},
  // go to posts-list
  {path:'list', component: AppointmentsListComponent},
  //go to posts-edit
  {path:'edit', component: AppointmentsEditComponent},
  {path:'edit/:id',component: AppointmentsEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
