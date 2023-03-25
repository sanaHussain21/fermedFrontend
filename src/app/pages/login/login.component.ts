import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  doctorDTO = new FormGroup({
    email:new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8),Validators.maxLength(15), Validators.pattern("^(?=.*[-,_]).{8,15}$")]),
  })
  


  ngOnInit(): void {
  }



  
  Space(event: any) {
    if (event.target.selectionStart === 0 && event.code === "Space") {
      event.preventDefault();
    }
  }

}
