import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ////for testing purpose should be removed
  doctorLoginDTO: any = FormGroup;
  
 
  //for testing purpose should be removed
  doctorsList: any = [];
 
  

  constructor(private formBuilder: FormBuilder, private doctorService: DoctorService , private router: Router) { }


    //doctorLoginDTO = new FormGroup({
    //email:new FormControl("", [Validators.required, Validators.email]),
    //password: new FormControl("", [Validators.required, Validators.minLength(8),Validators.maxLength(15), Validators.pattern("^(?=.*[-,_]).{8,15}$")]),
  //})
  



  

  ngOnInit(): void {
    //for testing should be removed
    //with this function we get all doctor list

    this.doctorLoginDTO = this.formBuilder.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern("^(?=.*[-,_]).{8,15}$")]),
    })


    this.doctorService.getDoctorList().subscribe((data: any) => { 
      this.doctorsList = data;
    })

  }

  
  //to impletement
  loginSubmit(data: any) { 
    if (data.email) { 
      this.doctorsList.forEach((item:any) => {
        if (item.email === data.email && item.password === data.password) {

         
           localStorage.setItem("isLoggedIn", "true");
           this.router.navigate(['doctorHome']);
        }
        else {
         
          localStorage.clear();
        }
      });
    }
    
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
