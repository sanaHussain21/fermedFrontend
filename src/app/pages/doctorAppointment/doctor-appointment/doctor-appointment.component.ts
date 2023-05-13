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
      patientId: 56,
      payment: 100,
      datetime: '2024-12-01 00:00',
      patientName: 'Antonia Pozzi'
      

    },
    {
      patientId: 56,
      payment: 50,
      datetime: '2024-02-20 09:30:00',
      patientName: 'Antonia Pozzi'
    },
    {
      patientId: 56,
      payment: 5,
      datetime: '2024-12-01 00:00',
      patientName: 'Antonia Pozzi'
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
