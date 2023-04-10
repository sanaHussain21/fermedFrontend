import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from './../../doctor-class/doctor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctor:any = null;
  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {

    this.doctor = this.doctorService.getDoctorData();
    



  }

}
