import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { AppointmentClass } from '../pages/appointmentClass/appointment-class';
import { Observable } from 'rxjs';
import { TimeMaskPlaceholder } from '@syncfusion/ej2-angular-calendars';

@Injectable({
  providedIn: 'root'
})
export class ViewAppointmentServiceService {

  constructor(private _httpClient: HttpClient) { }

  //load all appointments 
  public appointments() {
    return this._httpClient.get(`${baseUrl}/appointment/`)
  }

 
  //update patient appointment
  updateAppointment(id_appuntamento: number, appointments: AppointmentClass): Observable<Object>{
    return this._httpClient.put(`${baseUrl}/appointment/updateAppointment/${id_appuntamento}`, appointments);
  }

 /*
  updateAppointment(id_appuntamento: number, appointments: AppointmentClass) {
    return this._httpClient.put(`${baseUrl}/appointment/updateAppointment`): Observable<Object>
  }
  
 */




}
