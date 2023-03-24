import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

   //add patient
   public addPatient(patient: any) {
    return this.http.post(`${baseUrl}/patient/createPatient`, patient)
  }
}
