import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepbillsListComponent } from './recepbills-list.component';

describe('RecepbillsListComponent', () => {
  let component: RecepbillsListComponent;
  let fixture: ComponentFixture<RecepbillsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepbillsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepbillsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
