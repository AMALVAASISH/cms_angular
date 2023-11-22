import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recepbills } from 'src/app/shared/models/recepbills';
import { RecepbillsService } from 'src/app/shared/services/recepbills.service';

@Component({
  selector: 'app-recepbills-list',
  templateUrl: './recepbills-list.component.html',
  styleUrls: ['./recepbills-list.component.scss']
})
export class RecepbillsListComponent implements OnInit {

  constructor(public recepbillsService: RecepbillsService, public router: Router) { }

  ngOnInit(): void {
    this.recepbillsService.bindListRecepbills();
  }
  goBack():void{
    this.router.navigate(['/shared/home'])}

    
  detailView(p: Recepbills){
    console.log(p);
    this.populateAppointmentsData(p);  
    this.router.navigate(['/recepbills/detail', p.id])
  
  
  }
  populateAppointmentsData(p: Recepbills) {
    this.recepbillsService.formRecepbillsData=Object.assign({},p)
  }
}
