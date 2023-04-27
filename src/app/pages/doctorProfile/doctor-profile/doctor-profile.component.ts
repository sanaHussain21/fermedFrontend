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
  
  constructor(private doctorService: DoctorService, private httpClient : HttpClient) { 
   
    
    
  }

  ngOnInit(): void {
 
  }
  getDoctorDetails() {
    this.httpClient.get(`${baseUrl}/doctor/getDoctorDetails`)
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


