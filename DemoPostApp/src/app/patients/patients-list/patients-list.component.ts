import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patients } from 'src/app/shared/models/patients';
import { PatientsService } from 'src/app/shared/services/patients.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {

  constructor(public patientsService: PatientsService, public router: Router) { }

  ngOnInit(): void {
    this.patientsService.bindListPosts()
  }
  goBack():void{
    this.router.navigate(['/shared/home'])

}
  updatePatients(p: Patients){
    console.log(p);
    this.populatePatientsData(p);  
    this.router.navigate(['patients/edit', p.id])


  }
  populatePatientsData(p: Patients) {
    this.patientsService.formPatientsData=Object.assign({},p)
  }

  bookAppointments(p: Patients){
    console.log(p);
    this.populateAppointmentssData(p);
    this.router.navigate(['appointments/add'])
  }
  populateAppointmentssData(p: Patients) {
    this.patientsService.formPatientsData=Object.assign({},p)
  }
}
