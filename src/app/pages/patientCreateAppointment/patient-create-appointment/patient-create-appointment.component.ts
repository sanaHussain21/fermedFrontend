import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/patient-service/patient.service';

@Component({
  selector: 'app-patient-create-appointment',
  templateUrl: './patient-create-appointment.component.html',
  styleUrls: ['./patient-create-appointment.component.css']
})
export class PatientCreateAppointmentComponent implements OnInit {

  constructor(private patienService: PatientService) { }

  ngOnInit(): void {
  }

}
