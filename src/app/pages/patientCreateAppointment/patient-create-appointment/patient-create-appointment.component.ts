import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/patient-service/patient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-create-appointment',
  templateUrl: './patient-create-appointment.component.html',
  styleUrls: ['./patient-create-appointment.component.css']
})
export class PatientCreateAppointmentComponent implements OnInit {

  constructor(private patientService: PatientService) { }

  //AppointmentDTO

  appointmentDTO = new FormGroup({
    payment: new FormControl("",[Validators.required]),
    
  });









  

  ngOnInit(): void {
  }

  formSubmit(){
        
    //createDoctor: coming from doctorSerivce
      this.patientService.addPatient(this.appointmentDTO.value).subscribe(
        (data) => {
        
          console.log(data);
          Swal.fire('Success', 'Appointment created successfuly', 'success');
       },
      
        (error) => {
          //error
          console.log(this.appointmentDTO.value)
          //alert('Something went wrong');
          Swal.fire('Error', 'Something went wrong','error')
        }
      )
  }




  Space(event: any) {
        if (event.target.selectionStart === 0 && event.code === "Space") {
          event.preventDefault();
        }
      }

}
