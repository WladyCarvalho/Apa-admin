import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreleitorListComponent } from './preleitor-list.component';

describe('PreleitorListComponent', () => {
  let component: PreleitorListComponent;
  let fixture: ComponentFixture<PreleitorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreleitorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreleitorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
