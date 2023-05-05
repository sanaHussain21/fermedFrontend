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
    
    this.doctorService.doctorData().subscribe((data: any) => {
      this.doctorDetails = data;
     })
    
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