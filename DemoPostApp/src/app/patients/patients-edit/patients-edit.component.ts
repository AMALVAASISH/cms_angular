import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/shared/services/patients.service';

@Component({
  selector: 'app-patients-edit',
  templateUrl: './patients-edit.component.html',
  styleUrls: ['./patients-edit.component.scss']
})
export class PatientsEditComponent implements OnInit {

  bloodGroups = [
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B-', label: 'B-' },
    { value: 'B+', label: 'B+' },
    { value: 'O-', label: 'O-' },
    { value: 'O+', label: 'O+' },
    { value: 'AB-', label: 'AB-' },
    { value: 'AB+', label: 'AB+' },
    // Add other blood group options similarly based on your Django model
  ];

  genderOptions = [
    { value: 'M', label: 'Male' },
    { value: 'F', label: 'Female' },
    { value: 'O', label: 'Other' },
    // Add other gender options similarly based on your Django model
  ];

  constructor(public patientsService: PatientsService,public router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log(form.value);
    // update
    this.editPatients(form);
  }
  editPatients(form: NgForm) {
    console.log("editing.....")
    this.patientsService.updatePatients(form.value).subscribe((result: any)=>{
      console.log(result);
      this.router.navigate(['/patients/list'])
    })
  }


}
