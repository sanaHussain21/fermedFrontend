import { DoctorService } from './../../services/doctor.service';
import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { Doctor } from '../doctor-class/doctor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 //creating the object for doctor []
 doctor: Doctor = new Doctor();
  

  

  constructor(private doctorService: DoctorService, private router: Router) { }


  ngOnInit(): void {
  }

  loginDoctor(){
    console.log(this.doctor);
    this.doctorService.loginDoctor(this.doctor).subscribe(data => {
      
      Swal.fire('Success', 'Doctor is Logged in', 'success');
      this.router.navigate(['/doctorHome'])
    },
      error => Swal.fire('Error', 'Sorry, insert the correct email and password', 'error'));
      
}

  Space(event: any) {
    if (event.target.selectionStart === 0 && event.code === "Space") {
      event.preventDefault();
    }
  }

}
