import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Recepbills } from 'src/app/shared/models/recepbills';
import { RecepbillsService } from 'src/app/shared/services/recepbills.service';

@Component({
  selector: 'app-recepbills-detail',
  templateUrl: './recepbills-detail.component.html',
  styleUrls: ['./recepbills-detail.component.scss']
})
export class RecepbillsDetailComponent implements OnInit {
  recepbills: Recepbills | undefined;

  constructor(public recepbillsService: RecepbillsService,private route: ActivatedRoute,public router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const appointmentId = +params['id']; // Convert the parameter to a number

      this.recepbillsService.getRecepbillById(appointmentId).subscribe(
        (response) => {
          this.recepbills = response;
        },
        (error) => {
          // Handle error, e.g., display an error message
          console.error('Error fetching recepbill details:', error);
        }
      );
    });
  }
  //   this.route.params.subscribe(params => {
  //     const appointmentId = +params['id']; // Convert the parameter to a number

  //     this.recepbillsService.viewAppointment(appointmentId).subscribe(
  //       (response) => {
  //         this.appointment = response;
  //       }

  //     );
  //   });

  
  // recepBill(p: Appointments){
  //   console.log(p);
  //   this.populateAppointmentsData(p);  
  //   this.router.navigate(['/recepbills/add'])
  
  
  // }
  // populateAppointmentsData(p: Appointments) {
  //   this.appointmentsService.formAppointmentsData=Object.assign({},p)
  // }
  printReceipt() {
    window.print(); // Trigger the print dialog
  }
  goBack():void{
    this.router.navigate(['/shared/home'])}
  
}
