import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorUpdateAppointmentComponent } from './doctor-update-appointment.component';

describe('DoctorUpdateAppointmentComponent', () => {
  let component: DoctorUpdateAppointmentComponent;
  let fixture: ComponentFixture<DoctorUpdateAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorUpdateAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorUpdateAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
