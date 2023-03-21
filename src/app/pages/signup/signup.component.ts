import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
 
})
export class SignupComponent implements OnInit {

  constructor() { }

  public doctorDTO = {
    name: '',
    surname: '',
    gender: '',
    email: '',
    password: '',
    username: '',
  };


  ngOnInit(): void { }
  

    formSubmit(){
      alert("Submit");
    }
  

  
  
  
  
}
