import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreleitoresComponent } from './preleitores.component';

describe('PreleitoresComponent', () => {
  let component: PreleitoresComponent;
  let fixture: ComponentFixture<PreleitoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreleitoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreleitoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
