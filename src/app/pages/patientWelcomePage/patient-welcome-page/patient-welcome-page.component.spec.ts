import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientWelcomePageComponent } from './patient-welcome-page.component';

describe('PatientWelcomePageComponent', () => {
  let component: PatientWelcomePageComponent;
  let fixture: ComponentFixture<PatientWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientWelcomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
