import { TestBed } from '@angular/core/testing';

import { ViewAppointmentServiceService } from './view-appointment-service.service';

describe('ViewAppointmentServiceService', () => {
  let service: ViewAppointmentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAppointmentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
