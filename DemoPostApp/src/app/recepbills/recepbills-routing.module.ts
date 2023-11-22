import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecepbillsAddComponent } from './recepbills-add/recepbills-add.component';
import { RecepbillsListComponent } from './recepbills-list/recepbills-list.component';
import { RecepbillsDetailComponent } from './recepbills-detail/recepbills-detail.component';

const routes: Routes = [
  {path:'add',component: RecepbillsAddComponent},
  {path:'list',component: RecepbillsListComponent},
  {path:'detail/:id', component: RecepbillsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecepbillsRoutingModule { }
