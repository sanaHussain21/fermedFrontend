import { environment } from './../../../environments/environment';
import { DoctorService } from './../../services/doctor.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
 
})
export class SignupComponent implements OnInit {

  constructor(private doctorService: DoctorService) { }

    doctorDTO = new FormGroup( {
    name: new FormControl("", [Validators.required, Validators.minLength(4),Validators.maxLength(15) , Validators.pattern("[a-zA-z].*")]),
    surname: new FormControl("", [Validators.required, Validators.minLength(4),Validators.maxLength(15) , Validators.pattern("[a-zA-z].*")]),
    gender: new FormControl("",Validators.required),
    email:new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(4),Validators.maxLength(15), Validators.pattern("^(?=.*[-,_]).{4,15}$")]),
    username: new FormControl("", [Validators.required, Validators.minLength(4),Validators.maxLength(15) , Validators.pattern("[a-zA-z].*")]),
 });

  ngOnInit(): void { }
  




    formSubmit(){
        
  //createDoctor: coming from doctorSerivce
    this.doctorService.addDoctor(this.doctorDTO.value).subscribe(
      (data) => {
      
        console.log(data);
        alert('success');
     },
    
      (error) => {
        //error
        console.log(this.doctorDTO.value)
        alert('Something went wrong' + error);
      }
    )
    }
  
  
  
  
   get Name(): FormControl {
        return this.doctorDTO.get("name") as FormControl;
   }
  
   get Surname(): FormControl {
    return this.doctorDTO.get("surname") as FormControl;
   }
  
   get Gender(): FormControl {
    return this.doctorDTO.get("gender") as FormControl;
   }
  
   get Email(): FormControl {
    return this.doctorDTO.get("email") as FormControl;
   }
  
   get Password(): FormControl {
    return this.doctorDTO.get("password") as FormControl;
   }
  
   get Username(): FormControl {
    return this.doctorDTO.get("username") as FormControl;
  }
 
  Space(event: any) {
    if (event.target.selectionStart === 0 && event.code === "Space") {
      event.preventDefault();
    }
  }




}
