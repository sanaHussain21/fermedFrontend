import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ViewAppointmentServiceService {

  constructor(private _httpClient: HttpClient) { }

  //load all appointments 
  public appointments() {
    return this._httpClient.get(`${baseUrl}/appointment/`)
  }

  //update patient Appointment
  public updateAppointment(id_appuntamento: number, appointmentDTO: any) {
    return this._httpClient.put(`${baseUrl}/appointment/updateAppointment`)
  }

 
  





}
