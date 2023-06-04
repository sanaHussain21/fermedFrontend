import { Router } from '@angular/router';
import { ViewAppointmentServiceService } from 'src/app/services/view-appointment-service.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { ApplyStylesModifier } from '@popperjs/core/lib/modifiers/applyStyles';
import { AppointmentClass } from '../../appointmentClass/appointment-class';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-doctor-update-appointment',
  templateUrl: './doctor-update-appointment.component.html',
  styleUrls: ['./doctor-update-appointment.component.css']
})
export class DoctorUpdateAppointmentComponent implements OnInit {

  
  appointments: AppointmentClass = new AppointmentClass();
  //[]

  editAppointment = new FormGroup({
    patient_id: new FormControl(''),
    time_date: new FormControl(''),
    payment: new FormControl(''),
    id_appuntamento: new FormControl('')
  })
  alert: boolean = false;
  
  
  constructor(private _appointmentService: ViewAppointmentServiceService, private router: ActivatedRoute, private _router: Router) { }
  
 
  
  ngOnInit(): void { 
   
    //console.log(this.router.snapshot.params.id_appuntamento)
    this._appointmentService.getAppointmentById(this.router.snapshot.params.id_appuntamento).subscribe((result: any) => {
      //console.log(result)
      this.editAppointment = new FormGroup({
        patient_id: new FormControl(result['patient_id']),
        time_date: new FormControl(result['time_date']),
        payment: new FormControl(result['payment']),
        id_appuntamento: new FormControl(result['id_appuntamento']),
      })
      //console.log("DATA THAT WE ARE GETTING IN THE EDITAPPOINTMENT: -> ", this.editAppointment.value)
    }) 
  }


//update appointment 

   
    updateAppointment() {
      this._appointmentService.updateAppointment(this.router.snapshot.params.id_appuntamento, this.editAppointment.value).subscribe((result: any) => {
      //console.log("the result: ", result)
        //console.log(result, "appointment update successfully!! :)")
        //  this.alert = true
        this._router.navigate(['/doctorHome/doctorAppointment'])
        
      },
        error => console.error("the error is ", error)
      
      )}
  

 /*alert is working, but as i am redirecting the doctor to the list of appointment, that's why i am not gonna use
  closeAlert() {
    this.alert = false;
  }
*/

  
  
  
 
  
 
}
