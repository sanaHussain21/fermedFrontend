import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PatientService } from 'src/app/patient-service/patient.service';

@Component({
  selector: 'app-patient-create-appointment',
  templateUrl: './patient-create-appointment.component.html',
  styleUrls: ['./patient-create-appointment.component.css']
})
export class PatientCreateAppointmentComponent implements OnInit {

  constructor(private patienService: PatientService) { }

  //AppointmentDTO

  appointmentDTO = new FormGroup({
    
  });









  

  ngOnInit(): void {
  }

}
