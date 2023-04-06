import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorWelcomePageComponent } from './doctor-welcome-page.component';

describe('DoctorWelcomePageComponent', () => {
  let component: DoctorWelcomePageComponent;
  let fixture: ComponentFixture<DoctorWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorWelcomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
