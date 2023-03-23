import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiusersComponent } from './multiusers.component';

describe('MultiusersComponent', () => {
  let component: MultiusersComponent;
  let fixture: ComponentFixture<MultiusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
