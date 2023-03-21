import { DoctorService } from './../../services/doctor.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
 
})
export class SignupComponent implements OnInit {

  constructor(private doctorService: DoctorService) { }

  public doctorDTO = {
    name:'' ,
    surname: '',
    gender: '' ,
    email:'' ,
    password: '',
    username: '',
  };


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
  
}
