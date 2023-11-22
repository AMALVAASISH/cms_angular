import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsAddComponent } from './appointments-add.component';

describe('AppointmentsAddComponent', () => {
  let component: AppointmentsAddComponent;
  let fixture: ComponentFixture<AppointmentsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
