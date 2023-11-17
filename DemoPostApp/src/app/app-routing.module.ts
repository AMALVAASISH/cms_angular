import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { SharedComponent } from './shared/shared.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {path: '',redirectTo:'shared/home', pathMatch:'full'},

  {path:'patients',component:PatientsComponent,loadChildren:()=>import('./patients/patients.module').then(x=>x.PatientsModule)},
  {path:'shared', component: SharedComponent,loadChildren:()=>import('./shared/shared.module').then(x=>x.SharedModule)},
  {path:'**', component: NotFoundComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
