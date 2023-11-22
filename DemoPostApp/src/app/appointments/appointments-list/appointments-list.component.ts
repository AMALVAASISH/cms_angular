import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointments } from 'src/app/shared/models/appointments';
import { AppointmentsService } from 'src/app/shared/services/appointments.service';
import { PatientsService } from 'src/app/shared/services/patients.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent implements OnInit {

  constructor(public appointmentsService: AppointmentsService, public router: Router, public patientsService: PatientsService) { }

  ngOnInit(): void {
    this.appointmentsService.bindListAppointments()
  }
  goBack():void{
    this.router.navigate(['/shared/home'])

}
recepBill(p: Appointments){
  console.log(p);
  this.populateAppointmentsData(p);  
  this.router.navigate(['/recepbills/add'])


}
populateAppointmentsData(p: Appointments) {
  this.appointmentsService.formAppointmentsData=Object.assign({},p)
}


editrecepBill(p: Appointments){
  console.log(p);
  this.populatePatientsAppointmentsData(p);  
  this.router.navigate(['/appointments/edit', p.id])


}
populatePatientsAppointmentsData(p: Appointments) {
  this.appointmentsService.formAppointmentsData=Object.assign({},p)
}




}
