import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient-class/patient';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  
  constructor(private patient: Patient) { }


  ngOnInit(): void {
    this.patient.name = "";
  }

}
