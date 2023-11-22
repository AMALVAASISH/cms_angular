import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { SharedComponent } from './shared/shared.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { RecepbillsComponent } from './recepbills/recepbills.component';

const routes: Routes = [
  {path: '',redirectTo:'shared/home', pathMatch:'full'},
  {path:'appointments',component: AppointmentsComponent,loadChildren:()=>import('./appointments/appointments.module').then(x=>x.AppointmentsModule)},
  {path:'doctors', component: DoctorsComponent, loadChildren:()=>import('./doctors/doctors.module').then(x=>x.DoctorsModule)},
  {path:'patients',component:PatientsComponent,loadChildren:()=>import('./patients/patients.module').then(x=>x.PatientsModule)},
  {path:'recepbills',component: RecepbillsComponent,loadChildren:()=>import('./recepbills/recepbills.module').then(x=>x.RecepbillsModule)},
  {path:'shared', component: SharedComponent,loadChildren:()=>import('./shared/shared.module').then(x=>x.SharedModule)},
  {path:'**', component: NotFoundComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
