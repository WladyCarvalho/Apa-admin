import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreleitorComponent } from './preleitor.component';

describe('PreleitorComponent', () => {
  let component: PreleitorComponent;
  let fixture: ComponentFixture<PreleitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreleitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreleitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
