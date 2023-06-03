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

@Component({
  selector: 'app-doctor-update-appointment',
  templateUrl: './doctor-update-appointment.component.html',
  styleUrls: ['./doctor-update-appointment.component.css']
})
export class DoctorUpdateAppointmentComponent implements OnInit {

  
  appointments: AppointmentClass = new AppointmentClass();
  //[]
/** */
  editAppointment = new FormGroup({
    patient_id: new FormControl(''),
    time_date: new FormControl(''),
    payment: new FormControl('')
  })
  
  
  constructor(private _appointmentService: ViewAppointmentServiceService, private router: ActivatedRoute) { }
  
 
  
  ngOnInit(): void { 
   
    console.log(this.router.snapshot.params.id_appuntamento)
    this._appointmentService.getAppointmentById(this.router.snapshot.params.id_appuntamento).subscribe((result: any) => {
      console.log(result)
      this.editAppointment = new FormGroup({
        patient_id: new FormControl(result['patient_id']),
        time_date: new FormControl(result['time_date']),
        payment: new FormControl(result['payment'])
      })
    })

 
  }


//update appointment 

    updateAppointment() {
      this._appointmentService.updateAppointment(this.router.snapshot.params.id_appuntamento, this.editAppointment.value).subscribe((result: any) => {
    
      console.log(result, "appointment update successfully!! :)")
      }
      )
  }



  /** 
  updateAppointment(id_appuntamento?: number) {
    console.log(this.appointments);
    this._appointmentService.updateAppointmentById(this.appointments).subscribe();
    this.router.navigate(['/doctorHome/doctorAppointment'])
    
  }
  */
  
  
  
 



  
 
}
