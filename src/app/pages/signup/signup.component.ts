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

   public doctorDTO = new FormGroup( {
    name: new FormControl("", [Validators.required, Validators.minLength(4),Validators.maxLength(15) , Validators.pattern("[a-zA-z].*")]),
    surname: new FormControl("", [Validators.required, Validators.minLength(4),Validators.maxLength(15) , Validators.pattern("[a-zA-z].*")]),
    gender: new FormControl(""),
    email:new FormControl(""),
    password: new FormControl(""),
    username: new FormControl(""),
 });

  ngOnInit(): void { }
  


    formSubmit(){
      console.log(this.doctorDTO);
   

     
  //createDoctor: coming from doctorSerivce
    this.doctorService.addDoctor(this.doctorDTO).subscribe(
      (data) => {
        //success
        console.log(data);
        alert('success');
      },
      (error) => {
        //error
        console.log(error)
        alert('Something went wrong');
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
 
}
