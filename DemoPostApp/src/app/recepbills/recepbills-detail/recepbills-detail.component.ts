import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecepbillsService } from 'src/app/shared/services/recepbills.service';

@Component({
  selector: 'app-recepbills-detail',
  templateUrl: './recepbills-detail.component.html',
  styleUrls: ['./recepbills-detail.component.scss']
})
export class RecepbillsDetailComponent implements OnInit {

  constructor(public recepbillsService: RecepbillsService,public route: RouterModule) { }

  ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     const appointmentId = +params['id']; // Convert the parameter to a number

  //     this.recepbillsService.viewAppointment(appointmentId).subscribe(
  //       (response) => {
  //         this.appointment = response;
  //       }

  //     );
  //   });

  }
  // recepBill(p: Appointments){
  //   console.log(p);
  //   this.populateAppointmentsData(p);  
  //   this.router.navigate(['/recepbills/add'])
  
  
  // }
  // populateAppointmentsData(p: Appointments) {
  //   this.appointmentsService.formAppointmentsData=Object.assign({},p)
  // }
  
}
