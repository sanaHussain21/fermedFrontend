import { PatientService } from './../patient-services/patient-service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    codice_fiscale: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(15),
                    Validators.pattern("/^(?:[A-Z][AEIOU][AEIOUX]|[AEIOU]X{2}|[B-DF-HJ-NP-TV-Z]{2}[A-Z]){2}(?:[\dLMNP-V]{2}(?:[A-EHLMPR-T](?:[04LQ][1-9MNP-V]|[15MR][\dLMNP-V]|[26NS][0-8LMNP-U])|[DHPS][37PT][0L]|[ACELMRT][37PT][01LM]|[AC-EHLMPR-T][26NS][9V])|(?:[02468LNQSU][048LQU]|[13579MPRTV][26NS])B[26NS][9V])(?:[A-MZ][1-9MNP-V][\dLMNP-V]{2}|[A-M][0L](?:[1-9MNP-V][\dLMNP-V]|[0L][1-9MNP-V]))[A-Z]$/i")]),
    
    telephone_number: new FormControl("",[Validators.required, Validators.pattern("(^$|[0-9]{10})")]),
    username: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern("[a-zA-z].*")]),
    password: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern("^(?=.*[-,_]).{4,15}$")]),
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

  get Telephone_number(): FormControl {
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


}
