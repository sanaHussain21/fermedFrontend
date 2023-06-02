import { Router } from '@angular/router';
import { ViewAppointmentServiceService } from 'src/app/services/view-appointment-service.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { ApplyStylesModifier } from '@popperjs/core/lib/modifiers/applyStyles';
import { AppointmentClass } from '../../appointmentClass/appointment-class';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor-update-appointment',
  templateUrl: './doctor-update-appointment.component.html',
  styleUrls: ['./doctor-update-appointment.component.css']
})
export class DoctorUpdateAppointmentComponent implements OnInit {

  
  appointments: AppointmentClass = new AppointmentClass();
  //[]

  constructor(private _appointmentService: ViewAppointmentServiceService, private router: Router) { }
  
 
  
  ngOnInit(): void {
 
  }

  
  
  
  
 



  
 
}
