import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntStrDateComponent } from './int-str-date.component';

describe('IntStrDateComponent', () => {
  let component: IntStrDateComponent;
  let fixture: ComponentFixture<IntStrDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntStrDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntStrDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
