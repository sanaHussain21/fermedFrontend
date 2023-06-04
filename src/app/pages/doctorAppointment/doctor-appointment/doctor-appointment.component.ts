import { PatientService } from './../../../patient-service/patient.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupService } from '@ng-bootstrap/ng-bootstrap/util/popup';
import { DoctorSidenavbarComponent } from 'src/app/components/doctorSidenavbar/doctor-sidenavbar/doctor-sidenavbar.component';
import { ViewAppointmentServiceService } from 'src/app/services/view-appointment-service.service';
import Swal from 'sweetalert2';
import { DoctorUpdateAppointmentComponent } from '../../doctorUpdateAppointment/doctor-update-appointment/doctor-update-appointment.component';
import { AppointmentClass } from '../../appointmentClass/appointment-class';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css'],
  
})
export class DoctorAppointmentComponent implements OnInit {


  //will have all appointment stored in this array []

  appointments: AppointmentClass[] = [];
  public collection: any;

  /** 
  appointments = [
    {
      id_appuntamento: "",
      time_date: '',
      payment: '',
      patient_id: '',
      id_doc: '',  
    },
  ]
*/
  constructor(private  _appointment: ViewAppointmentServiceService, public dialog: MatDialog, private router:Router, private routerActive: ActivatedRoute) { }

  ngOnInit(): void {
    //loading all appointments
    this._appointment.appointments().subscribe((data: any) => {
      //success
      this.appointments = data;
      //console.log(this.appointments);
    },
      //error
      (error: any) => {
        console.log(error);
        Swal.fire('Error', 'Something went wrong while loading appointmetnts', 'error')
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
    
 //update appointment by i
    this._appointment.appointments().subscribe((result) => {
      this.collection = result;
      console.log(this.collection)
    })





    
    
  }
  /**
  //this function is needed to update patient appointment in a pop up
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, id_appuntamento: number): void {
    this.dialog.open(['doctorUpdateAppointment', id_appuntamento]);
    //this.router.navigate(['/doctorUpdateAppointment'])
  }

   */
  /**
  updateAppointmentRecord(id_appuntamento?: number) {
    console.log("appuntamento id = ", id_appuntamento)
    this._appointment.getId(id_appuntamento)
     this.router.navigate(['doctorUpdateAppointment'])
    
  }
*/
  //this function redirect us to the update appointment page with the appointment id
  updateAppointmentRecord(id_appuntamento?: number) {
    //console.log("appuntamento id = ", id_appuntamento)
    this.router.navigate(['doctorUpdateAppointment', id_appuntamento]);






   


  }
  
/**
 * //delete appointment by id
  deleteAppointmentById() { 
    //if (confirm('Are you sure you wanna delete this appointment?'))
    console.log("the id passed here is : ", this.routerActive.snapshot.params.id_appuntamento)
    console.log("button clicked")
      this._appointment.deleteAppointmentById(this.routerActive.snapshot.params.id_appuntamento)
      //console.log("APPOINTMENT DELETED SUCCESSFULL ID : ", result)
        .subscribe((response: any) => { 
          alert("APPOINTMENT DELETED SUCCESSFULL");
           console.log("APPOINTMENT DELETED SUCCESSFULL : ", response)
        //console.log("the id is:", id_appuntamento)
      })
  }
 */


  //delete appointment by id
  deleteAppointmentById(appoint: any) { 
    this.collection.splice(appoint.id_appuntamento, 1)
    this._appointment.deleteAppointmentById(appoint).subscribe((result) => {
      console.log("Appointment deleted successfully!! :)", result)
    })
  }


}