
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from 'src/app/patient-service/patient.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {

  constructor(private patientService: PatientService) { }


  //PatientDTO
  patientDTO = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern("[a-zA-z].*")]),
    surname: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern("[a-zA-z].*")]),
    codice_fiscale: new FormControl("", [Validators.required, Validators.minLength(16), Validators.maxLength(16),
                    Validators.pattern("^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$")]),
    
    telephone_number: new FormControl("",[Validators.required, Validators.pattern("(^$|[0-9]{10})")]),
    username: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern("[a-zA-z].*")]),
    password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern("^(?=.*[-,_]).{4,15}$")]),
    email:new FormControl("", [Validators.required, Validators.email]),
  });








  ngOnInit(): void { }
  




  formSubmit(){
        
    //createDoctor: coming from doctorSerivce
      this.patientService.addPatient(this.patientDTO.value).subscribe(
        (data) => {
        
          console.log(data);
          Swal.fire('Success', 'Patient is registered', 'success');
       },
      
        (error) => {
          //error
          console.log(this.patientDTO.value)
          //alert('Something went wrong');
          Swal.fire('Error', 'Something went wrong','error')
        }
      )
  }
  
  get Name(): FormControl {
    return this.patientDTO.get("name") as FormControl;
}

get Surname(): FormControl {
return this.patientDTO.get("surname") as FormControl;
}


get Codice_Fiscale(): FormControl {
  return this.patientDTO.get("codice_fiscale") as FormControl;
  }

  get Telephone_Number(): FormControl {
    return this.patientDTO.get("telephone_number") as FormControl;
    }

    get Username(): FormControl {
      return this.patientDTO.get("username") as FormControl;
    }
  
    get Password(): FormControl {
      return this.patientDTO.get("password") as FormControl;
    }
  
    get Email(): FormControl {
      return this.patientDTO.get("email") as FormControl;
      }


      Space(event: any) {
        if (event.target.selectionStart === 0 && event.code === "Space") {
          event.preventDefault();
        }
      }
    
}
