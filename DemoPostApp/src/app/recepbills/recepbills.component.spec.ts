import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepbillsComponent } from './recepbills.component';

describe('RecepbillsComponent', () => {
  let component: RecepbillsComponent;
  let fixture: ComponentFixture<RecepbillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepbillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepbillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
