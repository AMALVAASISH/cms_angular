import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepbillsAddComponent } from './recepbills-add.component';

describe('RecepbillsAddComponent', () => {
  let component: RecepbillsAddComponent;
  let fixture: ComponentFixture<RecepbillsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepbillsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepbillsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
