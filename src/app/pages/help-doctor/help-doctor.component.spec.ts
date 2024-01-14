import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDoctorComponent } from './help-doctor.component';

describe('HelpDoctorComponent', () => {
  let component: HelpDoctorComponent;
  let fixture: ComponentFixture<HelpDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
