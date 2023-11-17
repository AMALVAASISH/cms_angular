import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/shared/services/patients.service';

@Component({
  selector: 'app-patients-add',
  templateUrl: './patients-add.component.html',
  styleUrls: ['./patients-add.component.scss']
})
export class PatientsAddComponent implements OnInit {

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

  constructor(public patientsService: PatientsService, public router: Router) { }

  ngOnInit(): void {
  }
  addMethod(){
    // call the service method
   
  }
  onSubmit(form : NgForm){
    console.log(form.value)

    

    this.addPatients(form)
  }
  addPatients(form: NgForm){
    console.log("inserting.........")
    this.patientsService.insertPatients(form.value).subscribe(
      (result=>{
        console.log(result);
        this.router.navigate(['/patients/list'])
      })
    )
    }



}

// export class PatientsAddComponent {


//   constructor(public patientsService: PatientsService) {
//     // Constructor logic
//   }
  
//   // Other component logic
// }
