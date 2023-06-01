import { ViewAppointmentServiceService } from 'src/app/services/view-appointment-service.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-update-appointment',
  templateUrl: './doctor-update-appointment.component.html',
  styleUrls: ['./doctor-update-appointment.component.css']
})
export class DoctorUpdateAppointmentComponent implements OnInit {

  constructor(private toastr: ToastrService, private _appointmentService: ViewAppointmentServiceService) { }

  ngOnInit(): void {
  }

  
}
