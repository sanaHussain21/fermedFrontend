import { DoctorHomeComponent } from './../pages/doctor-home/doctor-home.component';
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


  //login doctor
  public loginDoctor(doctor: any) {
    return this.http.post(`${baseUrl}/doctor/doctorLogin`, doctor)
  }
}
