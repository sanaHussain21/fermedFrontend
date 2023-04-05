import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/pages/patient-class/patient';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  onLogout() {
    localStorage.removeItem('data')
  }

}
