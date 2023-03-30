import { AuthGuard } from './../../guardAuth/auth.guard';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //to be implemented
 
}
