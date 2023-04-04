import { AuthGuard } from './../../guardAuth/auth.guard';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public authGuard: AuthGuard) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authGuard.logout();
    this.authGuard.isLoggedIn = false;
  }
}
