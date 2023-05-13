



import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';
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
  appointmentList: any;
  

//WITH TIS FUNCTION WE GET DOCTORS NAME AND SURNME
  ChangeDoctor(e: any) { 
    console.log(e.target.value)
    
  }

  constructor(private doctorService: DoctorService, private patientService: PatientService) { }

  
  //AppointmentDTO[]

  appointmentDTO = new FormGroup({
    payment: new FormControl("", [Validators.required]),
    patientName: new FormControl("", [Validators.required]),
    //time: new FormControl("", [Validators.required]),
    //date: new FormControl("", [Validators.required]),
    doctorName: new FormControl("", [Validators.required]),
    dateTime: new FormControl("", [Validators.required]),



  });



  ngOnInit(): void {

    //this function returns doctor list in select box
    this.doctorService.getDoctorList().subscribe((data: any) => {
      this.DoctorList = data;
     
    })

/*
    this.patientService.getAppointmentData().subscribe((data: any) => {
      this.appointmentList =  data;
    })
       */
  }

  formSubmit(){
        
    //createDoctor: coming from doctorSerivce
    //  let appointmentJson = JSON.parse(JSON.stringify(this.appointmentDTO.value));

    //console.log( appointmentJson);

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
/*
get Time(): FormControl {
  return this.appointmentDTO.get("time") as FormControl;
}
get Date(): FormControl {
  return this.appointmentDTO.get("date") as FormControl;
}
*/
  get Date_Time(): FormControl {
    
    return this.appointmentDTO.get("dateTime") as FormControl;
   }


get Doctor_Name(): FormControl {
  return this.appointmentDTO.get("doctorName") as FormControl;
}


}

