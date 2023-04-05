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
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private router: Router, private observer: BreakpointObserver) { }





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




  ngOnInit(): void {
  }








  onLogout() {
    localStorage.removeItem('data')
  }

}
