import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayInListComponent } from './array-in-list.component';

describe('ArrayInListComponent', () => {
  let component: ArrayInListComponent;
  let fixture: ComponentFixture<ArrayInListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayInListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayInListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
