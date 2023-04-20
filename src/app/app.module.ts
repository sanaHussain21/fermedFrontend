import  Swal  from 'sweetalert2';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MultiusersComponent } from './pages/multiusers/multiusers.component';
import { PatientSignupComponent } from './pages/patient-signup/patient-signup.component';
import { DoctorHomeComponent } from './pages/doctor-home/doctor-home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { PatientLoginComponent } from './pages/patient-login/patient-login.component';
import { DoctorProfileComponent } from './pages/doctorProfile/doctor-profile/doctor-profile.component';
import { DoctorSidenavbarComponent } from './components/doctorSidenavbar/doctor-sidenavbar/doctor-sidenavbar.component';
import { DoctorWelcomePageComponent } from './pages/doctor-welcome/doctor-welcome-page/doctor-welcome-page.component';
import {MatTableModule} from '@angular/material/table';
import { DoctorService } from './services/doctor.service';
import { DoctorAppointmentComponent } from './pages/doctorAppointment/doctor-appointment/doctor-appointment.component';
import { PatientSideNavBarComponent } from './components/patientSidenavbar/patient-side-nav-bar/patient-side-nav-bar.component';
import { PatientWelcomePageComponent } from './pages/patientWelcomePage/patient-welcome-page/patient-welcome-page.component';
import { PatientProfileComponent } from './pages/patientProfile/patient-profile/patient-profile.component';
import { PatientAppointmentComponent } from './pages/patientAppointment/patient-appointment/patient-appointment.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MultiusersComponent,
    PatientSignupComponent,
    DoctorHomeComponent,
    PatientDashboardComponent,
    PatientLoginComponent,
    DoctorProfileComponent,
    DoctorSidenavbarComponent,
    DoctorWelcomePageComponent,
    DoctorAppointmentComponent,
    PatientSideNavBarComponent,
    PatientWelcomePageComponent,
    PatientProfileComponent,
    PatientAppointmentComponent,
   

  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatRadioModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
 
  ],
  providers: [
    DoctorService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
