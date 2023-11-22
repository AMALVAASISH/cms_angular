import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorsService } from 'src/app/shared/services/doctors.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {

  constructor(public doctorsService: DoctorsService, public router: Router) { }

  ngOnInit(): void {
    this.doctorsService.bindListDoctors()
  }
  goBack():void{
    this.router.navigate(['/shared/home'])}

    

}
