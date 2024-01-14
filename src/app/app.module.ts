import { CanActivate } from '@angular/router';
import  Swal  from 'sweetalert2';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
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
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from './carousel/carousel.module';
import { PatientCarouselModule } from './pages/patient-carousel/patient-carousel.module';
import { MainHomePageComponent } from './pages/mainHomePage/main-home-page/main-home-page.component';
import { PatientCreateAppointmentComponent } from './pages/patientCreateAppointment/patient-create-appointment/patient-create-appointment.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ToastrModule } from 'ngx-toastr';
import { PatientViewAppointmentComponent } from './pages/patientViewAppointment/patient-view-appointment/patient-view-appointment.component';
import { DoctorUpdateAppointmentComponent } from './pages/doctorUpdateAppointment/doctor-update-appointment/doctor-update-appointment.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewAllPatientsComponent } from './pages/viewAllPatients/view-all-patients/view-all-patients.component';
import { HelpDoctorComponent } from './pages/help-doctor/help-doctor.component';
 











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
    MainHomePageComponent,
    PatientCreateAppointmentComponent,
    PatientViewAppointmentComponent,
    DoctorUpdateAppointmentComponent,
    ViewAllPatientsComponent,
    HelpDoctorComponent,
    

   
   

  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    CarouselModule,
    PatientCarouselModule,
    NgbModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    DateTimePickerModule,
    //ToastrModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      progressBar: true,
      preventDuplicates: true,
    }),
    MatDialogModule,
   
  ],
  providers: [
    DoctorService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
