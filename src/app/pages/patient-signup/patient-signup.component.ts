import { PatientService } from './../patient-services/patient-service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {

  constructor(private patientService: PatientService) { }


  //PatientDTO
  patientDTO = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern("[a-zA-z].*")]),
    surname: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern("[a-zA-z].*")]),
    codice_fiscale: new FormControl(""),
    telephone_number: new FormControl(""),
    username: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern("[a-zA-z].*")]),
    password: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern("^(?=.*[-,_]).{4,15}$")]),
    email:new FormControl("", [Validators.required, Validators.email]),
  });








  ngOnInit(): void {
  }

}
