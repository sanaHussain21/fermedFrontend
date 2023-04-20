import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from './../../doctor-class/doctor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  //[]
  
  constructor(private doctorService: DoctorService) { 
    this.getDoctorDetails();
  }

  ngOnInit(): void {
  }




 getDoctorDetails(){
   this.doctorService.doctorData().subscribe(
     (resp) => { 
       console.log("Got doctor details",resp);
     },
   (error) => {
    console.log("Didn't get doctor details",error);
    }

   
 )};
  
  
  
  
  
  
  
}


