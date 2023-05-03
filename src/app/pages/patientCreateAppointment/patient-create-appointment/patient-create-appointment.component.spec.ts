import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCreateAppointmentComponent } from './patient-create-appointment.component';

describe('PatientCreateAppointmentComponent', () => {
  let component: PatientCreateAppointmentComponent;
  let fixture: ComponentFixture<PatientCreateAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientCreateAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientCreateAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
