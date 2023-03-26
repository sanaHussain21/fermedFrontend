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

  
  


  ngOnInit(): void {
  }



  
  Space(event: any) {
    if (event.target.selectionStart === 0 && event.code === "Space") {
      event.preventDefault();
    }
  }

}
