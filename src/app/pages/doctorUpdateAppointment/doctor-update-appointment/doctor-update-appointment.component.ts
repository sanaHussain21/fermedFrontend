import { Router } from '@angular/router';
import { ViewAppointmentServiceService } from 'src/app/services/view-appointment-service.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { ApplyStylesModifier } from '@popperjs/core/lib/modifiers/applyStyles';
import { AppointmentClass } from '../../appointmentClass/appointment-class';

@Component({
  selector: 'app-doctor-update-appointment',
  templateUrl: './doctor-update-appointment.component.html',
  styleUrls: ['./doctor-update-appointment.component.css']
})
export class DoctorUpdateAppointmentComponent implements OnInit {

  id_appuntamento!: number;
  appointments: AppointmentClass = new AppointmentClass();

  constructor(private _appointmentService: ViewAppointmentServiceService,  private router:Router) { }

  ngOnInit(): void {
    
  }
 /** 
  formSubmit() {
    //success
    this._appointmentService.updateAppointment(this.id_appuntamento, this.appointments).subscribe(data => {
      console.log(this.id_appuntamento, this.appointments)
      //this.goToAllAppointmentList();
    },
    error => console.log(error));
    
  }
*/
  goToAllAppointmentList() {
    this.router.navigate(['/doctorHome/doctorAppointment']); 
  }

  
}
