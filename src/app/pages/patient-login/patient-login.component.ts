import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router } from '@angular/router';
import  Swal  from 'sweetalert2';
import { PatientService } from 'src/app/patient-service/patient.service';
import { FormsModule, FormGroup } from '@angular/forms';
import { Patient } from './../patient-class/patient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  //creating the object for patient []
  patient: any = new Patient();

  

  constructor(private patientService: PatientService, private router: Router ) { }


  ngOnInit(): void {
  }

  loginPatient(){
    console.log(this.patient);
    this.patientService.patientLogin(this.patient).subscribe(data => {
      localStorage.setItem('PatientLoginData', JSON.stringify(this.patient))

      Swal.fire('Success', 'Patient is Logged in', 'success');
      this.router.navigate(['/patientDashboard'])
    },
      error => Swal.fire('Error', 'Sorry, insert the correct email and password', 'error'));
      
  }
  
  

  Space(event: any) {
    if (event.target.selectionStart === 0 && event.code === "Space") {
      event.preventDefault();
    }
  }
}
