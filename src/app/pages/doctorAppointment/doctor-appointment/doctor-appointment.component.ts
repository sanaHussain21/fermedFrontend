import { PatientService } from './../../../patient-service/patient.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupService } from '@ng-bootstrap/ng-bootstrap/util/popup';
import { DoctorSidenavbarComponent } from 'src/app/components/doctorSidenavbar/doctor-sidenavbar/doctor-sidenavbar.component';
import { ViewAppointmentServiceService } from 'src/app/services/view-appointment-service.service';
import Swal from 'sweetalert2';
import { DoctorUpdateAppointmentComponent } from '../../doctorUpdateAppointment/doctor-update-appointment/doctor-update-appointment.component';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css'],
  
})
export class DoctorAppointmentComponent implements OnInit {

  //will have all appointment stored in this array []
  appointments = [
    {
      id_appointment: '',
      time_date: '',
      payment: '',
      patient_id: '',
      id_doc: '',
      /** 
      //patient name should be displayed in this variable -> (name) 
      name: '', 
      //patient surname should be displayed in this varibale -> (surname)
      surname: ''
      */
    },
  

  ]

  constructor(private  _appointment: ViewAppointmentServiceService, public dialog: MatDialog, private router:Router, private _patientService: PatientService) { }

  ngOnInit(): void {
    this._appointment.appointments().subscribe((data: any) => {
      //success
      this.appointments = data;
      console.log(this.appointments);
    },
      //error
      (error: any) => {
        console.log(error);
        Swal.fire('Error', 'Something went wrong while loading  appointmetnts  ', 'error')
      });
    
    /*
    //testing display patient name
    this._patientService.getAllPatientsList.subscribe((data: any) => {
      this.appointments = data;
    },
    //error
    (error: any) => {
      console.log(error);
      Swal.fire('Error', 'Something went wrong while loading  single patient', 'error')
    });
    */
    
    
  }
  //this function is needed to update patient appointment in a pop up
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DoctorUpdateAppointmentComponent);
    //this.router.navigate(['/doctorUpdateAppointment'])
  }




}
