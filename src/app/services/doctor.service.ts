import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor( private http: HttpClient) { }

  //add doctor
  public addDoctor(doctor: any) {
    return this.http.post(`${baseUrl}/doctor/createDoctor`, doctor)
  }
}
