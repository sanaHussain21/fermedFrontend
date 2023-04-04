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

  public patientLogin(patient: Patient):Observable<object> {
    return this.http.post(`${baseUrl}/patient/patientLogin`,patient)
  }


}
