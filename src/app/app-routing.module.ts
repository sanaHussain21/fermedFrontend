
import { PatientLoginComponent } from './pages/patient-login/patient-login.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DoctorHomeComponent } from './pages/doctor-home/doctor-home.component';
import {  MultiusersComponent} from './pages/multiusers/multiusers.component'
import { PatientSignupComponent } from './pages/patient-signup/patient-signup.component';
import { AuthGuard } from './guardAuth/auth.guard';
import { DoctorProfileComponent } from './pages/doctorProfile/doctor-profile/doctor-profile.component';
import { DoctorSidenavbarComponent } from './components/doctorSidenavbar/doctor-sidenavbar/doctor-sidenavbar.component';
import { DoctorWelcomePageComponent } from './pages/doctor-welcome/doctor-welcome-page/doctor-welcome-page.component';
import { DoctorAppointmentComponent } from './pages/doctorAppointment/doctor-appointment/doctor-appointment.component';




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
  
    children: [
      {
        path: '',
        component: DoctorWelcomePageComponent,
      },
      {
        path: 'doctorProfile',
        component: DoctorProfileComponent,
      },
      {
        path: 'doctorAppointment',
        component: DoctorAppointmentComponent,
      },
      
    ],
    
  },
  {
    path: 'patientDashboard',
    component: PatientDashboardComponent, canActivate:[AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'patientLogin',
    component: PatientLoginComponent,
    pathMatch: 'full'
  },
 
 
  /*



 {
    path: 'doctorProfile',
    component: DoctorProfileComponent,
    pathMatch: 'full'
  }






  //to implemented
  {
    path: 'doctorAppointmentDetails',
    component: DoctorProfileComponent,
    pathMatch: 'full'
  },
    //to implemented
  {
    path: 'doctorAbout',
    component: DoctorProfileComponent,
    pathMatch: 'full'
  },
    //to implemented
  {
    path: 'doctorHelp',
    component: DoctorProfileComponent,
    pathMatch: 'full'
  },
*/


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
