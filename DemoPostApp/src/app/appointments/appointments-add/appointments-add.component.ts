import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentsService } from 'src/app/shared/services/appointments.service';
import { DoctorsService } from 'src/app/shared/services/doctors.service';
import { PatientsService } from 'src/app/shared/services/patients.service';

@Component({
  selector: 'app-appointments-add',
  templateUrl: './appointments-add.component.html',
  styleUrls: ['./appointments-add.component.scss']
})
export class AppointmentsAddComponent implements OnInit {

  constructor(public appointmentsService: AppointmentsService, public router : Router, public patientsService: PatientsService, public doctorsService: DoctorsService) { }

  ngOnInit(): void {
    this.appointmentsService.listDoctors();
  }

  onSubmit(form : NgForm){
    console.log(form.value)
 
    this.addAppointments(form);
  }
  addAppointments(form: NgForm){
    console.log("inserting.........")
    this.appointmentsService.insertAppointments(form.value).subscribe(
      (result=>{
        console.log(result);
        this.resetForm(form);
        // this.toastr.success('Item added successfully!');
        this.router.navigate(['/appointments/list'])
      }))
}
resetForm(form:NgForm){
  if(form!=null){
    form.resetForm();
  }}
}
