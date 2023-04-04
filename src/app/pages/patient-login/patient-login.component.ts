import { Router } from '@angular/router';
import  Swal  from 'sweetalert2';
import { PatientService } from 'src/app/patient-service/patient.service';
import { FormsModule, FormGroup, NgForm } from '@angular/forms';
import { Patient } from './../patient-class/patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  //creating the object for patient []
  patient: Patient = new Patient();


  constructor(private patientService: PatientService, private router: Router) { }


  ngOnInit(): void {
  }
  loginPatient(patientLoginForm: NgForm) {
    console.log(patientLoginForm.value);
    
  }

  Space(event: any) {
    if (event.target.selectionStart === 0 && event.code === "Space") {
      event.preventDefault();
    }
  }
}
