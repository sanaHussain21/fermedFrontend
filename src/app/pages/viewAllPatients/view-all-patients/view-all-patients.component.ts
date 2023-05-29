import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-patients',
  templateUrl: './view-all-patients.component.html',
  styleUrls: ['./view-all-patients.component.css']
})
export class ViewAllPatientsComponent implements OnInit {
   //will have all list of patients stored in this array []

  constructor() { }

  ngOnInit(): void {
  }

}
