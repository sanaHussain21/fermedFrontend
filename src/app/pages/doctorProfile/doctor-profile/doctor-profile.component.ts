import { HttpClient } from '@angular/common/http';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from './../../doctor-class/doctor';
import { Component, OnInit } from '@angular/core';
import baseUrl from 'src/app/patient-service/helper';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  //[]
  doctorDetails: any;
  doctor =  new Doctor();

  constructor(private doctorService: DoctorService) { }
  
 

  ngOnInit(): void {
    //this.doctorService.loginDoctor(this.doctor).subscribe(res => {
     // this.doctorDetails = res;
   //})
    /*
    this.doctorService.doctorData().subscribe((data: any) => {
      this.doctorDetails = data;
     })
    */
    
    //to get doctor data
    
    /*
     * 1- first we have to take the login doctor email 
     * 2- we have to see if the given email from backend and the email given from front-end are the same
     * 3- if they are same and we have to display data of that particular doctor and same for the patient.
     */

    //TESTING

  
     
  }
 
/*
 getDoctorDetails(){
   this.doctorService.doctorData().subscribe(
     (resp) => { 
       console.log("Got doctor details",resp);
     },
   (error) => {
    console.log("Didn't get doctor details",error);
    }

   
 )};
  */

}