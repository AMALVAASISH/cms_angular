import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RecepbillsComponent } from './recepbills/recepbills.component';
import { RecepbillsListComponent } from './recepbills/recepbills-list/recepbills-list.component';
import { RecepbillsAddComponent } from './recepbills/recepbills-add/recepbills-add.component';
// import {NgxPrintModule} from 'ngx-print';

@NgModule({
  declarations: [
    AppComponent,
    RecepbillsComponent,
    RecepbillsListComponent,
    RecepbillsAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
