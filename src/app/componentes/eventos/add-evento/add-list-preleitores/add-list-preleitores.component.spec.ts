import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListPreleitoresComponent } from './add-list-preleitores.component';

describe('AddListPreleitoresComponent', () => {
  let component: AddListPreleitoresComponent;
  let fixture: ComponentFixture<AddListPreleitoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddListPreleitoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListPreleitoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
