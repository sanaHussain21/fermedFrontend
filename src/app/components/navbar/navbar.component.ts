import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Patient } from 'src/app/pages/patient-class/patient';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedinDoctor!: string | null;
  loggedinPatient!: string | null;
  //@ViewChild(MatSidenav)
  //sidenav!: MatSidenav;
  //private observer: BreakpointObserver


  

  constructor(private router: Router) { }




/*
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
    }
    });
}

*/


  ngOnInit(): void {
  }


  //this loggindin function is needed to render the logout button visible only if the doctor is logged in
  loggedin() {
    this.loggedinDoctor = localStorage.getItem('data');
    return this.loggedinDoctor;
    
  }

  onLogout() {
    localStorage.removeItem('data')
    
  }





  

}
