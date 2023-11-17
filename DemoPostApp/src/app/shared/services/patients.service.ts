import { Injectable } from '@angular/core';
import { Patients } from '../models/patients';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  patients: Patients[] = [];
  formPatientsData: Patients = new Patients();
  constructor(private httpClient: HttpClient) { }

  bindListPosts(): void{
    this.httpClient.get<Patients[]>(environment.apiUrl + "/api/patients/")
    .subscribe(response=>this.patients = response);
  }

  insertPatients(patients: Patients): Observable<any>{
    return this.httpClient.post(environment.apiUrl + "/api/patients/", patients)
  }

  updatePatients(patients: Patients): Observable<any>{
    console.log("in update ")
    return this.httpClient.put(environment.apiUrl + "/api/patients/" + patients.id, patients)
  }

}
