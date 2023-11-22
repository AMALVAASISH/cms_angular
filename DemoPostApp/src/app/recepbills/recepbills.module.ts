import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecepbillsRoutingModule } from './recepbills-routing.module';
import { RecepbillsDetailComponent } from './recepbills-detail/recepbills-detail.component';


@NgModule({
  declarations: [
    RecepbillsDetailComponent
  ],
  imports: [
    CommonModule,
    RecepbillsRoutingModule
  ]
})
export class RecepbillsModule { }
