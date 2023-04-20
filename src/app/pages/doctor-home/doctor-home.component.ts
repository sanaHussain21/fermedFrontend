
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, throwMatDuplicatedDrawerError } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Doctor } from '../doctor-class/doctor';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  
  doctor = new Doctor();

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
