import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentsService } from 'src/app/shared/services/appointments.service';
import { DoctorsService } from 'src/app/shared/services/doctors.service';
import { PatientsService } from 'src/app/shared/services/patients.service';
import { RecepbillsService } from 'src/app/shared/services/recepbills.service';

@Component({
  selector: 'app-recepbills-add',
  templateUrl: './recepbills-add.component.html',
  styleUrls: ['./recepbills-add.component.scss']
})
export class RecepbillsAddComponent implements OnInit {
  statusOption: string=''

  constructor(public recepbillsService: RecepbillsService, public router: Router, public appointmentsService: AppointmentsService, public patientsService: PatientsService,public doctorsService: DoctorsService) { }

  ngOnInit(): void {
  }
  onSubmit(form : NgForm){
    console.log(form.value)
    this.addRecepbills(form)
  }
  addRecepbills(form: NgForm){
    console.log("inserting.........")
    this.recepbillsService.insertRecepbills(form.value).subscribe(
      (result=>{
        console.log(result);
        this.resetForm(form);
        this.router.navigate(['/recepbills/list'])
      })
    )
    }
    resetForm(form:NgForm){
      if(form!=null){
        form.resetForm();
      }}
  



}
