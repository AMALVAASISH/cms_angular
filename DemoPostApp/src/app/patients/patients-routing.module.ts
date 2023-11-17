import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients.component';
import { PatientsAddComponent } from './patients-add/patients-add.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientsEditComponent } from './patients-edit/patients-edit.component';

const routes: Routes = [
  {path:'add', component: PatientsAddComponent},
  {path:'list',component: PatientsListComponent},
  {path:'edit',component: PatientsEditComponent},
  {path: 'edit/:id', component: PatientsEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
