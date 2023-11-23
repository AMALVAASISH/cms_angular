import { Injectable } from '@angular/core';
import { Recepbills } from '../models/recepbills';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecepbillsService {

  recepbills: Recepbills[] = [];
  formRecepbillsData: Recepbills = new Recepbills();

  constructor(private httpClient: HttpClient) { }

  bindListRecepbills(): void{
    this.httpClient.get<Recepbills[]>(environment.apiUrl + "/api/receptionbills/") .subscribe(response=>this.recepbills = response);
    }

  // bindDetailRecepbills(): void{
  //   this.httpClient.get<Recepbills[]>(environment.apiUrl + "/api/receptionbills/") .subscribe(response=>this.recepbills = response);
  //   }
  bindDetailRecepbills(appointmentId: number): void {
    this.httpClient.get<Recepbills[]>(environment.apiUrl + "/api/receptionbills/" + appointmentId) .subscribe(response=>this.recepbills = response);
  }



  getRecepbillById(appointmentId: number): Observable<Recepbills> {
    return this.httpClient.get<Recepbills>(`${environment.apiUrl}/api/receptionbills/${appointmentId}`);
  }



  insertRecepbills(recepbills: Recepbills): Observable<any>{
      return this.httpClient.post(environment.apiUrl + "/api/receptionbills/", recepbills)
    }
  
}
