import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEditPreleitorComponent } from './dialogo-edit-preleitor.component';

describe('DialogoEditPreleitorComponent', () => {
  let component: DialogoEditPreleitorComponent;
  let fixture: ComponentFixture<DialogoEditPreleitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoEditPreleitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoEditPreleitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
