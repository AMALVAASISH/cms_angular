import { Injectable } from '@angular/core';
import { Doctors } from '../models/doctors';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  doctors: Doctors[] = []; //check this import if any error occurs

  constructor(private httpClient: HttpClient) { }

  bindListDoctors(): void{
    this.httpClient.get<Doctors[]>(environment.apiUrl + "/api/doctors/").subscribe(response=>this.doctors = response);
  }
}
