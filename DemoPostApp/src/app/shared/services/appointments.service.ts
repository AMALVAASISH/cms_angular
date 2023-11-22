import { Injectable } from '@angular/core';
import { Appointments, Doctors } from '../models/appointments';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PatientsService } from './patients.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  appointments: Appointments[] = [];
  doctors: Doctors[] = [];
  formAppointmentsData: Appointments = new Appointments();
  constructor(private httpClient: HttpClient,private patientsService : PatientsService) { }

  bindListAppointments(): void{
    this.httpClient.get<Appointments[]>(environment.apiUrl + "/api/appointments/")
    .subscribe(response=>this.appointments = response);
}
  insertAppointments(appointments: Appointments): Observable<any>{
    return this.httpClient.post(environment.apiUrl + "/api/appointments/", appointments)
  } 

  updateAppointments(appointments: Appointments): Observable<any>{
    console.log("in update ")
    return this.httpClient.put(environment.apiUrl + "/api/appointments/" + appointments.id, appointments)
  }

listDoctors(): void{
  this.httpClient.get<Doctors[]>(environment.apiUrl + "/api/doctors/")
  .subscribe(response=>this.doctors = response);
}
}