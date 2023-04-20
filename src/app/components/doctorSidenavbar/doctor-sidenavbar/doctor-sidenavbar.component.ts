import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-sidenavbar',
  templateUrl: './doctor-sidenavbar.component.html',
  styleUrls: ['./doctor-sidenavbar.component.css']
})
export class DoctorSidenavbarComponent implements OnInit {
  loggedinDoctor!: string | null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }



  loggedin() {
    this.loggedinDoctor = localStorage.getItem('data');
    return this.loggedinDoctor;
    
  }

  onLogout() {
    localStorage.removeItem('data')
  }
}
