import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSideNavBarComponent } from './patient-side-nav-bar.component';

describe('PatientSideNavBarComponent', () => {
  let component: PatientSideNavBarComponent;
  let fixture: ComponentFixture<PatientSideNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSideNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientSideNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
