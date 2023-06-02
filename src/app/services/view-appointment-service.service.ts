import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { AppointmentClass } from '../pages/appointmentClass/appointment-class';
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
  updateAppointment(id_appuntamento: number, appointments: AppointmentClass): Observable<Object>{
    return this._httpClient.put(`${baseUrl}/appointment/updateAppointment/${id_appuntamento}`, appointments);
  }

  //get id
  getId(getId_appuntamento?: number) {
    this.id_appuntamento = getId_appuntamento;
  }



  //get appointment by id
  public getAppointmentById():Observable<Object> {
    return this._httpClient.get<Object>(`${baseUrl}/appointment/getAppointmentById/${this.id_appuntamento}`);
  }




}
