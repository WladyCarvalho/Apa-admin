import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoEliminarConfirmComponent } from './dialogo-eliminar-confirm.component';

describe('DialogoEliminarConfirmComponent', () => {
  let component: DialogoEliminarConfirmComponent;
  let fixture: ComponentFixture<DialogoEliminarConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoEliminarConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoEliminarConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
