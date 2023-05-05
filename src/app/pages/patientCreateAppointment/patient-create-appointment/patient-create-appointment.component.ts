import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/patient-service/patient.service';
import { DoctorService } from 'src/app/services/doctor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-create-appointment',
  templateUrl: './patient-create-appointment.component.html',
  styleUrls: ['./patient-create-appointment.component.css']
})
export class PatientCreateAppointmentComponent implements OnInit {
  DoctorList: any;

  constructor(private doctorService: DoctorService, private patientService: PatientService) { }

  //AppointmentDTO

  appointmentDTO = new FormGroup({
    payment: new FormControl("",[Validators.required]),
    patientName : new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern("[a-zA-z].*")]),
  });









  

  ngOnInit(): void {

    //getting doctor list
    this.doctorService.getDoctorList().subscribe((data: any) => {
      this.DoctorList = data;
    })
    
  

  }

  formSubmit(){
        
    //createDoctor: coming from doctorSerivce
      this.patientService.createAppointment(this.appointmentDTO.value).subscribe(
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
  


  get Payment(): FormControl {
    return this.appointmentDTO.get("payment") as FormControl;
  }
  
  get Patient_Name(): FormControl {
    return this.appointmentDTO.get("patientName") as FormControl;
}


}

