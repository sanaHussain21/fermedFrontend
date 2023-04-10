import { DoctorHomeComponent } from './../pages/doctor-home/doctor-home.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }
  
  

  //add doctor
  public addDoctor(doctor: any) {
    return this.http.post(`${baseUrl}/doctor/createDoctor`, doctor)
  }


  //login doctor
  public loginDoctor(doctor1: any) {
    return this.http.post(`${baseUrl}/doctor/doctorLogin`, doctor1)
  }


  //get doctor list for testing should be removed
  public getDoctorList() { 
    return this.http.get(`${baseUrl}/home/`)
  }


  public getDoctorData() {
    return this.http.get(`${baseUrl}/doctor/getDoctorDetails`)
  }







  
  addingDoctor(doctor: any) {
    let doctors = [];
    if (localStorage.getItem('Doctors')) {
      doctors = JSON.parse(localStorage.getItem('Doctors')as string);
      doctors = [doctor, ...doctors];
    } else {
      doctors = [doctor];
    }  
    localStorage.setItem('Doctors', JSON.stringify(doctors));
  }

}
