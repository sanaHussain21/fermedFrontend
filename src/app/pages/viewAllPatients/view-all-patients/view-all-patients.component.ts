import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/patient-service/patient.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-all-patients',
  templateUrl: './view-all-patients.component.html',
  styleUrls: ['./view-all-patients.component.css']
})
export class ViewAllPatientsComponent implements OnInit {
   //will have all list of patients stored in this array []
  listOfPatients = [
    {
      id_patient: '',
      name: '',
      surname: '',
      codice_fiscale: '',
      telephone_number: '',
      email:'',
    }
  ]

  constructor(private _listOfPatients: PatientService) { }

  ngOnInit(): void {
    this._listOfPatients.getAllPatientsList().subscribe((data: any) => {
      //success
      this.listOfPatients = data;
    },
     //error
     (error: any) => {
      console.log(error);
      Swal.fire('Error', 'Something went wrong while loading  list of patients', 'error')
    });
    
  }
}
