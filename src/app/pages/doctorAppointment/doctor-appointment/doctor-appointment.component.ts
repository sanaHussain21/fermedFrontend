import { Component, OnInit } from '@angular/core';
import { ViewAppointmentServiceService } from 'src/app/services/view-appointment-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {

  //will have all appointment stored in this array
  appointments = [
    {
      id_appointment: '',
      time_date: '',
      payment: '',
      patient_id: '',
      id_doc: ''
    },
    

  ]

  constructor(private  _appointment: ViewAppointmentServiceService) { }

  ngOnInit(): void {
    this._appointment.appointments().subscribe((data: any) => {
      //success
      this.appointments = data;
      console.log(this.appointments);
    },
      //error
      (error: any) => {
        console.log(error);
        Swal.fire('Error', 'Something went wrong', 'error')
      });

  }
}
