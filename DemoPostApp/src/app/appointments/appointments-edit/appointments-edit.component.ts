import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentsService } from 'src/app/shared/services/appointments.service';
import { PatientsService } from 'src/app/shared/services/patients.service';

@Component({
  selector: 'app-appointments-edit',
  templateUrl: './appointments-edit.component.html',
  styleUrls: ['./appointments-edit.component.scss']
})
export class AppointmentsEditComponent implements OnInit {

  constructor(public patientsService: PatientsService,public appointmentsService: AppointmentsService,public router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    // update
    this.editAppointments(form);
  }
  editAppointments(form: NgForm) {
    console.log("editing.....")
    this.appointmentsService.updateAppointments(form.value).subscribe((result: any)=>{
      console.log(result);
      this.router.navigate(['/appointments/list'])
    })
  }

}
