import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/shared/services/patients.service';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-patients-add',
  templateUrl: './patients-add.component.html',
  styleUrls: ['./patients-add.component.scss']
})

export class PatientsAddComponent implements OnInit {

  dob: any;
  // dobValue: string = ''; // Variable to hold the entered date
  // invalidDate: boolean = false; // Flag to indicate invalid date

  // validateDate(inputDate: string) {
  //   const dateLimit = new Date('2023-11-23');
  //   const enteredDate = new Date(inputDate);

  //   this.invalidDate = enteredDate > dateLimit;
  // }

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
  goBack():void{
    this.router.navigate(['/shared/home'])

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
        this.resetForm(form);
        this.router.navigate(['/patients/list'])
      })
    )
    }
    resetForm(form:NgForm){
      if(form!=null){
        form.resetForm();
      }}
  



}

// export class PatientsAddComponent {


//   constructor(public patientsService: PatientsService) {
//     // Constructor logic
//   }
  
//   // Other component logic
// }
// export class YourComponent {
//   dobValue: string = ''; // Variable to hold the entered date
//   invalidDate: boolean = false; // Flag to indicate invalid date

//   validateDate(inputDate: string) {
//     const dateLimit = new Date('2023-11-23');
//     const enteredDate = new Date(inputDate);

//     this.invalidDate = enteredDate > dateLimit;
//   }
// }
// import { Component } from '@angular/core';

// @Component({
//   // Your component metadata
// })
// export class PatientsAddComponent {

// }
