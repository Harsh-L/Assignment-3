import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayInComboComponent } from './array-in-combo.component';

describe('ArrayInComboComponent', () => {
  let component: ArrayInComboComponent;
  let fixture: ComponentFixture<ArrayInComboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayInComboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayInComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
