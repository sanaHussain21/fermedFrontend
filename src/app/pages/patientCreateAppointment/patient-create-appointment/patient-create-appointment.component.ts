



import { throwMatDuplicatedDrawerError } from '@angular/material/sidenav';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/patient-service/patient.service';
import { DoctorService } from 'src/app/services/doctor.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient-create-appointment',
  templateUrl: './patient-create-appointment.component.html',
  styleUrls: ['./patient-create-appointment.component.css']
})
export class PatientCreateAppointmentComponent implements OnInit {
  DoctorList: any;
  appointmentList: any;
  

//WITH ThIS FUNCTION WE GET DOCTORS NAME AND SURNME
  ChangeDoctor( doctorId: any) { 
   //console.log("selected doctor id:", doctorId.target.value)
    
  }

  constructor(private doctorService: DoctorService, private patientService: PatientService, private toastr: ToastrService) { }

  
  //AppointmentDTO[]


  appointmentDTO = new FormGroup({
    payment: new FormControl("", [Validators.required]),
    patient_id: new FormControl("", [Validators.required]),
    //time: new FormControl("", [Validators.required]),
    //date: new FormControl("", [Validators.required]),
    id_doc: new FormControl("", [Validators.required]),
    time_date: new FormControl("", [Validators.required]),



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


        
    //createDoctor: coming from doctorSerivce
    //  let appointmentJson = JSON.parse(JSON.stringify(this.appointmentDTO.value));

    //console.log( appointmentJson);



/*
if(this.appointmentDTO.value === null) {
       (error: any) => {
          //error
          console.log(this.appointmentDTO.value)
          //alert('Something went wrong');
          Swal.fire('Error', 'Something went wrong','error')
        }
    } else {
      (data : any) => {
        
          console.log(data);
          Swal.fire('Success', 'Appointment created successfuly', 'success');
       }
    } */

/**
 *  this.patientService.createAppointment(this.appointmentDTO.value).subscribe(
        
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
 */
  formSubmit() {
    if (this.appointmentDTO.valid) {
      this.patientService.createAppointment(this.appointmentDTO.value).subscribe(res => {
        //Swal.fire('Success', 'Appointment created successfuly', 'success');
     //new SUCCESS ALERT
        this.toastr.success('Appointment created successfuly', 'Success')

      });
    } else {
      //Swal.fire('Error', 'Please enter correct data','error')
      this.toastr.error('Please enter correct data', 'Error')
    }
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
    return this.appointmentDTO.get("patient_id") as FormControl;
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
    
    return this.appointmentDTO.get("time_date") as FormControl;
   }


get Doctor_Name(): FormControl {
  return this.appointmentDTO.get("id_doc") as FormControl;
}


}

