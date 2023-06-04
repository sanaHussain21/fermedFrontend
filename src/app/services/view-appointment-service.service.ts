import { AppointmentClass } from './../pages/appointmentClass/appointment-class';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';
import { TimeMaskPlaceholder } from '@syncfusion/ej2-angular-calendars';
import { NumberInput } from '@angular/cdk/coercion';

@Injectable({
  providedIn: 'root'
})
export class ViewAppointmentServiceService {
  id_appuntamento?: number;

  constructor(private _httpClient: HttpClient) { }

  //load all appointments 
  public appointments() {
    return this._httpClient.get(`${baseUrl}/appointment/`)
  }

 
  //update patient appointment
  updateAppointmentById(appointments?: AppointmentClass): Observable<Object>{
    return this._httpClient.put<Object>(`${baseUrl}/appointment/updateAppointment/${this.id_appuntamento}`, appointments);
  }

  /** 
  //get id
  getId(getId_appuntamento?: number) {
    this.id_appuntamento = getId_appuntamento;
  }

*/

  //get appointment by id
  public getAppointmentById(id_appuntamento: number) {
    return this._httpClient.get(`${baseUrl}/appointment/getAppointmentById/${id_appuntamento}`);
  }

  

  //update appointment
  updateAppointment(id_appuntamento: number, data: any) {
    return this._httpClient.put(`${baseUrl}/appointment/updateAppointment`, data)
  
}
  


  }

