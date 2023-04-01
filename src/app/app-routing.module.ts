import { PatientLoginComponent } from './pages/patient-login/patient-login.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DoctorHomeComponent } from './pages/doctor-home/doctor-home.component';
import {  MultiusersComponent} from './pages/multiusers/multiusers.component'
import { PatientSignupComponent } from './pages/patient-signup/patient-signup.component';
import { AuthGuard } from './guardAuth/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    pathMatch:'full',
  },

  {
    path: 'signup',
    component: SignupComponent,
    pathMatch:'full',
  },

  {
    path: 'login',
    component: LoginComponent,
    pathMatch:'full',
  },
  {
    path: 'multiuser',
    component: MultiusersComponent,
    pathMatch:'full',
  },
  {
    path: 'patientSignup',
    component: PatientSignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'doctorHome',
    component: DoctorHomeComponent, canActivate:[AuthGuard],
    pathMatch: 'full',
  },
  {
    path: 'patientDashboard',
    component: PatientDashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'patientLogin',
    component: PatientLoginComponent,
    pathMatch: 'full'
  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
