



import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  //for testing 30-03-2023
  isLoggedIn = true;
  constructor( private router: Router) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   //to check if the user is logged in
   
    if (localStorage.getItem("isLoggedIn") === "true"){ 
      this.router.navigate(['login']);
      return false;
    }
   
    return true;
  }

  logout() {
    localStorage.clear();
    //might delete : this.isLoggedIn = false;
    this.isLoggedIn = false;
    console.log("Doctor logout");
  }
  
}
