import { Observable } from 'rxjs';
import { Patient } from './../pages/patient-class/patient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patient: any;

  constructor(private http: HttpClient) { }
  
  public addPatient(patient: any) {
    return this.http.post(`${baseUrl}/patient/createPatient`,patient)
  }

  //calling the patient login controller from spring boot

  // public patientLogin(patient: any):Observable<object>
  public patientLogin(patient: any) {
    return this.http.post(`${baseUrl}/patient/patientLogin`,patient)
  }


  //calling create appointment API
  public createAppointment(appointment: any) {
    return this.http.post(`${baseUrl}/appointment/createAppointment`,appointment)
  }

  //calling create appointment API
  public getAppointmentData() {
    return this.http.get(`${baseUrl}/appointment/`)
  }

 //calling get all patients list  API
  public getAllPatientsList() {
    return this.http.get(`${baseUrl}/appointment/getAllPatientsList`)
  }



}
