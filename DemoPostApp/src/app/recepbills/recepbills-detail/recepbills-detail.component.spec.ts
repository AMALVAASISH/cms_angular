import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepbillsDetailComponent } from './recepbills-detail.component';

describe('RecepbillsDetailComponent', () => {
  let component: RecepbillsDetailComponent;
  let fixture: ComponentFixture<RecepbillsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepbillsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepbillsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
