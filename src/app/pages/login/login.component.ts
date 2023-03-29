import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private doctorService: DoctorService , private router: Router) { }


    doctorLoginDTO = new FormGroup({
    email:new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8),Validators.maxLength(15), Validators.pattern("^(?=.*[-,_]).{8,15}$")]),
  })
  
  

  ngOnInit(): void {
  }



  

  //to impletement
  loginSubmit() { 
    this.doctorService.loginDoctor(this.doctorLoginDTO.value).subscribe(
      (data) => {
        //for testing purpose
        console.log(data);
        Swal.fire('Success', 'Doctor is Logged in', 'success');
        this.router.navigate(['/doctorHome']);
     },
    
      (error) => {
        
        console.log(this.doctorLoginDTO.value)
        alert('Something went wrong');
        Swal.fire('Error', 'Something went wrong', 'error');
        this.router.navigate(['/login']);
      }
    )
  }









  
  Space(event: any) {
    if (event.target.selectionStart === 0 && event.code === "Space") {
      event.preventDefault();
    }
  }



  get Email(): FormControl {
    return this.doctorLoginDTO.get("email") as FormControl;
   }
  
   get Password(): FormControl {
    return this.doctorLoginDTO.get("password") as FormControl;
   }

}
