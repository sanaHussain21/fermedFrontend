import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Doctor } from '../doctor-class/doctor';
import { DoctorService } from './../../services/doctor.service';
import { DoctorResponse } from './doctor-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 //creating the object for doctor []
  doctor: any = new Doctor();
  email: any;
  password: any;
  DoctorResponce: any;
  
 

  

  constructor(private doctorService: DoctorService, private router: Router) { }


  ngOnInit(): void {
   
  }

  /**
   * loginDoctor() {
    //we are getting doctor data in the -> this.doctor
    //console.log(this.doctor);
    this.doctorService.loginDoctor(this.doctor).subscribe(data => {
      localStorage.setItem('data', JSON.stringify(data))
      
      //console.log("Doctor email :", this.doctor.email)
      

      //for testing
      
      Swal.fire('Success', 'Doctor is Logged in', 'success');
      this.router.navigate(['/doctorHome'])
    },
      error => Swal.fire('Error', 'Sorry, insert the correct email and password', 'error'));
      
  }
   */


  /** this code is working, but it is not letting me enter to the doctorHome page eventhough i insert the correct email and password
   *  loginDoctor() {
    //console.log(this.doctor); // Log the doctor object
    this.doctorService.loginDoctor(this.doctor).subscribe(
      (response) => {
        const typedResponse = response as DoctorResponse; // Type assertion
        console.log(typedResponse); // Log the response to the console
        if (typedResponse && typedResponse.email === this.doctor.email && typedResponse.password === this.doctor.password) {
          // Successful login
          localStorage.setItem('data', JSON.stringify(typedResponse));
          Swal.fire('Success', 'Doctor is logged in', 'success');
          this.router.navigate(['/doctorHome']);
        }

      },
      error => {
        // Error handling code...
        Swal.fire('Error', 'An error occurred during login', 'error');
      },
      () => {
        // Complete handling code...
        Swal.fire('Error', 'Bad Credentials email and password', 'error');
        this.router.navigate(['/login']);
      }
    );
  }
   
   */

  loginDoctor() {
    console.log("this.doctor object:", this.doctor); // Log the doctor object to verify email and password values
  
    this.doctorService.loginDoctor(this.doctor).subscribe(
      (response) => {
        console.log("Response from API:", response); // Log the response from the API
  
        const typedResponse = response as DoctorResponse; // Type assertion
  
        console.log("Typed response object:", typedResponse); // Log the typed response object
  
        if (typedResponse) {
          // Check if the response is not null or undefined
          if (typedResponse.email === this.doctor.email && typedResponse.password === this.doctor.password) {
            // Successful login
            localStorage.setItem('data', JSON.stringify(typedResponse));
            Swal.fire('Success', 'Doctor is logged in', 'success');
            this.router.navigate(['/doctorHome']);
          } else {
            // Incorrect email or password
            Swal.fire('Error', 'Incorrect email or password', 'error');
            this.router.navigate(['/login']);
          }
        } else {
          // Null or undefined response
          Swal.fire('Error', 'An error occurred during login', 'error');
          this.router.navigate(['/login']);
        }
      },
      error => {
        console.log("Error:", error); // Log the error
        Swal.fire('Error', 'An error occurred during login', 'error');
        this.router.navigate(['/login']);
      }
    );
  }
  
  

  
  
  
  
  
  
  
  
  
  
  
  







  

  Space(event: any) {
    if (event.target.selectionStart === 0 && event.code === "Space") {
      event.preventDefault();
    }
  }

}


/*//testing
  retrivingDoctorData() {
    console.log(this.doctor);
    this.doctorService.doctorData().subscribe(data => {
      localStorage.setItem('DoctorData', JSON.stringify(this.doctor))
    })
  }*/

