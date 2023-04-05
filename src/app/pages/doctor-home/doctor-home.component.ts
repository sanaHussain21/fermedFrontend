
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, throwMatDuplicatedDrawerError } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) { 
    
  }


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


 
}
